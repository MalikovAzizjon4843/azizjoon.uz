<template>
  <header class="bento-header">
    <div class="container bento-header__inner">
      <a href="/" class="bento-header__logo mono">~/aziz.dev</a>

      <nav class="bento-header__nav">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          class="nav-tab mono"
          :class="{ active: activeSection === item.id }"
          @click="closeMenu"
        >
          {{ $t(item.label) }}
        </a>
      </nav>

      <div class="bento-header__controls">
        <LangSwitcher />
        <ThemeToggle />
        <VersionSwitcher />
      </div>

      <button
        class="bento-header__burger"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <Teleport to="body">
      <Transition name="overlay">
        <div v-if="menuOpen" class="bento-header__overlay" @click.self="menuOpen = false">
          <div class="bento-header__mobile-content">
            <button class="mobile-close" @click="menuOpen = false" aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <nav class="mobile-nav">
              <a
                v-for="item in navItems"
                :key="item.id"
                :href="item.href"
                class="mobile-nav-link"
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
const activeSection = ref('hero')

const navItems = [
  { id: 'hero', href: '#hero', label: 'nav.home' },
  { id: 'experience', href: '#experience', label: 'nav.experience' },
  { id: 'projects', href: '#projects', label: 'nav.projects' },
  { id: 'contact', href: '#contact', label: 'nav.contact' }
]

function closeMenu() {
  menuOpen.value = false
}

let observer = null

onMounted(() => {
  const sections = navItems.map(i => document.getElementById(i.id)).filter(Boolean)
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      }
    },
    { rootMargin: '-40% 0px -50% 0px' }
  )
  sections.forEach(s => observer.observe(s))

  function onEsc(e) {
    if (e.key === 'Escape') menuOpen.value = false
  }
  document.addEventListener('keydown', onEsc)
  onUnmounted(() => {
    observer?.disconnect()
    document.removeEventListener('keydown', onEsc)
  })
})
</script>

<style lang="scss" scoped>
.bento-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--bg);
  border-bottom: 1px solid var(--border);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 12px 0;
    gap: 12px;
  }

  &__logo {
    font-size: 15px;
    font-weight: 500;
    color: var(--accent);
    white-space: nowrap;
    flex-shrink: 0;
  }

  &__nav {
    display: flex;
    gap: 4px;
    align-items: center;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 6px;

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
      background-color: var(--text);
      transition: all 0.3s;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 20px;
        height: 2px;
        background-color: var(--text);
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

  &__overlay {
    position: fixed;
    inset: 0;
    z-index: 300;
    background-color: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__mobile-content {
    text-align: center;
  }
}

.nav-tab {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  color: var(--text-3);
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    color: var(--text-2);
  }

  &.active {
    background-color: var(--accent);
    color: var(--bg);
  }
}

.mobile-close {
  position: absolute;
  top: 16px;
  right: 16px;
  color: var(--text-2);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.mobile-nav-link {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }
}

.mobile-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.2s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}
</style>
