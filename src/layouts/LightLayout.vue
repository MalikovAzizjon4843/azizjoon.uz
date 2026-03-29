<template>
  <div class="light-layout">
    <LightHeader />
    <main>
      <LightHero />
      <LightAbout />
      <LightExperience />
      <LightProjects />
      <LightContact />
    </main>
    <LightFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/useAppStore'
import LightHeader from '@/components/light/LightHeader.vue'
import LightHero from '@/components/light/LightHero.vue'
import LightAbout from '@/components/light/LightAbout.vue'
import LightExperience from '@/components/light/LightExperience.vue'
import LightProjects from '@/components/light/LightProjects.vue'
import LightContact from '@/components/light/LightContact.vue'
import LightFooter from '@/components/light/LightFooter.vue'

const store = useAppStore()

onMounted(() => {
  document.documentElement.setAttribute('data-layout', 'light')
  if (!localStorage.getItem('theme')) {
    store.setTheme('light')
  }
})
</script>

<style lang="scss" scoped>
.light-layout {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
}
</style>
