<template>
  <section id="work" class="section wrap" aria-labelledby="work-title">
    <div class="section-head">
      <div>
        <h2 id="work-title" class="section-title">{{ t('work.title') }}</h2>
        <p class="section-sub">{{ t('work.sub', { count: featured.length, total: projects.length }) }}</p>
      </div>
      <div class="rail-nav">
        <button
          type="button"
          class="rail-nav__btn glass press"
          :aria-label="t('a11y.prev')"
          aria-controls="rail"
          :disabled="atStart"
          @click="step(-1)"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <button
          type="button"
          class="rail-nav__btn glass press"
          :aria-label="t('a11y.next')"
          aria-controls="rail"
          :disabled="atEnd"
          @click="step(1)"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </div>
    </div>

    <div
      id="rail"
      ref="rail"
      class="rail"
      tabindex="0"
      role="region"
      :aria-label="t('a11y.rail')"
      @scroll.passive="updateEdges"
      @keydown.left.prevent="step(-1)"
      @keydown.right.prevent="step(1)"
    >
      <ul class="rail__list">
        <li v-for="p in featured" :key="p.slug" class="rail__item">
          <ProjectCard :project="p" />
        </li>
        <li class="rail__item">
          <RouterLink to="/projects" class="all glass glass--regular press">
            <span class="all__count">{{ projects.length }}</span>
            <span class="all__label">{{ t('work.all') }}</span>
            <span class="all__arrow" aria-hidden="true">→</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { featuredProjects as featured, projects } from '@/data/projects'
import { prefersReducedMotion } from '@/composables/useGlass'
import ProjectCard from './ProjectCard.vue'

const GAP = 18

const { t } = useI18n()
const rail = ref(null)
const atStart = ref(true)
const atEnd = ref(false)

function step(dir) {
  const el = rail.value
  const item = el.querySelector('.rail__item')
  el.scrollBy({
    left: dir * ((item ? item.offsetWidth : 380) + GAP),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  })
}

function updateEdges() {
  const el = rail.value
  if (!el) return
  // The rail has 4px of side padding, so allow a few pixels of slack.
  atStart.value = el.scrollLeft <= 8
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8
}

let resizeObserver
onMounted(() => {
  updateEdges()
  resizeObserver = new ResizeObserver(updateEdges)
  resizeObserver.observe(rail.value)
})
onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<style scoped lang="scss">
.rail-nav {
  display: flex;
  gap: 10px;
}

.rail-nav__btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  color: var(--ink);
  display: grid;
  place-items: center;

  svg {
    width: 18px;
    height: 18px;
  }

  &:disabled {
    cursor: default;
    opacity: .45;
  }
}

.rail {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 6px 4px 26px;
  margin: 0 -4px;
  scrollbar-width: none;
  overscroll-behavior-x: contain;
  border-radius: 34px;

  &::-webkit-scrollbar {
    display: none;
  }
}

.rail__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 18px;
}

.rail__item {
  flex: 0 0 min(400px, 84%);
  scroll-snap-align: start;
}

.all {
  height: 100%;
  min-height: 330px;
  border-radius: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.all__count {
  font-weight: 800;
  font-stretch: 125%;
  font-size: 72px;
  line-height: 1;
  letter-spacing: -.04em;
  color: var(--accent-text);
}

.all__label {
  margin-top: 14px;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 30px;
  letter-spacing: -.03em;
  line-height: 1.08;
}

.all__arrow {
  margin-top: auto;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 22px;
  background: var(--g-tint);
  color: #fff;
}
</style>
