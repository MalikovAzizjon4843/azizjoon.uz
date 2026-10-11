<template>
  <div id="hero" class="wrap hero">
    <PortraitBadge />
    <span v-if="personal.available" class="chip glass">
      <i class="chip__dot" aria-hidden="true" />
      <span>{{ t('hero.status') }}</span>
    </span>
    <h1 class="hero__name">{{ personal.name }} {{ personal.surname }}</h1>
    <p class="hero__role">{{ t('hero.role') }}</p>
    <p class="hero__lead">{{ t('hero.lead') }}</p>
    <div class="hero__actions">
      <RouterLink class="btn btn--tinted glass press" :to="{ path: '/', hash: '#work' }">
        {{ t('hero.cta_work') }}
      </RouterLink>
      <a class="btn glass press" :href="cv" target="_blank" rel="noopener">
        {{ t('hero.cta_cv') }}
        <span class="sr-only">{{ t('a11y.new_tab') }}</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { portfolioData } from '@/data/portfolio'
import { cvHref } from '@/utils/format'
import PortraitBadge from './PortraitBadge.vue'

const { t } = useI18n()
const personal = portfolioData.personal
const cv = cvHref(personal.resumePath)
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 72px 0 56px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  margin-top: 30px;
}

.chip__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--ok);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--ok) 22%, transparent);
}

.hero__name {
  margin: 20px 0 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: clamp(44px, 7.4vw, 112px);
  line-height: .95;
  letter-spacing: -.045em;
}

.hero__role {
  margin: 16px 0 0;
  font-size: clamp(18px, 1.6vw, 22px);
  font-weight: 600;
  color: var(--accent-text);
}

.hero__lead {
  margin: 14px auto 0;
  font-size: 18px;
  color: var(--muted);
  max-width: 58ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
}
</style>
