import { ref, onMounted } from 'vue'

export function useCountUp(target, duration = 2000) {
  const count = ref(0)
  let frameId = null

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      count.value = target
      return
    }

    const start = performance.now()

    function animate(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      count.value = Math.round(eased * target)

      if (progress < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
  })

  return { count }
}
