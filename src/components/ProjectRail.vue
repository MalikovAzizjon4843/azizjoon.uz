<template>
  <section id="work" class="section wrap" aria-labelledby="work-title">
    <div class="section-head">
      <div>
        <h2 id="work-title" class="section-title">{{ t('work.title') }}</h2>
        <p class="section-sub">{{ t('work.sub') }}</p>
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
        <li v-for="p in projects" :key="p.key" class="card glass glass--regular">
          <div class="card__top">
            <span>{{ p.year }}</span>
            <span class="pill">{{ t(`status.${p.status}`) }}</span>
          </div>
          <h3 class="card__title">
            <RouterLink class="card__link" :to="`/projects/${p.slug}`">{{ t(`work.items.${p.key}.name`) }}</RouterLink>
          </h3>
          <p class="card__desc">{{ t(`work.items.${p.key}.desc`) }}</p>
          <div class="card__foot">
            <ul class="card__tags">
              <li v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</li>
            </ul>
            <a v-if="p.url" class="card__visit" :href="p.url" target="_blank" rel="noopener">
              {{ t('work.visit') }}<span class="sr-only"> {{ t('a11y.new_tab') }}</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { portfolioData } from '@/data/portfolio'
import { prefersReducedMotion } from '@/composables/useGlass'

const GAP = 18

const { t } = useI18n()
const projects = portfolioData.featuredProjects
const rail = ref(null)
const atStart = ref(true)
const atEnd = ref(false)

function step(dir) {
  const el = rail.value
  const card = el.querySelector('.card')
  el.scrollBy({
    left: dir * ((card ? card.offsetWidth : 380) + GAP),
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  })
}

function updateEdges() {
  const el = rail.value
  if (!el) return
  atStart.value = el.scrollLeft <= 2
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2
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

.card {
  flex: 0 0 min(400px, 84%);
  scroll-snap-align: start;
  border-radius: 30px;
  padding: 30px;
  min-height: 330px;
  display: flex;
  flex-direction: column;

  &:has(.card__link:focus-visible) {
    outline: 2px solid var(--accent-deep);
    outline-offset: 3px;
  }
}

.card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--muted);
}

.card__title {
  margin: 22px 0 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 32px;
  letter-spacing: -.03em;
  line-height: 1.05;
}

// The title link covers the whole card; the "visit" link sits above it.
.card__link {
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    z-index: 1;
  }

  &:focus-visible {
    outline: none;
  }
}

.card__desc {
  margin: 12px 0 0;
  color: var(--muted);
}

.card__foot {
  margin-top: auto;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 14px;
  flex-wrap: wrap;
}

.card__tags {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card__visit {
  position: relative;
  z-index: 2;
  font-size: 14px;
  font-weight: 700;
  color: var(--accent-text);
  text-underline-offset: 4px;
}
</style>
