<template>
  <div class="version-switcher" role="group" :aria-label="$t('version_switcher.label')">
    <button
      v-for="v in versions"
      :key="v.id"
      class="version-btn"
      :class="{ active: store.version === v.id }"
      :aria-label="$t(`version_switcher.${v.id}`)"
      :aria-pressed="store.version === v.id"
      @click="switchVersion(v.id)"
    >
      {{ v.id }}
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/useAppStore'

const store = useAppStore()
const router = useRouter()

const versions = [
  { id: 'v1' },
  { id: 'v2' },
  { id: 'v3' },
  { id: 'v4' },
  { id: 'v6' }
]

function switchVersion(v) {
  store.setVersion(v)
}
</script>

<style lang="scss" scoped>
.version-switcher {
  display: flex;
  gap: 4px;
  align-items: center;
}

.version-btn {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 4px;
  color: var(--text-3);
  border: 1px solid transparent;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    color: var(--text);
    border-color: var(--border);
  }

  &.active {
    background-color: var(--accent);
    color: var(--bg);
    border-color: var(--accent);
  }
}
</style>
