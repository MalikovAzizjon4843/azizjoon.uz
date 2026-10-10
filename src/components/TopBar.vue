<template>
  <header class="wrap top">
    <RouterLink
      class="brand glass press"
      :class="{ 'glass--refract': refract }"
      :to="{ path: '/', hash: '#top' }"
      :aria-label="t('a11y.home')"
    >
      <GemMark />
      <span class="brand__name">azizjon</span>
    </RouterLink>
    <div class="controls glass" :class="{ 'glass--refract': refract }">
      <LangSegment />
      <ThemeToggle />
      <a
        class="cv press"
        :href="cv"
        target="_blank"
        rel="noopener"
        :aria-label="t('a11y.cv')"
      >CV</a>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { portfolioData } from '@/data/portfolio'
import { useRefract } from '@/composables/useGlass'
import { cvHref } from '@/utils/format'
import GemMark from './GemMark.vue'
import LangSegment from './LangSegment.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()
const refract = useRefract()
const cv = cvHref(portfolioData.personal.resumePath)
</script>

<style scoped lang="scss">
.top {
  position: sticky;
  top: calc(12px + env(safe-area-inset-top, 0px));
  z-index: 40;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  padding: 10px 18px 10px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 18px;
  letter-spacing: -.02em;

  svg {
    width: 26px;
    height: 26px;
  }
}

.controls {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border-radius: 999px;
}

.cv {
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 9px 16px;
  border-radius: 999px;
  background: var(--ink);
  color: var(--bg);
  transition: transform .45s cubic-bezier(.3, 1.4, .5, 1);
}

@media (max-width: 960px) {
  .cv {
    display: none;
  }
}

@media (max-width: 560px) {
  .brand {
    padding: 10px 12px;
  }

  .brand__name {
    display: none;
  }
}
</style>
