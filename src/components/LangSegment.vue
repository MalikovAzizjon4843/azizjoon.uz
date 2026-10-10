<template>
  <div class="seg" role="group" :aria-label="t('a11y.language')">
    <span class="seg__thumb" :style="{ transform: `translateX(${index * 100}%)` }" aria-hidden="true" />
    <button
      v-for="l in LANGS"
      :key="l"
      type="button"
      class="seg__btn"
      :lang="l"
      :aria-label="NAMES[l]"
      :aria-pressed="String(l === store.lang)"
      @click="store.setLang(l)"
    >
      {{ l.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useAppStore, LANGS } from '@/stores/useAppStore'

// Each language is named in itself, so it is recognisable whatever the UI language.
const NAMES = { uz: "O'zbekcha", ru: 'Русский', en: 'English' }

const { t } = useI18n()
const store = useAppStore()
const index = computed(() => LANGS.indexOf(store.lang))
</script>

<style scoped lang="scss">
.seg {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 44px);
}

.seg__thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 44px;
  height: 100%;
  border-radius: 999px;
  background: var(--g-tint);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .55), 0 4px 14px rgba(37, 133, 184, .35);
  transition: transform .5s var(--spring);
}

.seg__btn {
  position: relative;
  z-index: 1;
  height: 36px;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  color: var(--muted);
  cursor: pointer;
  border-radius: 999px;
  transition: color .3s;

  &[aria-pressed="true"] {
    color: #fff;
  }
}

@media (prefers-reduced-motion: reduce) {
  .seg__thumb {
    transition: none;
  }
}
</style>
