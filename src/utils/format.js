// "2023.07" → { year: 2023, month: 7 }
function parseYm(value) {
  const [year, month] = value.split('.').map(Number)
  return { year, month }
}

// Timeline period: "2023, July — now", "2022, April — 2023, May", or
// "2025, July — September" when a role starts and ends in the same year.
// Month names come from i18n because Intl month data for Uzbek is missing in
// some browsers.
export function formatPeriod(start, end, { present, monthName }) {
  const s = parseYm(start)
  const from = `${s.year}, ${monthName(s.month)}`
  if (!end) return `${from} — ${present}`
  const e = parseYm(end)
  if (s.year === e.year) return `${from} — ${monthName(e.month)}`
  return `${from} — ${e.year}, ${monthName(e.month)}`
}

// Project years are stored as "2023", "2022 — 2023" or "2023 — now".
export function formatYears(years, present) {
  return years.replace(/\bnow\b/, present)
}

export function cvHref(path) {
  return encodeURI(path)
}
