<template>
  <div class="bento-layout">
    <BentoHeader />

    <main class="container">
      <div class="bento-grid">
        <!-- Row 1-2: Hero (span 2 rows), Photo, Available -->
        <BentoHeroCard />
        <BentoPhotoCard />
        <BentoAvailableCard />

        <!-- Row 2: Stats (fill remaining cols) -->
        <BentoStatsCards />

        <!-- Row 3: Stack + Experience -->
        <BentoStackCard />
        <BentoExperienceCard />

        <!-- Row 4-5: Projects -->
        <BentoProjectCard />

        <!-- Row 6: Contact -->
        <BentoContactCard />
      </div>
    </main>

    <BentoFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import BentoHeader from '@/components/bento/BentoHeader.vue'
import BentoHeroCard from '@/components/bento/BentoHeroCard.vue'
import BentoPhotoCard from '@/components/bento/BentoPhotoCard.vue'
import BentoAvailableCard from '@/components/bento/BentoAvailableCard.vue'
import BentoStatsCards from '@/components/bento/BentoStatsCards.vue'
import BentoStackCard from '@/components/bento/BentoStackCard.vue'
import BentoExperienceCard from '@/components/bento/BentoExperienceCard.vue'
import BentoProjectCard from '@/components/bento/BentoProjectCard.vue'
import BentoContactCard from '@/components/bento/BentoContactCard.vue'
import BentoFooter from '@/components/bento/BentoFooter.vue'

onMounted(() => {
  document.documentElement.setAttribute('data-layout', 'bento')
})
</script>

<style lang="scss" scoped>
.bento-layout {
  min-height: 100vh;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
  padding: 16px 0;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
