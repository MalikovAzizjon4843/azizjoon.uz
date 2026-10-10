// "2023.07" → { year: 2023, month: 7 }
function parseYm(value) {
  const [year, month] = value.split('.').map(Number)
  return { year, month }
}

// Timeline period: "2023 — now", "2022 — 2023", or "2025, July — September"
// when a role starts and ends in the same year. Month names come from i18n
// because Intl month data for Uzbek is missing in some browsers.
export function formatPeriod(start, end, { present, monthName }) {
  const s = parseYm(start)
  if (!end) return `${s.year} — ${present}`
  const e = parseYm(end)
  if (s.year !== e.year) return `${s.year} — ${e.year}`
  return `${s.year}, ${monthName(s.month)} — ${monthName(e.month)}`
}

export function cvHref(path) {
  return encodeURI(path)
}
