<template>
  <div class="bento-available-card" v-if="portfolioData.personal.available">
    <div class="available-inner">
      <div class="available-top">
        <span class="dot"></span>
        <span class="mono available-label">available</span>
      </div>
      <p class="available-desc">{{ $t('hero.available') }}</p>
    </div>
  </div>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>

<style lang="scss" scoped>
.bento-available-card {
  grid-column: 9 / 13;
  grid-row: 1 / 2;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    grid-column: 1 / -1;
    grid-row: auto;
  }
}

.available-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;
}

.available-top {
  display: flex;
  align-items: center;
  gap: 6px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--success);
  animation: pulse 2s ease-in-out infinite;
}

.available-label {
  font-size: 11px;
  color: var(--success);
}

.available-desc {
  font-size: 10px;
  color: var(--text-3);
}
</style>
