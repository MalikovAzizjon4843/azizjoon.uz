<template>
  <header class="light-header">
    <div class="light-header__inner">
      <a href="/v3" class="light-header__logo">
        aziz<span class="logo-gradient">jon</span>.uz
      </a>

      <nav class="light-header__nav">
        <a
          v-for="(item, i) in navItems"
          :key="i"
          :href="item.href"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.href)"
        >
          {{ $t(item.label) }}
        </a>
      </nav>

      <div class="light-header__controls">
        <LangSwitcher />
        <ThemeToggle />
        <VersionSwitcher />
        <a :href="portfolioData.personal.resumePath" download class="resume-btn">
          {{ $t('resume.download') }}
        </a>
      </div>

      <button
        class="light-header__burger"
        :aria-label="menuOpen ? 'Close' : 'Menu'"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="overlay">
        <div v-if="menuOpen" class="mobile-overlay" @click.self="menuOpen = false">
          <div class="mobile-menu">
            <button class="mobile-close" @click="menuOpen = false" aria-label="Close">
              <span></span>
            </button>
            <nav>
              <a
                v-for="(item, i) in navItems"
                :key="i"
                :href="item.href"
                :style="{ animationDelay: i * 80 + 'ms' }"
                @click="menuOpen = false"
              >
                {{ $t(item.label) }}
              </a>
            </nav>
            <div class="mobile-controls">
              <LangSwitcher />
              <ThemeToggle />
              <VersionSwitcher />
            </div>
            <a :href="portfolioData.personal.resumePath" download class="resume-btn mobile-resume">
              {{ $t('resume.download') }}
            </a>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from '@/data/portfolio'
import LangSwitcher from '@/components/shared/LangSwitcher.vue'
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
import VersionSwitcher from '@/components/shared/VersionSwitcher.vue'

const menuOpen = ref(false)
const activeSection = ref('')

const navItems = [
  { href: '#hero', label: 'nav.home', id: 'hero' },
  { href: '#about', label: 'nav.about', id: 'about' },
  { href: '#experience', label: 'nav.experience', id: 'experience' },
  { href: '#projects', label: 'nav.projects', id: 'projects' },
  { href: '#contact', label: 'nav.contact', id: 'contact' }
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

let observer = null

function handleEsc(e) { if (e.key === 'Escape') menuOpen.value = false }

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
  const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      })
    },
    { rootMargin: '-40% 0px -50% 0px' }
  )
  sections.forEach(s => observer.observe(s))
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEsc)
  if (observer) observer.disconnect()
})
</script>

<style lang="scss" scoped>
.light-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 0.5px solid var(--border);

  [data-theme="dark"] & {
    background-color: rgba(15, 23, 42, 0.8);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    gap: 16px;
  }

  &__logo {
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 600;
    color: var(--text);

    .logo-gradient {
      background: var(--gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &__nav {
    display: flex;
    gap: 32px;

    a {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-2);
      position: relative;
      transition: color 0.2s;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--gradient);
        transition: width 0.3s ease;
      }

      &:hover, &.active {
        color: var(--accent);
        &::after { width: 100%; }
      }
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__burger {
    display: none;
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
      display: flex;
    }

    span {
      position: relative;
      width: 22px;
      height: 2px;
      background-color: var(--text);
      transition: all 0.3s;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 22px;
        height: 2px;
        background-color: var(--text);
        transition: all 0.3s;
      }
      &::before { top: -7px; }
      &::after { top: 7px; }

      &.open {
        background-color: transparent;
        &::before { top: 0; transform: rotate(45deg); }
        &::after { top: 0; transform: rotate(-45deg); }
      }
    }
  }
}

.resume-btn {
  padding: 8px 20px;
  background: var(--gradient);
  color: #fff;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font-heading);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-hover);
  }
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    a {
      font-family: var(--font-heading);
      font-size: 24px;
      font-weight: 600;
      color: var(--text);
      animation: fadeInUp 0.4s ease both;
    }
  }
}

.mobile-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    position: relative;
    width: 24px;
    height: 2px;
    background: transparent;
    &::before, &::after {
      content: '';
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: var(--text);
    }
    &::before { transform: rotate(45deg); }
    &::after { transform: rotate(-45deg); }
  }
}

.mobile-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.mobile-resume {
  margin-top: 8px;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
