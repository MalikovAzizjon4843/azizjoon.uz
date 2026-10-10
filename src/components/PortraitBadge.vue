<template>
  <div class="portrait glass" :class="{ 'glass--refract': refract }">
    <img
      class="portrait__img"
      :src="photo"
      :alt="t('a11y.portrait')"
      width="216"
      height="216"
      fetchpriority="high"
      decoding="async"
    />
    <div class="badge glass">
      <GemBadge />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, h } from 'vue'
import { useI18n } from 'vue-i18n'
import photo from '@/assets/images/profile.jpg'
import { useRefract } from '@/composables/useGlass'
import GemMark from './GemMark.vue'

// three.js is loaded in its own chunk after first paint; until then (and if
// it fails) the badge shows the flat SVG gem.
const GemFallback = { render: () => h('div', { class: 'gem-fallback' }, [h(GemMark)]) }
const GemBadge = defineAsyncComponent({
  loader: () => import('./GemBadge.vue'),
  loadingComponent: GemFallback,
  errorComponent: GemFallback,
  delay: 0
})

const { t } = useI18n()
const refract = useRefract()
</script>

<style scoped lang="scss">
.portrait {
  position: relative;
  width: 236px;
  height: 236px;
  border-radius: 50%;
  padding: 10px;
}

.portrait__img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2);
}

.badge {
  position: absolute;
  right: -14px;
  bottom: -6px;
  width: 104px;
  height: 104px;
  border-radius: 50%;
}

:deep(.gem-fallback) {
  position: absolute;
  inset: 30%;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
}

@media (max-width: 560px) {
  .portrait {
    width: 196px;
    height: 196px;
  }

  .badge {
    width: 88px;
    height: 88px;
  }
}
</style>
