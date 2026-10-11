<template>
  <section id="about" class="wrap" :aria-label="t('widgets.overview')">
    <div class="widgets">
      <div class="w glass glass--regular">
        <span class="w__label">{{ t('widgets.exp_label') }}</span>
        <div class="w__big">{{ years }}+</div>
        <div class="w__text">{{ t('widgets.exp_text') }}</div>
      </div>

      <div class="w w--span2 glass glass--regular">
        <span class="w__label">{{ t('widgets.now_label') }}</span>
        <div class="w__title">{{ highlights.currentCompany }}</div>
        <div class="w__org">{{ t('widgets.now_org') }}</div>
        <ul class="w__list">
          <li v-for="p in highlights.currentProjects" :key="p" class="tag">{{ p }}</li>
        </ul>
      </div>

      <div class="w glass glass--regular">
        <span class="w__label">{{ t('widgets.time_label') }}</span>
        <time class="w__clock" :datetime="clock.iso">{{ clock.time }}<small>UTC+5</small></time>
        <div class="w__online" :class="{ 'w__online--on': clock.online }">
          <i aria-hidden="true" />
          <span>{{ clock.online ? t('widgets.online') : t('widgets.offline') }}</span>
        </div>
      </div>

      <div class="w glass glass--regular">
        <span class="w__label">{{ t('widgets.proj_label') }}</span>
        <div class="w__big">{{ projects.length }}</div>
        <div class="w__text">{{ t('widgets.proj_text') }}</div>
      </div>

      <div class="w glass glass--regular">
        <span class="w__label">{{ t('widgets.reg_label') }}</span>
        <div class="w__dots" aria-hidden="true">
          <span v-for="n in highlights.regions" :key="n" />
        </div>
        <div class="w__text">
          <span class="sr-only">{{ highlights.regions }}</span>
          {{ t('widgets.reg_text') }}
        </div>
      </div>

      <div class="w w--span2 glass glass--regular">
        <span class="w__label">{{ t('widgets.stack_label') }}</span>
        <ul class="w__list">
          <li v-for="s in highlights.coreStack" :key="s" class="tag">{{ s }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { portfolioData } from '@/data/portfolio'
import { projects } from '@/data/projects'

const { t } = useI18n()
const { highlights, personal } = portfolioData
const years = new Date().getFullYear() - highlights.careerStart

const clock = reactive({ time: '--:--', iso: '', online: false })
const timeFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: personal.timeZone,
  hour: '2-digit',
  minute: '2-digit',
  weekday: 'short',
  hour12: false
})

function tick() {
  const now = new Date()
  const parts = Object.fromEntries(timeFormat.formatToParts(now).map((p) => [p.type, p.value]))
  const hour = parseInt(parts.hour, 10)
  const { from, to } = personal.workingHours
  clock.time = `${parts.hour}:${parts.minute}`
  clock.iso = now.toISOString()
  clock.online = hour >= from && hour < to && parts.weekday !== 'Sat' && parts.weekday !== 'Sun'
}

tick()
const timer = setInterval(tick, 15000)
onBeforeUnmount(() => clearInterval(timer))
</script>

<style scoped lang="scss">
.widgets {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.w {
  border-radius: 28px;
  padding: 24px;
  min-height: 176px;
  display: flex;
  flex-direction: column;
}

.w--span2 {
  grid-column: span 2;
}

.w__label {
  font-size: 13px;
  font-weight: 600;
  color: var(--muted);
}

.w__big {
  margin-top: auto;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 52px;
  line-height: 1;
  letter-spacing: -.04em;
}

.w__text {
  margin-top: 8px;
  font-size: 14px;
  color: var(--muted);
}

.w__title {
  margin-top: 14px;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 30px;
  letter-spacing: -.03em;
  line-height: 1.05;
}

.w__org {
  margin-top: 6px;
  color: var(--accent-text);
  font-size: 15px;
}

.w__list {
  list-style: none;
  margin: auto 0 0;
  padding: 16px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.w__clock {
  margin-top: auto;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 48px;
  line-height: 1;
  letter-spacing: -.03em;
  font-variant-numeric: tabular-nums;

  small {
    font-size: 22px;
    color: var(--muted);
    font-weight: 700;
    margin-left: 4px;
  }
}

.w__online {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);

  i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--muted);
    flex: 0 0 7px;
  }

  &--on i {
    background: var(--ok);
  }
}

.w__dots {
  margin-top: auto;
  display: grid;
  grid-template-columns: repeat(7, 14px);
  gap: 7px;

  span {
    width: 14px;
    height: 14px;
    transform: rotate(45deg) scale(.78);
    border-radius: 3px;
    background: var(--accent);
    opacity: .9;

    &:first-child {
      background: var(--ink);
    }
  }
}

@media (max-width: 960px) {
  .widgets {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .widgets {
    grid-template-columns: 1fr;
  }

  .w--span2 {
    grid-column: auto;
  }
}
</style>
