<template>
  <main id="top" class="wrap not-found">
    <div class="not-found__card glass glass--regular">
      <GemMark class="not-found__gem" />
      <p class="not-found__code">404</p>
      <h1 class="not-found__title">{{ t('not_found.title') }}</h1>
      <p class="not-found__text">{{ t('not_found.text') }}</p>
      <div class="not-found__actions">
        <RouterLink class="btn btn--tinted glass press" to="/">{{ t('not_found.home') }}</RouterLink>
        <RouterLink class="btn glass press" to="/projects">{{ t('not_found.projects') }}</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'
import GemMark from './GemMark.vue'

const { t } = useI18n()
usePageMeta(() => ({ title: `${t('not_found.title')} — Azizjon Malikov`, description: t('not_found.text'), path: location.pathname }))

// Not-found pages should not be indexed.
let robots
onMounted(() => {
  robots = document.createElement('meta')
  robots.name = 'robots'
  robots.content = 'noindex'
  document.head.appendChild(robots)
})
onBeforeUnmount(() => robots?.remove())
</script>

<style scoped lang="scss">
.not-found {
  min-height: 72vh;
  display: grid;
  place-items: center;
  padding: 64px 0;
}

.not-found__card {
  max-width: 620px;
  padding: clamp(32px, 6vw, 64px);
  border-radius: 36px;
  text-align: center;
}

.not-found__gem {
  width: 64px;
  height: 64px;
}

.not-found__code {
  margin: 14px 0 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 64px;
  line-height: 1;
  letter-spacing: -.04em;
  color: var(--accent-text);
}

.not-found__title {
  margin: 12px 0 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: clamp(28px, 4vw, 40px);
  letter-spacing: -.03em;
  line-height: 1.05;
}

.not-found__text {
  margin: 12px 0 28px;
  color: var(--muted);
}

.not-found__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}
</style>
