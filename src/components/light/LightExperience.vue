<template>
  <section id="experience" class="light-experience">
    <div class="container-light">
      <span class="section-label">{{ $t('experience.subtitle').toUpperCase() }}</span>
      <h2>{{ $t('experience.title') }}</h2>

      <div class="timeline">
        <div
          v-for="(exp, i) in portfolioData.experience"
          :key="i"
          class="timeline-item"
        >
          <div class="timeline-dot" :class="{ current: exp.isCurrent }"></div>
          <div class="timeline-content">
            <span class="timeline-date mono">
              {{ exp.startDate }} — {{ exp.isCurrent ? $t('experience.present') : exp.endDate }}
            </span>
            <h3>{{ $t(exp.role) }}</h3>
            <p class="timeline-company">
              <a>{{ exp.company }}</a>
              <span class="org-text"> · {{ $t(exp.organization) }}</span>
            </p>

            <ul class="timeline-bullets">
              <li v-for="(bullet, j) in exp.bullets" :key="j">
                {{ $t(bullet) }}
              </li>
            </ul>

            <div class="timeline-tech">
              <span v-for="t in exp.tech" :key="t" class="tech-chip mono">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>

<style lang="scss" scoped>
.light-experience {
  padding: 80px 0;
}

.container-light {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
}

h2 {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  margin: 8px 0 40px;
}

.timeline {
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: var(--gradient);
    border-radius: 3px;
  }
}

.timeline-item {
  position: relative;
  padding-bottom: 48px;

  &:last-child { padding-bottom: 0; }
}

.timeline-dot {
  position: absolute;
  left: -32px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg);
  border: 3px solid var(--accent);
  z-index: 1;

  &.current {
    background: var(--gradient);
    border: 3px solid var(--accent);
  }
}

.timeline-content {
  padding-left: 8px;
}

.timeline-date {
  font-size: 13px;
  color: var(--text-3);
  font-weight: 500;
}

.timeline-content h3 {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 600;
  color: var(--text);
  margin-top: 4px;
}

.timeline-company {
  font-size: 14px;
  margin-top: 2px;

  a {
    color: var(--accent);
    font-weight: 500;
    &:hover { text-decoration: underline; }
  }

  .org-text {
    color: var(--text-2);
  }
}

.timeline-bullets {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;

  li {
    font-size: 14px;
    color: var(--text-2);
    padding-left: 20px;
    position: relative;
    line-height: 1.7;

    &::before {
      content: '\25B8';
      position: absolute;
      left: 0;
      color: var(--accent);
    }
  }
}

.timeline-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.tech-chip {
  font-size: 12px;
  color: var(--accent);
  background: var(--accent-tint);
  padding: 4px 10px;
  border-radius: 6px;
}
</style>
