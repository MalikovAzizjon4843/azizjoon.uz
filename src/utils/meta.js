const BASE_URL = 'https://azizjoon.uz';
const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/1200x630.png?text=Azizjoon';
const GA_MEASUREMENT_ID = 'G-XXXXXXX';

const defaultMeta = {
  title: 'Azizjon Malikov | Full-Stack Developer Portfolio',
  description: 'Explore Azizjon Malikov’s full-stack (Java) portfolio, projects, blog posts, and ways to get in touch.',
  canonical: BASE_URL,
};

function ensureMetaTag(attribute, value, content) {
  if (typeof document === 'undefined') {
    return;
  }

  const selector = `meta[${attribute}="${value}"]`;
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function ensureLinkTag(rel, href) {
  if (typeof document === 'undefined') {
    return;
  }

  let link = document.head.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
}

export function setMeta(meta = {}) {
  if (typeof document === 'undefined') {
    return defaultMeta;
  }

  const merged = {
    ...defaultMeta,
    ...meta,
  };

  const canonicalUrl = new URL(merged.canonical || '/', BASE_URL).toString();

  document.title = merged.title;

  ensureMetaTag('name', 'description', merged.description);
  ensureMetaTag('property', 'og:title', merged.title);
  ensureMetaTag('property', 'og:description', merged.description);
  ensureMetaTag('property', 'og:url', canonicalUrl);
  ensureMetaTag('property', 'og:type', 'website');
  ensureMetaTag('property', 'og:image', PLACEHOLDER_IMAGE);
  ensureMetaTag('name', 'twitter:card', 'summary_large_image');
  ensureMetaTag('name', 'twitter:title', merged.title);
  ensureMetaTag('name', 'twitter:description', merged.description);
  ensureMetaTag('name', 'twitter:image', PLACEHOLDER_IMAGE);

  ensureLinkTag('canonical', canonicalUrl);

  return {
    ...merged,
    canonical: canonicalUrl,
  };
}

export function sendPageView(route, meta = defaultMeta) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
    return;
  }

  const pageLocation = new URL(route.fullPath || '/', BASE_URL).toString();

  window.gtag('event', 'page_view', {
    page_title: meta.title,
    page_location: pageLocation,
    page_path: route.fullPath || '/',
    send_to: GA_MEASUREMENT_ID,
  });
}
