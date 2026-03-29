<template>
  <section id="experience" class="bold-experience">
    <div class="container">
      <h2 class="section-heading mono">
        <span class="text-accent">#</span> {{ $t('experience.title').toUpperCase() }}
      </h2>

      <div class="exp-list">
        <div
          v-for="(exp, i) in portfolioData.experience"
          :key="i"
          class="exp-item"
        >
          <div class="exp-marker">
            <span class="marker-dot"></span>
            <span v-if="i < portfolioData.experience.length - 1" class="marker-line"></span>
          </div>

          <div class="exp-content">
            <div class="exp-header">
              <div>
                <h3>{{ $t(exp.role) }}</h3>
                <p class="exp-company mono text-accent">@ {{ exp.company }}</p>
              </div>
              <div class="exp-meta">
                <span v-if="exp.isCurrent" class="current-tag mono">[ACTIVE]</span>
                <span class="exp-date mono">
                  {{ exp.startDate }} — {{ exp.isCurrent ? $t('experience.present') : exp.endDate }}
                </span>
              </div>
            </div>

            <p class="exp-org">{{ $t(exp.organization) }}</p>

            <div class="exp-bullets">
              <div v-for="(bullet, j) in exp.bullets" :key="j" class="bullet-item">
                <span class="mono text-accent">&gt;</span>
                <span>{{ $t(bullet) }}</span>
              </div>
            </div>

            <div class="exp-tech">
              <span v-for="tech in exp.tech" :key="tech" class="tech-tag mono">{{ tech }}</span>
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
.bold-experience {
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

.section-heading {
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 40px;
}

.exp-list {
  display: flex;
  flex-direction: column;
}

.exp-item {
  display: flex;
  gap: 24px;
}

.exp-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6px;
  flex-shrink: 0;
}

.marker-dot {
  width: 14px;
  height: 14px;
  border: 3px solid var(--accent);
  background-color: var(--bg);
}

.marker-line {
  width: 2px;
  flex: 1;
  background-color: var(--border);
  margin-top: 4px;
}

.exp-content {
  padding-bottom: 48px;
  flex: 1;
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;

  h3 {
    font-size: 22px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.exp-company {
  font-size: 15px;
  margin-top: 2px;
}

.exp-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.current-tag {
  font-size: 11px;
  color: var(--success);
  font-weight: 700;
}

.exp-date {
  font-size: 12px;
  color: var(--text-3);
}

.exp-org {
  font-size: 13px;
  color: var(--text-2);
  margin: 8px 0 16px;
}

.exp-bullets {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

.bullet-item {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.6;

  .mono {
    flex-shrink: 0;
    font-size: 12px;
    margin-top: 2px;
  }
}

.exp-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-size: 11px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  color: var(--text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
