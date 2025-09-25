const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://azizjoon.uz';
const OUTPUT_PATH = path.resolve(__dirname, '../public/sitemap.xml');

const routes = [
  '/',
  '/about',
  '/projects',
  '/contact',
];

const sitemapEntries = routes.map((route) => {
  const url = new URL(route, BASE_URL).toString();
  const priority = route === '/' ? '1.0' : '0.8';

  return `  <url>\n    <loc>${url}</loc>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;

fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf8');

console.log(`Sitemap written to ${OUTPUT_PATH}`);
