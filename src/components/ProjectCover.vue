<template>
  <div class="cover glass">
    <img
      v-if="src"
      class="cover__img"
      :src="src"
      :alt="alt"
      :width="SHOT_SIZE.width"
      :height="SHOT_SIZE.height"
      fetchpriority="high"
      decoding="async"
    />
    <!-- No cover yet: a cut-gem pattern in the project's frame. -->
    <div v-else class="cover__placeholder" aria-hidden="true">
      <GemMark class="cover__gem" />
    </div>
  </div>
</template>

<script setup>
import { SHOT_SIZE } from '@/data/projects'
import GemMark from './GemMark.vue'

defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: '' }
})
</script>

<style scoped lang="scss">
.cover {
  padding: 10px;
  border-radius: 34px;
}

.cover__img,
.cover__placeholder {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  border-radius: 26px;
  object-fit: cover;
}

.cover__placeholder {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  background:
    radial-gradient(circle at 25% 20%, color-mix(in srgb, var(--blob-b) 45%, transparent), transparent 55%),
    radial-gradient(circle at 80% 85%, color-mix(in srgb, var(--blob-d) 40%, transparent), transparent 55%),
    var(--g-regular);

  // Tiled gem outline.
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: .14;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='72' height='72'><path d='M9 50 L50 9 L55.47 14.47 L42.55 50 Z M9 50 L42.55 50 L33.6 74.6 Z M66.4 25.4 L91 50 L57.45 50 Z M57.45 50 L91 50 L50 91 L44.53 85.53 Z' fill='%23ffffff'/></svg>");
    background-size: 72px 72px;
  }
}

.cover__gem {
  position: relative;
  width: clamp(96px, 18%, 180px);
  height: auto;
  filter: drop-shadow(0 18px 40px var(--g-shadow));
}
</style>
