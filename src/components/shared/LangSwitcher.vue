<template>
  <div class="lang-switcher" role="group" aria-label="Language">
    <button
      v-for="l in langs"
      :key="l"
      class="lang-btn"
      :class="{ active: store.lang === l }"
      :aria-label="l.toUpperCase()"
      :aria-pressed="store.lang === l"
      @click="store.setLang(l)"
    >
      {{ l.toUpperCase() }}
    </button>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/useAppStore'

const store = useAppStore()
const langs = ['uz', 'ru', 'en']
</script>

<style lang="scss" scoped>
.lang-switcher {
  display: flex;
  gap: 2px;
  align-items: center;
}

.lang-btn {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 6px;
  border-radius: 4px;
  color: var(--text-3);
  transition: all 0.2s ease;
  letter-spacing: 0.5px;

  &:hover {
    color: var(--text);
  }

  &.active {
    color: var(--accent);
    font-weight: 500;
  }
}
</style>
