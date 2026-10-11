<template>
  <section id="experience" class="section wrap" aria-labelledby="experience-title">
    <div class="section-head">
      <h2 id="experience-title" class="section-title">{{ t('experience.title') }}</h2>
    </div>
    <ol class="timeline">
      <li v-for="job in jobs" :key="job.key" class="timeline__item glass glass--regular">
        <div class="timeline__date">
          <div>{{ period(job) }}</div>
          <div class="timeline__place">{{ job.location }}</div>
        </div>
        <div>
          <h3 class="timeline__role">{{ t(`experience.jobs.${job.key}.role`) }}</h3>
          <div class="timeline__org">{{ t(`experience.jobs.${job.key}.org`) }}</div>
          <!-- Full legal name in the card itself (no hover on phones); it already
               says "under the Competition Committee", so no separate note. -->
          <p v-if="fullName(job)" class="timeline__note">{{ fullName(job) }}</p>
        </div>
        <div>
          <p v-if="t(`experience.jobs.${job.key}.summary`)" class="timeline__sum">
            {{ t(`experience.jobs.${job.key}.summary`) }}
          </p>
          <ul class="timeline__bullets">
            <li v-for="n in job.bullets" :key="n">{{ t(`experience.jobs.${job.key}.bullets.${n}`) }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { portfolioData } from '@/data/portfolio'
import { formatPeriod } from '@/utils/format'

const { t } = useI18n()
const jobs = portfolioData.experience

// Shown only when it adds something beyond the short name.
function fullName(job) {
  const full = t(`experience.jobs.${job.key}.org_full`)
  return full !== t(`experience.jobs.${job.key}.org`) ? full : ''
}

function period(job) {
  return formatPeriod(job.startDate, job.endDate, {
    present: t('experience.present'),
    monthName: (m) => t(`experience.months.${m}`)
  })
}
</script>

<style scoped lang="scss">
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}

.timeline__item {
  display: grid;
  grid-template-columns: 200px 1fr 1.3fr;
  gap: 28px;
  padding: 26px 30px;
  border-radius: 26px;
  align-items: start;
}

.timeline__date {
  color: var(--muted);
}

.timeline__place {
  font-size: 14px;
  margin-top: 2px;
}

.timeline__role {
  margin: 0;
  font-weight: 700;
  font-stretch: 112.5%;
  font-size: 23px;
  letter-spacing: -.02em;
  line-height: 1.2;
}

.timeline__org {
  color: var(--accent-text);
  margin-top: 4px;
  font-size: 15px;
}

.timeline__note {
  margin: 6px 0 0;
  color: var(--muted);
  font-size: 13px;
  line-height: 1.45;
}

.timeline__sum {
  margin: 0 0 10px;
  color: var(--ink);
}

.timeline__bullets {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 6px;

  li::marker {
    color: var(--accent);
  }
}

@media (max-width: 960px) {
  .timeline__item {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
