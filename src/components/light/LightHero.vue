<template>
  <section id="hero" class="light-hero">
    <div class="hero-glow"></div>
    <div class="container hero-content">
      <div class="hero-badge anim" style="--d:0ms">
        <span class="dot"></span>
        {{ $t('hero.available') }}
      </div>

      <h1 class="hero-name anim" style="--d:150ms">
        {{ $t('hero.greeting') }}
        <br />
        <span class="text-gradient">{{ portfolioData.personal.name }} {{ portfolioData.personal.surname }}</span>
      </h1>

      <p class="hero-title anim" style="--d:300ms">{{ $t('hero.title') }}</p>
      <p class="hero-bio anim" style="--d:450ms">{{ $t('hero.bio') }}</p>

      <div class="hero-actions anim" style="--d:600ms">
        <a href="#projects" class="btn-gradient" @click.prevent="scrollTo('#projects')">{{ $t('hero.cta_projects') }}</a>
        <a href="#contact" class="btn-outline" @click.prevent="scrollTo('#contact')">{{ $t('hero.cta_contact') }}</a>
      </div>

      <div class="hero-stats anim" style="--d:750ms">
        <div v-for="(stat, i) in portfolioData.stats" :key="i" class="hero-stat" ref="statRefs">
          <span class="stat-value text-gradient">
            <span ref="countRefs">0</span>{{ stat.suffix }}
          </span>
          <span class="stat-label">{{ $t(stat.i18nLabel) }}</span>
        </div>
      </div>

      <div class="hero-divider"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '@/data/portfolio'

const countRefs = ref([])

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function animateCount(el, target, duration = 1500) {
  const start = performance.now()
  function tick(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const value = Math.round(easeOutExpo(progress) * target)
    el.textContent = value
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const els = countRefs.value
          if (Array.isArray(els)) {
            els.forEach((el, i) => {
              if (el) animateCount(el, portfolioData.stats[i].value)
            })
          }
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  const statsEl = document.querySelector('.hero-stats')
  if (statsEl) observer.observe(statsEl)
})
</script>

<style lang="scss" scoped>
.light-hero {
  padding: 80px 0 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-glow {
  position: absolute;
  inset: 0;
  z-index: -1;
  background: radial-gradient(600px circle at 50% 30%, rgba(79, 70, 229, 0.08), transparent);

  [data-theme="dark"] & {
    background: radial-gradient(600px circle at 50% 30%, rgba(129, 140, 248, 0.05), transparent);
  }
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.anim {
  animation: fadeInUp 0.5s ease-out both;
  animation-delay: var(--d);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 20px;
  background-color: var(--bg-tertiary);
  border-radius: 99px;
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  margin-bottom: 32px;

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #10b981;
    animation: pulse 2s ease-in-out infinite;
  }
}

.hero-name {
  font-family: var(--font-heading);
  font-size: 52px;
  font-weight: 600;
  line-height: 1.15;
  margin-bottom: 16px;

  @media (max-width: 767px) {
    font-size: 32px;
  }
}

.text-gradient {
  background: var(--gradient-full, var(--gradient));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-2);
  margin-bottom: 12px;
}

.hero-bio {
  font-size: 16px;
  color: var(--text-2);
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.btn-gradient {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  background: var(--gradient);
  color: #fff;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font-heading);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-hover);
  }
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  padding: 12px 28px;
  background: transparent;
  color: var(--accent);
  border: 1.5px solid var(--border-accent, var(--border));
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  font-family: var(--font-heading);
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--bg-tertiary);
  }
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 48px;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}

.hero-stat {
  text-align: center;
}

.stat-value {
  display: block;
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  display: block;
  font-size: 14px;
  color: var(--text-3);
  margin-top: 6px;
}

.hero-divider {
  width: 200px;
  height: 1px;
  background: var(--border);
  margin: 48px auto 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
</style>
