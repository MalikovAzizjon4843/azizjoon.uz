<template>
  <div
    class="profile-photo"
    :style="{
      width: size + 'px',
      height: size + 'px',
      borderRadius: borderRadius,
      borderColor: borderColor || 'var(--accent)'
    }"
  >
    <img
      v-if="imgLoaded"
      :src="photoSrc"
      :alt="portfolioData.personal.name + ' ' + portfolioData.personal.surname"
      @error="imgLoaded = false"
    />
    <div v-else class="fallback">
      {{ initials }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '@/data/portfolio'

defineProps({
  size: { type: Number, default: 120 },
  borderRadius: { type: String, default: '8px' },
  borderColor: { type: String, default: null }
})

const imgLoaded = ref(true)
let photoSrc = ''

try {
  const img = new URL('@/assets/images/profile.jpg', import.meta.url)
  photoSrc = img.href
} catch {
  imgLoaded.value = false
}

const initials = portfolioData.personal.name[0] + portfolioData.personal.surname[0]
</script>

<style lang="scss" scoped>
.profile-photo {
  overflow: hidden;
  border: 2px solid;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fallback {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent-tint);
    color: var(--accent);
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: 2rem;
  }
}
</style>
