<template>
  <div v-if="items.length" class="gallery">
    <ul class="gallery__grid">
      <li v-for="(shot, i) in items" :key="shot.src">
        <button
          :ref="(el) => (thumbs[i] = el)"
          type="button"
          class="gallery__thumb glass press"
          :aria-label="t('project.shot_open', { n: i + 1 })"
          @click="open = i"
        >
          <img
            :src="shot.src"
            :alt="shot.alt"
            :width="SHOT_SIZE.width"
            :height="SHOT_SIZE.height"
            loading="lazy"
            decoding="async"
          />
        </button>
        <p v-if="shot.caption" class="gallery__caption">{{ shot.caption }}</p>
      </li>
    </ul>
    <ImageLightbox v-if="open !== null" v-model:index="open" :shots="items" @close="close" />
  </div>

  <div v-else class="gallery-empty glass glass--regular">
    <GemMark class="gallery-empty__gem" />
    <div>
      <p class="gallery-empty__title">{{ t('project.shots_soon') }}</p>
      <p class="gallery-empty__text">{{ t('project.shots_soon_text') }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { SHOT_SIZE } from '@/data/projects'
import { useProjectText } from '@/composables/useProjects'
import GemMark from './GemMark.vue'
import ImageLightbox from './ImageLightbox.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const { t } = useI18n()
const { text, caption } = useProjectText()
const open = ref(null)
const thumbs = []

const items = computed(() => props.project.screenshots.map((s, i) => ({
  src: s.src,
  caption: caption(s),
  alt: caption(s) || t('project.shot_alt', { title: text(props.project, 'title'), n: i + 1 })
})))

// Return focus to the thumbnail of the screenshot that was last shown.
function close() {
  const last = open.value
  open.value = null
  nextTick(() => thumbs[last]?.focus())
}
</script>

<style scoped lang="scss">
.gallery__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 18px;
}

.gallery__thumb {
  display: block;
  width: 100%;
  padding: 8px;
  border: 0;
  border-radius: 22px;
  cursor: zoom-in;

  img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    border-radius: 15px;
  }
}

.gallery__caption {
  margin: 10px 6px 0;
  color: var(--muted);
  font-size: 14px;
}

.gallery-empty {
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 28px 30px;
  border-radius: 26px;
}

.gallery-empty__gem {
  flex: 0 0 56px;
  width: 56px;
  height: 56px;
  opacity: .85;
}

.gallery-empty__title {
  margin: 0;
  font-weight: 700;
  font-size: 18px;
}

.gallery-empty__text {
  margin: 4px 0 0;
  color: var(--muted);
}
</style>
