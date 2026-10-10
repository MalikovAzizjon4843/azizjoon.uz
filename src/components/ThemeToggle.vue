<template>
  <button
    type="button"
    class="circle-btn press"
    :aria-label="store.theme === 'dark' ? t('a11y.theme_to_light') : t('a11y.theme_to_dark')"
    @click="store.toggleTheme()"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.6" />
      <path d="M12 3.5a8.5 8.5 0 0 1 0 17z" fill="currentColor" />
    </svg>
  </button>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/useAppStore'

const { t } = useI18n()
const store = useAppStore()
</script>

<style scoped>
.circle-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 0;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: var(--ink);
  background: transparent;
  transition: transform .45s cubic-bezier(.3, 1.4, .5, 1);
}

.circle-btn svg {
  width: 18px;
  height: 18px;
}
</style>
