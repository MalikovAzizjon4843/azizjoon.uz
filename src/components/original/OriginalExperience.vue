<template>
  <section id="experience" class="original-experience">
    <div class="container">
      <h2 class="section-heading">
        <span class="text-accent">//</span> {{ $t('experience.title') }}
      </h2>

      <div class="timeline">
        <div
          v-for="(exp, i) in portfolioData.experience"
          :key="i"
          class="timeline-item"
        >
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div>
                <h3>{{ $t(exp.role) }}</h3>
                <p class="org">{{ $t(exp.organization) }}</p>
              </div>
              <span class="date">
                {{ exp.startDate }} — {{ exp.isCurrent ? $t('experience.present') : exp.endDate }}
              </span>
            </div>

            <p class="description">{{ $t(exp.description) }}</p>

            <ul class="bullets">
              <li v-for="(bullet, j) in exp.bullets" :key="j">
                {{ $t(bullet) }}
              </li>
            </ul>

            <TechTags :techs="exp.tech" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import TechTags from '@/components/shared/TechTags.vue'
</script>

<style lang="scss" scoped>
.original-experience {
  padding: 100px 0;
}

.section-heading {
  font-size: 28px;
  margin-bottom: 48px;
}

.timeline {
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background-color: var(--border);
  }
}

.timeline-item {
  position: relative;
  padding-bottom: 48px;

  &:last-child {
    padding-bottom: 0;
  }
}

.timeline-dot {
  position: absolute;
  left: -37px;
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--accent);
  border: 2px solid var(--bg);
}

.timeline-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;

  h3 {
    font-size: 20px;
    color: var(--text);
  }
}

.org {
  font-size: 14px;
  color: var(--accent);
  margin-top: 2px;
}

.date {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-3);
  white-space: nowrap;
}

.description {
  font-size: 15px;
}

.bullets {
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    font-size: 14px;
    color: var(--text-2);
    padding-left: 20px;
    position: relative;
    line-height: 1.6;

    &::before {
      content: '>';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-family: var(--font-mono);
    }
  }
}
</style>
