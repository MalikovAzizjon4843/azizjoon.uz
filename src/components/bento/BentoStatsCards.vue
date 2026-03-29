<template>
  <div
    v-for="(stat, i) in portfolioData.stats"
    :key="i"
    class="bento-stat-card"
  >
    <span class="stat-value">{{ counts[i] }}{{ stat.suffix }}</span>
    <span class="stat-label mono">{{ $t(stat.i18nLabel) }}</span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '@/data/portfolio'

const counts = ref(portfolioData.stats.map(() => 0))
let hasAnimated = false

onMounted(() => {
  const el = document.querySelector('.bento-stat-card')
  if (!el) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true
        animateCountUp()
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )
  observer.observe(el)
})

function animateCountUp() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    counts.value = portfolioData.stats.map(s => s.value)
    return
  }

  const duration = 1500
  const start = performance.now()

  function tick(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
    counts.value = portfolioData.stats.map(s => Math.round(eased * s.value))
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}
</script>

<style lang="scss" scoped>
.bento-stat-card {
  grid-column: span 3;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    grid-column: span 6;
  }
}

.stat-value {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  line-height: 1;
}

.stat-label {
  font-size: 8px;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
