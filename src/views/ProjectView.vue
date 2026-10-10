<template>
  <!-- Placeholder until the project detail page lands. -->
  <main id="top" class="wrap project">
    <div class="project__card glass glass--regular">
      <span class="pill">{{ slug }}</span>
      <h1 class="project__title">{{ t('project.soon_title') }}</h1>
      <p class="project__text">{{ t('project.soon_text') }}</p>
      <RouterLink class="btn btn--tinted glass press" :to="{ path: '/', hash: '#work' }">
        ← {{ t('project.back') }}
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineProps({ slug: { type: String, required: true } })

const { t } = useI18n()
</script>

<style scoped>
.project {
  min-height: 70vh;
  display: grid;
  place-items: center;
  padding: 72px 0;
}

.project__card {
  border-radius: 36px;
  padding: clamp(32px, 6vw, 64px);
  max-width: 640px;
  text-align: center;
}

.project__title {
  margin: 20px 0 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: clamp(30px, 4vw, 48px);
  letter-spacing: -.03em;
  line-height: 1.05;
}

.project__text {
  margin: 14px 0 28px;
  color: var(--muted);
}
</style>
