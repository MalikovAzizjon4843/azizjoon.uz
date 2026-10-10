// Contact form rules, shared by ContactForm.vue (client) and api/contact.js
// (server). The server never trusts the client: it runs the same checks again.

export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  contact: { min: 3, max: 120 },
  company: { min: 0, max: 120 },
  message: { min: 10, max: 2000 }
}

export const CONTACT_LANGS = ['uz', 'ru', 'en']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
// Telegram usernames: 5–32 chars, letters/digits/underscore, start with a letter.
const TELEGRAM_RE = /^@[A-Za-z][A-Za-z0-9_]{4,31}$/

function text(value) {
  return typeof value === 'string' ? value.trim() : ''
}

export function normalizeContact(input = {}) {
  return {
    name: text(input.name),
    company: text(input.company),
    contact: text(input.contact),
    message: text(input.message),
    website: text(input.website),
    lang: text(input.lang)
  }
}

export function contactKind(value) {
  if (EMAIL_RE.test(value)) return 'email'
  if (TELEGRAM_RE.test(value)) return 'telegram'
  return null
}

function outOfRange(value, { min, max }) {
  return value.length < min || value.length > max
}

// Returns { field: errorCode } for every invalid field; empty object when valid.
// Error codes map to i18n keys contact.validation.<code>.
export function validateContact(data) {
  const errors = {}

  if (outOfRange(data.name, CONTACT_LIMITS.name)) errors.name = 'name'

  if (!data.contact) errors.contact = 'contact_required'
  else if (outOfRange(data.contact, CONTACT_LIMITS.contact) || !contactKind(data.contact)) {
    errors.contact = 'contact_invalid'
  }

  if (outOfRange(data.company, CONTACT_LIMITS.company)) errors.company = 'company'

  if (outOfRange(data.message, CONTACT_LIMITS.message)) errors.message = 'message'

  if (!CONTACT_LANGS.includes(data.lang)) errors.lang = 'lang'

  return errors
}
