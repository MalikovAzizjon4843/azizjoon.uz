<template>
  <header class="minimal-nav">
    <div class="minimal-nav__inner">
      <a href="/v2" class="minimal-nav__logo">
        Azizjon<span class="dot">.</span>
      </a>

      <nav class="minimal-nav__links">
        <a v-for="(item, i) in navItems" :key="i" :href="item.href" class="mono" @click.prevent="scrollTo(item.href)">
          <span class="text-accent">0{{ i + 1 }}.</span> {{ $t(item.label) }}
        </a>
      </nav>

      <div class="minimal-nav__controls">
        <LangSwitcher />
        <ThemeToggle />
        <VersionSwitcher />
      </div>

      <button
        class="minimal-nav__burger"
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
                <span class="mono text-accent">0{{ i + 1 }}.</span>
                <span>{{ $t(item.label) }}</span>
              </a>
            </nav>
            <a :href="portfolioData.personal.resumePath" download class="mobile-resume mono">
              {{ $t('resume.download') }}
            </a>
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
import { portfolioData } from '@/data/portfolio'
import LangSwitcher from '@/components/shared/LangSwitcher.vue'
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
import VersionSwitcher from '@/components/shared/VersionSwitcher.vue'

const menuOpen = ref(false)

const navItems = [
  { href: '#about', label: 'nav.about' },
  { href: '#experience', label: 'nav.experience' },
  { href: '#projects', label: 'nav.projects' },
  { href: '#contact', label: 'nav.contact' }
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function handleEsc(e) {
  if (e.key === 'Escape') menuOpen.value = false
}

onMounted(() => document.addEventListener('keydown', handleEsc))
onUnmounted(() => document.removeEventListener('keydown', handleEsc))
</script>

<style lang="scss" scoped>
.minimal-nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);

  @media (max-width: 1024px) {
    display: block;
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 0 24px;
    gap: 16px;

    @media (max-width: 767px) {
      padding: 0 16px;
    }
  }

  &__logo {
    font-family: var(--font-heading);
    font-size: 20px;
    font-weight: 700;
    color: var(--text);
    .dot { color: var(--accent); }
    &:hover { color: var(--accent); }
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 24px;

    a {
      font-size: 13px;
      color: var(--text-2);
      transition: color 0.2s;
      &:hover { color: var(--accent); }
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
      width: 24px;
      height: 2px;
      background-color: var(--accent);
      transition: all 0.3s;

      &::before, &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: var(--accent);
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

.mobile-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(10, 25, 47, 0.85);
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
  font-size: 24px;
  font-weight: 600;
  color: var(--text);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  animation: fadeInUp 0.4s ease both;

  .mono {
    font-size: 14px;
  }
}

.mobile-resume {
  padding: 14px 28px;
  border: 1px solid var(--accent);
  border-radius: 4px;
  color: var(--accent);
  font-size: 14px;
  margin-top: 8px;

  &:hover {
    background-color: var(--accent-tint);
  }
}

.mobile-controls {
  display: flex;
  gap: 12px;
  align-items: center;
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
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
