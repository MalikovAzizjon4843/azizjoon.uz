import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(selector = '.animate-on-scroll', options = {}) {
  let observer = null

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (prefersReduced) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'none'
          } else {
            entry.target.classList.add('visible')
          }
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    })

    document.querySelectorAll(selector).forEach((el) => {
      observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}
