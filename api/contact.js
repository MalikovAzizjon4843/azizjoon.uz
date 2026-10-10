// POST /api/contact — Vercel serverless function (Node runtime).
// Validates the contact form and forwards it to Telegram. The bot token stays
// on the server: it is read from TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID and is
// never exposed to the browser bundle.

import { normalizeContact, validateContact } from '../src/lib/contactValidation.js'

const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5
const LANG_NAMES = { uz: "O'zbekcha", ru: 'Русский', en: 'English' }

// Best-effort rate limit: this Map lives only as long as a warm serverless
// instance, and each instance has its own copy. It stops casual floods from a
// single IP, not a distributed attack.
const hits = new Map()

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded) return forwarded.split(',')[0].trim()
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown'
}

function rateLimited(ip, now = Date.now()) {
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(key)
    }
  }
  return recent.length > RATE_MAX
}

function escapeHtml(value) {
  return value.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c])
}

// "11.10.2026 14:05"
function tashkentTime(date = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Tashkent',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(date).map(({ type, value }) => [type, value]))
  return `${p.day}.${p.month}.${p.year} ${p.hour}:${p.minute}`
}

function formatMessage(data) {
  return [
    '🆕 <b>Yangi murojaat — azizjoon.uz</b>',
    '',
    `👤 <b>Ism:</b> ${escapeHtml(data.name)}`,
    `🏢 <b>Kompaniya:</b> ${data.company ? escapeHtml(data.company) : '—'}`,
    `📬 <b>Aloqa:</b> ${escapeHtml(data.contact)}`,
    `🌐 <b>Til:</b> ${LANG_NAMES[data.lang]}`,
    '💬 <b>Xabar:</b>',
    escapeHtml(data.message),
    '',
    `🕐 <b>Vaqt:</b> ${tashkentTime()} (Asia/Tashkent)`
  ].join('\n')
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object') return req.body
  if (typeof req.body === 'string') {
    try { return JSON.parse(req.body) } catch { return null }
  }
  return null
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'method_not_allowed' })
  }

  if (rateLimited(clientIp(req))) {
    return res.status(429).json({ ok: false, error: 'rate_limit' })
  }

  const body = parseBody(req)
  if (!body) return res.status(400).json({ ok: false, error: 'validation' })

  const data = normalizeContact(body)

  // Honeypot: bots fill the hidden "website" field. Pretend it worked.
  if (data.website) return res.status(200).json({ ok: true })

  const errors = validateContact(data)
  if (Object.keys(errors).length) {
    return res.status(400).json({ ok: false, error: 'validation', fields: Object.keys(errors) })
  }

  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  if (!token || !chatId) {
    console.error('[contact] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set; cannot deliver the message.')
    return res.status(500).json({ ok: false, error: 'server' })
  }

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: formatMessage(data),
        parse_mode: 'HTML',
        link_preview_options: { is_disabled: true }
      }),
      signal: AbortSignal.timeout(8000)
    })
    if (!tg.ok) {
      const detail = await tg.text().catch(() => '')
      console.error(`[contact] Telegram API responded ${tg.status}: ${detail.slice(0, 300)}`)
      return res.status(502).json({ ok: false, error: 'server' })
    }
  } catch (err) {
    console.error('[contact] Telegram request failed:', err?.message || err)
    return res.status(502).json({ ok: false, error: 'server' })
  }

  return res.status(200).json({ ok: true })
}
