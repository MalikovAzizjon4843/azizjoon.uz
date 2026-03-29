<template>
  <div id="experience" class="bento-experience-card">
    <div class="exp-header">
      <span class="mono label-accent">02/</span>
      <h3>{{ $t('experience.title') }}</h3>
    </div>

    <div class="exp-list">
      <div
        v-for="(exp, i) in portfolioData.experience"
        :key="i"
        class="exp-item"
      >
        <div class="exp-top">
          <span class="exp-role">{{ $t(exp.role) }}</span>
          <span class="exp-date mono">
            {{ exp.startDate }} — {{ exp.isCurrent ? $t('experience.present') : exp.endDate }}
          </span>
        </div>
        <p class="exp-company mono">
          @{{ exp.company.toLowerCase() }} &middot; {{ $t(exp.organization) }}
        </p>

        <ul class="exp-bullets">
          <li v-for="(bullet, j) in exp.bullets" :key="j">
            <span class="bullet-marker mono">&#9657;</span>
            <span>{{ $t(bullet) }}</span>
          </li>
        </ul>

        <div class="exp-tech">
          <span v-for="tech in exp.tech" :key="tech" class="tech-chip mono">{{ tech }}</span>
        </div>

        <div v-if="i < portfolioData.experience.length - 1" class="exp-divider"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>

<style lang="scss" scoped>
.bento-experience-card {
  grid-column: 6 / 13;
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

.exp-header {
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

.exp-list {
  display: flex;
  flex-direction: column;
}

.exp-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.exp-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  flex-wrap: wrap;
}

.exp-role {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
}

.exp-date {
  font-size: 10px;
  color: var(--text-3);
  white-space: nowrap;
}

.exp-company {
  font-size: 11px;
  color: var(--accent);
}

.exp-bullets {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-top: 6px;

  li {
    display: flex;
    gap: 6px;
    font-size: 10px;
    color: var(--text-3);
    line-height: 1.5;
  }
}

.bullet-marker {
  flex-shrink: 0;
  font-size: 8px;
  color: var(--accent);
  margin-top: 2px;
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 6px;
}

.tech-chip {
  font-size: 8px;
  padding: 2px 6px;
  border-radius: 2px;
  background-color: var(--text-dim);
  color: var(--text-2);
}

.exp-divider {
  height: 0.5px;
  background-color: var(--border);
  margin: 10px 0;
}
</style>
