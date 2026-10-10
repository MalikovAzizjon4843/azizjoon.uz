<template>
  <nav ref="dock" class="dock glass" :class="{ 'glass--refract': refract }" :aria-label="t('a11y.sections')" @keydown="onKeydown">
    <span class="dock__thumb" :style="thumbStyle" aria-hidden="true" />
    <RouterLink
      v-for="id in SECTIONS"
      :key="id"
      v-slot="{ href, navigate }"
      :to="{ path: '/', hash: `#${id}` }"
      custom
    >
      <a
        :href="href"
        class="dock__link"
        :data-sec="id"
        :aria-current="active === id ? 'location' : undefined"
        @click="navigate"
      >{{ t(`nav.${id}`) }}</a>
    </RouterLink>
  </nav>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRefract } from '@/composables/useGlass'

const SECTIONS = ['about', 'work', 'experience', 'contact']

const { t, locale } = useI18n()
const refract = useRefract()
const dock = ref(null)
const active = ref(SECTIONS[0])
const thumbStyle = ref({})

// Slide the tinted thumb under the active link.
function moveThumb() {
  const link = dock.value?.querySelector(`[data-sec="${active.value}"]`)
  if (!link) return
  thumbStyle.value = {
    width: `${link.offsetWidth}px`,
    transform: `translateX(${link.offsetLeft - 6}px)`
  }
}

// Arrow keys move focus between dock links.
function onKeydown(e) {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
  const links = [...dock.value.querySelectorAll('.dock__link')]
  const i = links.indexOf(document.activeElement)
  if (i === -1) return
  e.preventDefault()
  links[(i + (e.key === 'ArrowRight' ? 1 : -1) + links.length) % links.length].focus()
}

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) active.value = entry.target.id
    })
  }, { rootMargin: '-45% 0px -50% 0px' })
  SECTIONS.forEach((id) => {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  })
  moveThumb()
  document.fonts?.ready.then(moveThumb)
  window.addEventListener('resize', moveThumb)
})

watch(active, moveThumb)
// Link widths change with the language.
watch(locale, () => nextTick(moveThumb))

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('resize', moveThumb)
})
</script>

<style scoped lang="scss">
.dock {
  position: fixed;
  left: 50%;
  bottom: calc(18px + env(safe-area-inset-bottom, 0px));
  transform: translateX(-50%);
  z-index: 50;
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 6px;
  border-radius: 999px;
}

.dock__thumb {
  position: absolute;
  top: 6px;
  left: 6px;
  height: calc(100% - 12px);
  border-radius: 999px;
  background: var(--g-tint);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .55), 0 6px 18px rgba(37, 133, 184, .35);
  transition: transform .55s var(--spring), width .4s ease;
}

.dock__link {
  position: relative;
  z-index: 1;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  padding: 11px 18px;
  border-radius: 999px;
  text-align: center;
  white-space: nowrap;
  transition: color .3s;

  &[aria-current] {
    color: #fff;
  }
}

@media (max-width: 560px) {
  .dock__link {
    padding: 10px 11px;
    font-size: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .dock__thumb {
    transition: none;
  }
}
</style>
