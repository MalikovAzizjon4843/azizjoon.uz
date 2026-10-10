// Helpers for the liquid glass material (see src/styles/_glass.scss).

let specularInstalled = false

// Tracks the pointer over any .glass element and feeds --mx / --my to its
// specular highlight. One passive document listener for the whole app.
export function installSpecular() {
  if (specularInstalled || typeof document === 'undefined') return
  specularInstalled = true
  document.addEventListener('pointermove', (e) => {
    const glass = e.target.closest?.('.glass')
    if (!glass) return
    const r = glass.getBoundingClientRect()
    glass.style.setProperty('--mx', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`)
    glass.style.setProperty('--my', `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`)
  }, { passive: true })
}

let refract = null

// The SVG displacement backdrop-filter only renders in Chromium, and is
// skipped when the user asks for less transparency.
export function useRefract() {
  if (refract === null) {
    const brands = typeof navigator !== 'undefined' && navigator.userAgentData?.brands
    const chromium = !!brands && brands.some((b) => /Chromium/i.test(b.brand))
    const reduceTransparency = typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-transparency: reduce)').matches
    refract = chromium && !reduceTransparency
  }
  return refract
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}
