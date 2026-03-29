<template>
  <div class="bold-layout">
    <BoldHeader />
    <main class="bold-main">
      <BoldHero />
      <hr class="section-divider" />
      <BoldAbout />
      <hr class="section-divider" />
      <BoldExperience />
      <hr class="section-divider" />
      <BoldProjects />
      <hr class="section-divider" />
      <BoldContact />
    </main>
    <BoldFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import BoldHeader from '@/components/bold/BoldHeader.vue'
import BoldHero from '@/components/bold/BoldHero.vue'
import BoldAbout from '@/components/bold/BoldAbout.vue'
import BoldExperience from '@/components/bold/BoldExperience.vue'
import BoldProjects from '@/components/bold/BoldProjects.vue'
import BoldContact from '@/components/bold/BoldContact.vue'
import BoldFooter from '@/components/bold/BoldFooter.vue'

onMounted(() => {
  document.documentElement.setAttribute('data-layout', 'bold')
})
</script>

<style lang="scss" scoped>
.bold-layout {
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
}

.bold-main {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-divider {
  border: none;
  border-top: 0.5px solid var(--border);
  margin: 0;
}
</style>
