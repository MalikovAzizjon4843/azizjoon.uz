<template>
  <NotFound v-if="!project" />

  <main v-else id="top" class="wrap detail">
    <div class="detail__top">
      <RouterLink class="btn glass press detail__back" to="/projects" @click="goBack">
        <span aria-hidden="true">←</span> {{ t('project.back') }}
      </RouterLink>
      <div class="detail__meta">
        <span v-if="project.year" class="pill">{{ years(project) }}</span>
        <span class="pill">{{ t(`status.${project.status}`) }}</span>
        <RouterLink class="pill detail__cat" :to="{ path: '/projects', query: { category: project.category } }">
          {{ t(`category.${project.category}`) }}
        </RouterLink>
      </div>
    </div>

    <header class="detail__head">
      <h1 class="detail__title">{{ text(project, 'title') }}</h1>
      <p class="detail__tagline">{{ text(project, 'tagline') }}</p>
      <p v-if="text(project, 'role')" class="detail__role">
        <span class="detail__label">{{ t('project.role') }}:</span> {{ text(project, 'role') }}
      </p>
    </header>

    <div v-if="project.stack.length || hasLinks" class="detail__chips">
      <ul v-if="project.stack.length" class="detail__stack" :aria-label="t('project.stack')">
        <li v-for="s in project.stack" :key="s" class="tag">{{ s }}</li>
      </ul>
      <div v-if="hasLinks" class="detail__links">
        <a v-if="project.links.live" class="btn btn--tinted glass press" :href="project.links.live" target="_blank" rel="noopener">
          {{ t('project.live') }} ↗<span class="sr-only"> {{ t('a11y.new_tab') }}</span>
        </a>
        <a v-if="project.links.github" class="btn glass press" :href="project.links.github" target="_blank" rel="noopener">
          {{ t('project.github') }} ↗<span class="sr-only"> {{ t('a11y.new_tab') }}</span>
        </a>
      </div>
    </div>

    <ProjectCover class="detail__cover" :src="project.cover" :alt="t('project.cover_alt', { title: text(project, 'title') })" />

    <div v-if="story.length" class="detail__story">
      <section v-for="s in story" :key="s.key" class="detail__block glass glass--regular">
        <h2 class="detail__h2">{{ t(`project.${s.key}`) }}</h2>
        <p>{{ s.body }}</p>
      </section>
    </div>

    <section v-if="highlights.length" class="detail__section">
      <h2 class="detail__h2">{{ t('project.highlights') }}</h2>
      <ul class="detail__highlights">
        <li v-for="h in highlights" :key="h" class="glass glass--regular">
          <i class="detail__bullet" aria-hidden="true" />{{ h }}
        </li>
      </ul>
    </section>

    <section class="detail__section">
      <h2 class="detail__h2">{{ t('project.gallery') }}</h2>
      <ProjectGallery :key="project.slug" :project="project" />
    </section>

    <nav class="detail__pager" :aria-label="t('project.nav')">
      <RouterLink class="pager glass glass--regular press" :to="`/projects/${prev.slug}`" rel="prev">
        <span class="pager__dir">← {{ t('project.prev') }}</span>
        <span class="pager__title">{{ text(prev, 'title') }}</span>
      </RouterLink>
      <RouterLink class="pager pager--next glass glass--regular press" :to="`/projects/${next.slug}`" rel="next">
        <span class="pager__dir">{{ t('project.next') }} →</span>
        <span class="pager__title">{{ text(next, 'title') }}</span>
      </RouterLink>
    </nav>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SHOT_SIZE, findProject, projects } from '@/data/projects'
import { useProjectText } from '@/composables/useProjects'
import { usePageMeta } from '@/composables/usePageMeta'
import NotFound from '@/components/NotFound.vue'
import ProjectCover from '@/components/ProjectCover.vue'
import ProjectGallery from '@/components/ProjectGallery.vue'

