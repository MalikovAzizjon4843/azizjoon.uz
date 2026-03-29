import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sectionIds = []) {
  const activeSection = ref(sectionIds[0] || '')
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { activeSection }
}
