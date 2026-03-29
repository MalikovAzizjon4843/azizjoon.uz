<template>
  <div class="minimal-layout">
    <div v-if="isDark" class="cursor-glow" />
    <MinimalSidebar />
    <MinimalNav />
    <MinimalEmail />
    <main class="minimal-main">
      <MinimalHero />
      <MinimalAbout />
      <MinimalExperience />
      <MinimalProjects />
      <MinimalContact />
      <MinimalFooter />
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/useAppStore'
import MinimalSidebar from '@/components/minimal/MinimalSidebar.vue'
import MinimalNav from '@/components/minimal/MinimalNav.vue'
import MinimalEmail from '@/components/minimal/MinimalEmail.vue'
import MinimalHero from '@/components/minimal/MinimalHero.vue'
import MinimalAbout from '@/components/minimal/MinimalAbout.vue'
import MinimalExperience from '@/components/minimal/MinimalExperience.vue'
import MinimalProjects from '@/components/minimal/MinimalProjects.vue'
import MinimalContact from '@/components/minimal/MinimalContact.vue'
import MinimalFooter from '@/components/minimal/MinimalFooter.vue'

const store = useAppStore()
const isDark = computed(() => store.theme === 'dark')

function handleMouse(e) {
  document.documentElement.style.setProperty('--mouse-x', e.clientX + 'px')
  document.documentElement.style.setProperty('--mouse-y', e.clientY + 'px')
}

onMounted(() => {
  document.documentElement.setAttribute('data-layout', 'minimal')
  document.addEventListener('mousemove', handleMouse)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouse)
})
</script>

<style lang="scss" scoped>
.minimal-layout {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  position: relative;

  *, *::before, *::after {
    transition: background-color 0.3s, color 0.3s;
  }
}

.cursor-glow {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(
    600px at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(100, 255, 218, 0.06),
    transparent 80%
  );
}

.minimal-main {
  margin-left: 300px;
  max-width: 700px;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

@media (max-width: 1024px) {
  .minimal-main {
    margin-left: 0;
    padding: 0 48px;
    max-width: 100%;
  }
}

@media (max-width: 767px) {
  .minimal-main {
    padding: 0 24px;
  }
}
</style>