const props = defineProps({ slug: { type: String, required: true } })

const { t } = useI18n()
const router = useRouter()
const { text, years } = useProjectText()

const project = computed(() => findProject(props.slug))
const index = computed(() => projects.indexOf(project.value))
const prev = computed(() => projects[(index.value - 1 + projects.length) % projects.length])
const next = computed(() => projects[(index.value + 1) % projects.length])
const hasLinks = computed(() => !!(project.value.links.live || project.value.links.github))
const highlights = computed(() => text(project.value, 'highlights'))

// Problem → Solution → Result; empty parts are skipped entirely.
const story = computed(() => ['problem', 'solution', 'result']
  .map((key) => ({ key, body: text(project.value, key) }))
  .filter((s) => s.body))

// Prefer a real "back" when the visitor came from the list, so the filter
// and scroll position are restored; otherwise follow the link to /projects.
function goBack(e) {
  if (router.options.history.state.back?.startsWith('/projects')) {
    e.preventDefault()
    router.back()
  }
}

usePageMeta(() => project.value
  ? {
      title: `${text(project.value, 'title')} — Azizjon Malikov`,
      description: text(project.value, 'tagline'),
      path: `/projects/${project.value.slug}`,
      image: project.value.cover,
      imageSize: SHOT_SIZE
    }
  : { title: `${t('not_found.title')} — Azizjon Malikov`, description: t('not_found.text'), path: `/projects/${props.slug}` })
</script>

<style scoped lang="scss">
.detail {
  padding: 48px 0 0;
}

.detail__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
}

.detail__back {
  padding: 12px 20px;
}

.detail__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.detail__cat {
  text-decoration: none;
}

.detail__head {
  margin-top: 40px;
}

.detail__title {
  margin: 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: clamp(38px, 5.6vw, 80px);
  letter-spacing: -.04em;
  line-height: 1;
}

.detail__tagline {
  margin: 16px 0 0;
  font-size: clamp(18px, 1.6vw, 22px);
  font-weight: 600;
  color: var(--accent-text);
  max-width: 60ch;
}

.detail__role {
  margin: 12px 0 0;
  color: var(--muted);
}

.detail__label {
  font-weight: 700;
  color: var(--ink);
}

.detail__chips {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.detail__stack {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.detail__links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.detail__cover {
  margin-top: 36px;
}

.detail__story {
  margin-top: 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 18px;
}

.detail__block {
  padding: 26px 28px;
  border-radius: 26px;

  p {
    margin: 10px 0 0;
    color: var(--muted);
  }
}

.detail__section {
  margin-top: 64px;
}

.detail__h2 {
  margin: 0;
  font-weight: 800;
  font-stretch: 112.5%;
  font-size: 22px;
  letter-spacing: -.02em;
}

.detail__section > .detail__h2 {
  font-size: clamp(28px, 3vw, 40px);
  font-stretch: 125%;
  letter-spacing: -.03em;
  margin-bottom: 20px;
}

.detail__highlights {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 12px;

  li {
    padding: 16px 20px 16px 44px;
    border-radius: 20px;
  }
}

// Small gem bullet (li::before is taken by the glass specular highlight).
.detail__bullet {
  position: absolute;
  left: 20px;
  top: 24px;
  width: 9px;
  height: 9px;
  border-radius: 2px;
  transform: rotate(45deg);
  background: var(--accent);
}

.detail__pager {
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.pager {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 22px 26px;
  border-radius: 26px;
  text-decoration: none;

  &--next {
    text-align: right;
  }
}

.pager__dir {
  font-size: 14px;
  color: var(--muted);
}

.pager__title {
  font-weight: 700;
  font-stretch: 112.5%;
  font-size: 18px;
}

@media (max-width: 560px) {
  .detail__pager {
    grid-template-columns: 1fr;
  }

  .pager--next {
    text-align: left;
  }
}
</style>
