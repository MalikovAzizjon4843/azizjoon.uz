# azizjoon.uz

Personal portfolio of Azizjon Malikov — Vue 3 + Vite, deployed on Vercel.
The UI follows the "Liquid Glass" design in [`design/liquid-glass-2.html`](design/liquid-glass-2.html).

## Stack

- Vue 3 (`<script setup>`), Vue Router, Pinia, vue-i18n (uz / ru / en)
- SCSS design system in `src/styles/` (tokens, glass material, background)
- three.js for the 3D gem badge (lazy-loaded, SVG fallback)
- Project catalog with case-study pages and a screenshot lightbox
- Vercel serverless function `api/contact.js` for the contact form → Telegram

## Project layout

```
api/contact.js            POST /api/contact — validates and forwards to Telegram
src/components/           UI components (TopBar, HeroSection, GemBadge, ContactForm, …)
src/data/portfolio.js     Profile, highlights, experience
src/data/projects.js      Project catalog (home carousel, /projects, /projects/:slug, sitemap)
src/i18n/{uz,ru,en}.json  UI copy
src/lib/                  Code shared by the browser and the API (form validation)
src/styles/               Design tokens, glass material, background, base
public/projects/<slug>/   Project covers and screenshots
scripts/                  Build helpers (sitemap generation)
design/                   Design reference (not part of the build)
```

## Projects

Every project is one entry in [`src/data/projects.js`](src/data/projects.js);
the schema is documented at the top of that file.

To add a project:

1. Add an object to the list with a unique `slug` (lowercase, `a-z0-9-`), an
   `order`, `category`, `status`, `year` and `stack`.
2. Fill `content.uz`, `content.ru` and `content.en`. Only `title` is required;
   empty `problem` / `solution` / `result` / `highlights` are simply not shown.
3. To show it in the home carousel, set `featured: true` **and** add the slug to
   `FEATURED_ORDER` (that list sets the carousel order).
4. Create `public/projects/<slug>/` for its images (see below).

`npm run build` regenerates `public/sitemap.xml` from the catalog first and
fails if the catalog is inconsistent (duplicate slugs, unknown status, missing
image files, …). Run `npm run sitemap` to check it on its own.

Everything in `projects.js` is public. Never add server IP addresses, database
names, usernames, tokens, clients' phone numbers or emails, internal domains,
or links to admin panels that need a login.

### Screenshots

Put images in `public/projects/<slug>/` and reference them from the project:

```js
cover: '/projects/rtam/cover.webp',
screenshots: [
  { src: '/projects/rtam/01.webp', caption: { uz: '…', ru: '…', en: '…' } },
  { src: '/projects/rtam/02.webp', caption: { uz: '…', ru: '…', en: '…' } }
]
```

- Format **WebP**, **1600 × 1000** (16:10) — the cover too.
- Under **300 KB** each, e.g. `cwebp -q 82 input.png -o 01.webp` or squoosh.app.
- Names: `cover.webp`, then `01.webp`, `02.webp`, … (3–8 is plenty).
- **Blur or replace personal data** before adding: full names, PINFL, passport
  data, phone numbers, addresses, internal document numbers and confidential
  amounts. For internal government systems, get permission first; without it,
  show the general interface or a diagram instead.

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
