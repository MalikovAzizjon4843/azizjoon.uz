<template>
  <main id="top" class="wrap projects">
    <header class="projects__head">
      <h1 class="projects__title">{{ t('projects_page.title') }}</h1>
      <p class="projects__sub">{{ t('projects_page.sub', { total: projects.length }) }}</p>
    </header>

    <div class="projects__bar">
      <SegmentedControl v-model="category" :options="options" :label="t('projects_page.filter')" />
      <p class="projects__count" role="status" aria-live="polite">{{ t('projects_page.count', { n: visible.length }) }}</p>
    </div>

    <ul class="projects__grid">
      <li v-for="p in visible" :key="p.slug">
        <ProjectCard :project="p" heading-tag="h2" :max-tags="4" />
      </li>
    </ul>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { CATEGORIES, catalogOrder, projects } from '@/data/projects'
import { usePageMeta } from '@/composables/usePageMeta'
import ProjectCard from '@/components/ProjectCard.vue'
import SegmentedControl from '@/components/SegmentedControl.vue'

const FILTERS = ['all', ...CATEGORIES]

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

// The filter lives in the URL (?category=client) so it can be shared and survives reloads.
const category = computed({
  get: () => (FILTERS.includes(route.query.category) ? route.query.category : 'all'),
  set: (value) => router.replace({ query: value === 'all' ? {} : { category: value } })
})

const options = computed(() => FILTERS.map((value) => ({ value, label: t(`category.${value}`) })))

const visible = computed(() => catalogOrder(
  category.value === 'all' ? projects : projects.filter((p) => p.category === category.value)
))

usePageMeta(() => ({
  title: `${t('projects_page.title')} — Azizjon Malikov`,
  description: t('projects_page.meta_description'),
  path: '/projects'
}))
</script>

<style scoped lang="scss">
.projects {
  padding: 64px 0 0;
}

.projects__title {
  margin: 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: clamp(44px, 6vw, 88px);
  letter-spacing: -.045em;
  line-height: .95;
}

.projects__sub {
  margin: 14px 0 0;
  color: var(--muted);
  font-size: 18px;
  max-width: 60ch;
}

.projects__bar {
  margin: 32px 0 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.projects__count {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.projects__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 340px), 1fr));
  gap: 18px;
}
</style>
