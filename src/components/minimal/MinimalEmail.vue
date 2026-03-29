<template>
  <aside class="minimal-email">
    <a :href="`mailto:${portfolioData.personal.email}`" class="email-text mono">
      {{ portfolioData.personal.email }}
    </a>
    <div class="email-line"></div>
  </aside>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>

<style lang="scss" scoped>
.minimal-email {
  position: fixed;
  bottom: 0;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
}

.email-text {
  writing-mode: vertical-rl;
  font-size: 12px;
  color: var(--text-2);
  letter-spacing: 1px;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    color: var(--accent);
    transform: translateY(-3px);
  }
}

.email-line {
  width: 1px;
  height: 80px;
  background-color: var(--text-3);
}
</style>
