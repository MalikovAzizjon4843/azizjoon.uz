import { watchEffect } from 'vue'

const SITE = 'https://azizjoon.uz'
const DEFAULT_IMAGE = '/og-image.png'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Keeps <title>, description, canonical and Open Graph tags in sync with the
// current page. `source` is a getter, so it re-runs on language changes.
// Returns { title, description, path, image? }.
export function usePageMeta(source) {
  watchEffect(() => {
    const { title, description, path = '/', image } = source()
    const url = `${SITE}${path}`
    const img = `${SITE}${image || DEFAULT_IMAGE}`
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)
    setCanonical(url)
  })
}
