<template>
  <section id="experience" class="minimal-experience minimal-section">
    <h2 class="section-heading">
      <span class="mono text-accent">02.</span> {{ $t('experience.title') }}
      <span class="heading-line"></span>
    </h2>

    <div class="exp-tabs">
      <div class="tab-list" role="tablist">
        <button
          v-for="(exp, i) in portfolioData.experience"
          :key="i"
          role="tab"
          class="tab-btn mono"
          :class="{ active: activeTab === i }"
          @click="activeTab = i"
        >
          {{ exp.company }}
        </button>
      </div>

      <div class="tab-panel">
        <div v-for="(exp, i) in portfolioData.experience" :key="i" v-show="activeTab === i">
          <h3>
            {{ $t(exp.role) }}
            <span class="text-accent"> @ {{ exp.company }}</span>
          </h3>
          <p class="exp-date mono">
            {{ exp.startDate }} — {{ exp.isCurrent ? $t('experience.present') : exp.endDate }}
          </p>

          <ul class="exp-bullets">
            <li v-for="(bullet, j) in exp.bullets" :key="j">
              {{ $t(bullet) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { portfolioData } from '@/data/portfolio'

const activeTab = ref(0)
</script>

<style lang="scss" scoped>
.minimal-experience {
  padding: 100px 0;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 40px;
  white-space: nowrap;

  .mono { font-size: 18px; }
}

.heading-line {
  flex: 1;
  height: 1px;
  background-color: var(--border);
  max-width: 300px;
}

.exp-tabs {
  display: flex;
  gap: 32px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
}

.tab-list {
  display: flex;
  flex-direction: column;
  border-left: 2px solid var(--border);
  flex-shrink: 0;

  @media (max-width: 767px) {
    flex-direction: row;
    border-left: none;
    border-bottom: 2px solid var(--border);
    overflow-x: auto;
  }
}

.tab-btn {
  padding: 12px 20px;
  font-size: 13px;
  color: var(--text-2);
  text-align: left;
  white-space: nowrap;
  border-left: 2px solid transparent;
  margin-left: -2px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent);
    background-color: var(--accent-tint);
  }

  &.active {
    color: var(--accent);
    border-left-color: var(--accent);
  }

  @media (max-width: 767px) {
    border-left: none;
    border-bottom: 2px solid transparent;
    margin-left: 0;
    margin-bottom: -2px;

    &.active {
      border-bottom-color: var(--accent);
    }
  }
}

.tab-panel {
  flex: 1;

  h3 {
    font-family: var(--font-heading);
    font-size: 18px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 4px;
  }
}

.exp-date {
  font-size: 13px;
  color: var(--text-3);
  margin-bottom: 20px;
}

.exp-bullets {
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    font-size: 14px;
    color: var(--text-2);
    padding-left: 24px;
    position: relative;
    line-height: 1.7;

    &::before {
      content: '\25B9';
      position: absolute;
      left: 0;
      color: var(--accent);
    }
  }
}
</style>
