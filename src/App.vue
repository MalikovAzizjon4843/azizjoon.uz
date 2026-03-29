<template>
  <div id="portfolio-app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/useAppStore'

const store = useAppStore()
const router = useRouter()

store.setRouter(router)

onMounted(() => {
  store.init()

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (prefersReduced.matches) {
    document.documentElement.classList.add('reduce-motion')
  }
})
</script>

<style lang="scss">
@use '@/assets/styles/main';

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.reduce-motion *,
.reduce-motion *::before,
.reduce-motion *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
}
</style>
