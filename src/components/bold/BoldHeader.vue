<template>
  <header class="bold-header">
    <div class="bold-header__inner">
      <a href="/v4" class="bold-header__logo mono">
        <span class="text-accent">root</span><span class="text-muted">@aziz:~$</span>
      </a>

      <nav class="bold-header__nav">
        <a
          v-for="(item, i) in navItems"
          :key="i"
          :href="item.href"
          class="mono"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.href)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="bold-header__controls">
        <LangSwitcher />
        <ThemeToggle />
        <VersionSwitcher />
      </div>

      <button
        class="bold-header__burger"
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
                class="mobile-link"
                :style="{ animationDelay: i * 80 + 'ms' }"
                @click="menuOpen = false"
              >
                {{ item.label }}
              </a>
            </nav>
            <div class="mobile-controls">
              <LangSwitcher />
              <ThemeToggle />
              <VersionSwitcher />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LangSwitcher from '@/components/shared/LangSwitcher.vue'
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
import VersionSwitcher from '@/components/shared/VersionSwitcher.vue'

const menuOpen = ref(false)
const activeSection = ref('')

const navItems = [
  { href: '#hero', label: './home', id: 'hero' },
  { href: '#about', label: './about', id: 'about' },
  { href: '#experience', label: './exp', id: 'experience' },
  { href: '#projects', label: './projects', id: 'projects' },
  { href: '#contact', label: './contact', id: 'contact' }
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function handleEsc(e) { if (e.key === 'Escape') menuOpen.value = false }

let observer = null

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
.bold-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg);
  border-bottom: 1px solid var(--border);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 56px;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 24px;
    gap: 16px;
  }

  &__logo {
    font-size: 14px;
    font-weight: 500;
    color: var(--text);
    white-space: nowrap;

    .text-muted { color: var(--text-3); }
  }

  &__nav {
    display: flex;
    gap: 24px;

    a {
      font-size: 12px;
      color: var(--text-3);
      transition: color 0.15s;
      &:hover, &.active { color: var(--accent); }
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
      width: 20px;
      height: 2px;
      background-color: var(--accent);
      transition: all 0.3s;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: var(--accent);
        transition: all 0.3s;
      }
      &::before { top: -6px; }
      &::after { top: 6px; }

      &.open {
        background-color: transparent;
        &::before { top: 0; transform: rotate(45deg); }
        &::after { top: 0; transform: rotate(-45deg); }
      }
    }
  }
}

.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--bg);
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
      background-color: var(--accent);
    }
    &::before { transform: rotate(45deg); }
    &::after { transform: rotate(-45deg); }
  }
}

.mobile-link {
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  font-family: var(--font-mono);
  animation: fadeInUp 0.4s ease both;
}

.mobile-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.overlay-enter-active,
.overlay-leave-active { transition: opacity 0.3s ease; }
.overlay-enter-from,
.overlay-leave-to { opacity: 0; }

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
