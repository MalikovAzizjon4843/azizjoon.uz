# azizjoon.uz

Personal portfolio of Azizjon Malikov — Vue 3 + Vite, deployed on Vercel.
The UI follows the "Liquid Glass" design in [`design/liquid-glass-2.html`](design/liquid-glass-2.html).

## Stack

- Vue 3 (`<script setup>`), Vue Router, Pinia, vue-i18n (uz / ru / en)
- SCSS design system in `src/styles/` (tokens, glass material, background)
- three.js for the 3D gem badge (lazy-loaded, SVG fallback)
- Vercel serverless function `api/contact.js` for the contact form → Telegram

## Project layout

```
api/contact.js            POST /api/contact — validates and forwards to Telegram
src/components/           UI components (TopBar, HeroSection, GemBadge, ContactForm, …)
src/data/portfolio.js     All facts: profile, highlights, projects, experience
src/i18n/{uz,ru,en}.json  All copy
src/lib/                  Code shared by the browser and the API (form validation)
src/styles/               Design tokens, glass material, background, base
design/                   Design reference (not part of the build)
```

## Development

```bash
npm install
npm run dev
```

`npm run dev` also serves `/api/contact` locally through a small Vite middleware
that runs the same handler as production. To actually deliver messages, create
`.env.local` from `.env.example` and fill in the Telegram values:

```bash
cp .env.example .env.local
```

Without them the form shows its error state and the terminal logs
`TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set`.

To run exactly what Vercel runs (static build + serverless functions), use the
Vercel CLI instead:

```bash
npm i -g vercel
vercel link
vercel env pull .env.local
vercel dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment variables

| Name | Where | Purpose |
| --- | --- | --- |
| `TELEGRAM_BOT_TOKEN` | Vercel → Settings → Environment Variables (Production, Preview, Development) | Bot that delivers contact messages |
| `TELEGRAM_CHAT_ID` | same | Chat that receives them |

These are **server-only**. Never prefix them with `VITE_`: Vite inlines every
`VITE_*` variable into the public JavaScript bundle.

## Contact API

`POST /api/contact` with JSON `{ name, company, contact, message, website, lang }`.

- `name` 2–80 chars, `contact` an email or `@telegram_username` (3–120),
  `company` optional (≤120), `message` 10–2000, `lang` one of `uz | ru | en`.
- `website` is a honeypot: when filled, the API answers `200` and sends nothing.
- More than 5 requests per IP in 10 minutes → `429`. The limiter is in-memory,
  so on serverless it is best effort (per warm instance).
- Responses: `{ ok: true }` or `{ ok: false, error: "validation" | "rate_limit" | "server" }`.
  Telegram errors are only logged on the server.
