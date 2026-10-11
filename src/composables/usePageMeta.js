import { watchEffect } from 'vue'

const SITE = 'https://azizjoon.uz'
// Versioned file name so social networks drop their cached preview.
const DEFAULT_IMAGE = 'https://azizjoon.uz/og-image-v2.png'
const DEFAULT_IMAGE_SIZE = { width: 1200, height: 630 }

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
// Returns { title, description, path, image?, imageSize? } — image is a site
// path such as a project cover; imageSize is its { width, height }.
export function usePageMeta(source) {
  watchEffect(() => {
    const { title, description, path = '/', image, imageSize } = source()
    const url = `${SITE}${path}`
    const img = image ? `${SITE}${image}` : DEFAULT_IMAGE
    const size = image ? imageSize : DEFAULT_IMAGE_SIZE
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', img)
    if (size) {
      setMeta('property', 'og:image:width', String(size.width))
      setMeta('property', 'og:image:height', String(size.height))
    }
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', img)
    setCanonical(url)
  })
}
