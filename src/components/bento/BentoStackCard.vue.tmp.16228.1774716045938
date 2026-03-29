<template>
  <div class="bento-stack-card">
    <div class="stack-header">
      <span class="mono label-accent">01/</span>
      <h3>{{ $t('skills.title') }}</h3>
    </div>

    <div class="stack-categories">
      <div v-for="(skills, category) in portfolioData.skills" :key="category" class="stack-category">
        <span class="category-label mono">{{ $t(`skills.${category}`) }}</span>
        <div class="chip-list">
          <span
            v-for="skill in skills"
            :key="skill"
            class="chip mono"
            :class="{ highlighted: portfolioData.highlightedSkills.includes(skill) }"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>

<style lang="scss" scoped>
.bento-stack-card {
  grid-column: 1 / 6;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    grid-column: 1 / -1;
  }
}

.stack-header {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 12px;

  .label-accent {
    font-size: 11px;
    color: var(--accent);
  }

  h3 {
    font-family: var(--font-heading);
    font-size: 16px;
    font-weight: 700;
  }
}

.stack-categories {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.category-label {
  display: block;
  font-size: 9px;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.chip {
  font-size: 9px;
  padding: 3px 8px;
  border-radius: 3px;
  border: 1px solid var(--border);
  color: var(--text-2);
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  &.highlighted {
    background-color: var(--accent);
    color: var(--bg);
    border-color: var(--accent);
    font-weight: 500;
  }
}
</style>
