<template>
  <div class="tech-tags">
    <span
      v-for="tech in techs"
      :key="tech"
      class="tech-tag"
      :class="{ highlighted: highlighted.includes(tech) }"
    >
      {{ tech }}
    </span>
  </div>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

defineProps({
  techs: { type: Array, required: true },
  highlighted: { type: Array, default: () => portfolioData.highlightedSkills }
})
</script>

<style lang="scss" scoped>
.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid var(--border);
  color: var(--text-2);
  transition: all 0.2s ease;

  &.highlighted {
    background-color: var(--accent-tint);
    border-color: var(--accent);
    color: var(--accent);
  }
}
</style>
