<template>
  <header class="original-header" :class="{ scrolled }">
    <div class="container original-header__inner">
      <a href="/v0" class="original-header__logo">
        <span class="text-accent">A</span>M
      </a>

      <nav class="original-header__nav" :class="{ open: menuOpen }">
        <a href="#hero" @click="closeMenu">{{ $t('nav.home') }}</a>
        <a href="#about" @click="closeMenu">{{ $t('nav.about') }}</a>
        <a href="#experience" @click="closeMenu">{{ $t('nav.experience') }}</a>
        <a href="#projects" @click="closeMenu">{{ $t('nav.projects') }}</a>
        <a href="#contact" @click="closeMenu">{{ $t('nav.contact') }}</a>
      </nav>

      <div class="original-header__controls">
        <LangSwitcher />
        <VersionSwitcher />
      </div>

      <button
        class="original-header__burger"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <div v-if="menuOpen" class="original-header__mobile-menu">
      <nav>
        <a href="#hero" @click="closeMenu">{{ $t('nav.home') }}</a>
        <a href="#about" @click="closeMenu">{{ $t('nav.about') }}</a>
        <a href="#experience" @click="closeMenu">{{ $t('nav.experience') }}</a>
        <a href="#projects" @click="closeMenu">{{ $t('nav.projects') }}</a>
        <a href="#contact" @click="closeMenu">{{ $t('nav.contact') }}</a>
      </nav>
      <div class="original-header__mobile-controls">
        <LangSwitcher />
        <VersionSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import LangSwitcher from '@/components/shared/LangSwitcher.vue'
import VersionSwitcher from '@/components/shared/VersionSwitcher.vue'

const menuOpen = ref(false)
const scrolled = ref(false)

function closeMenu() {
  menuOpen.value = false
}

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style lang="scss" scoped>
.original-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  transition: box-shadow 0.3s ease;

  &.scrolled {
    box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    gap: 16px;
  }

  &__logo {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  &__nav {
    display: flex;
    gap: 32px;

    a {
      font-size: 14px;
      color: var(--text-2);
      transition: color 0.2s;
      position: relative;

      &:hover {
        color: var(--accent);
      }

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--accent);
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
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

  &__mobile-menu {
    display: none;
    padding: 20px;
    border-top: 1px solid var(--border);
    background-color: var(--bg);

    @media (max-width: 767px) {
      display: block;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 20px;

      a {
        font-size: 14px;
        color: var(--text-2);
        &:hover { color: var(--accent); }
      }
    }
  }

  &__mobile-controls {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
}
</style>
