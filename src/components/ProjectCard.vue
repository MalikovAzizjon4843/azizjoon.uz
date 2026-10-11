<template>
  <article class="card glass glass--regular">
    <div class="card__top">
      <span>{{ years(project) }}</span>
      <span class="pill">{{ t(`status.${project.status}`) }}</span>
    </div>
    <component :is="headingTag" class="card__title">
      <RouterLink class="card__link" :to="`/projects/${project.slug}`">{{ text(project, 'title') }}</RouterLink>
    </component>
    <p class="card__desc">{{ text(project, 'tagline') }}</p>
    <div class="card__foot">
      <ul v-if="project.stack.length" class="card__tags">
        <li v-for="tag in project.stack.slice(0, maxTags)" :key="tag" class="tag">{{ tag }}</li>
      </ul>
      <a v-if="project.links.live" class="card__visit" :href="project.links.live" target="_blank" rel="noopener">
        {{ t('work.visit') }}<span class="sr-only"> {{ t('a11y.new_tab') }}</span>
      </a>
    </div>
  </article>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useProjectText } from '@/composables/useProjects'

defineProps({
  project: { type: Object, required: true },
  headingTag: { type: String, default: 'h3' },
  maxTags: { type: Number, default: 3 }
})

const { t } = useI18n()
const { text, years } = useProjectText()
</script>

<style scoped lang="scss">
.card {
  border-radius: 30px;
  padding: 30px;
  min-height: 330px;
  height: 100%;
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
  gap: 12px;
  font-size: 14px;
  color: var(--muted);
}

.card__title {
  margin: 22px 0 0;
  font-weight: 800;
  font-stretch: 125%;
  font-size: 30px;
  letter-spacing: -.03em;
  line-height: 1.08;
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

@media (max-width: 560px) {
  .card {
    padding: 24px;
    min-height: 290px;
  }

  .card__title {
    font-size: 26px;
  }
}
</style>
