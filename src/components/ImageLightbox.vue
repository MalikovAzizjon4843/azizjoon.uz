<template>
  <Teleport to="body">
    <div
      ref="dialog"
      class="lightbox"
      role="dialog"
      aria-modal="true"
      :aria-label="t('project.lightbox')"
      @click.self="emit('close')"
    >
      <div class="lightbox__bar">
        <span class="lightbox__counter glass" aria-live="polite">
          {{ t('project.counter', { n: index + 1, total: shots.length }) }}
        </span>
        <button ref="closeBtn" type="button" class="lightbox__btn glass press" :aria-label="t('project.close')" @click="emit('close')">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
        </button>
      </div>

      <figure
        class="lightbox__stage"
        @pointerdown="onPointerDown"
        @pointerup="onPointerUp"
        @pointercancel="startX = null"
      >
        <img
          :key="shot.src"
          class="lightbox__img"
          :src="shot.src"
          :alt="shot.alt"
          :width="SHOT_SIZE.width"
          :height="SHOT_SIZE.height"
          decoding="async"
          draggable="false"
        />
        <figcaption v-if="shot.caption" class="lightbox__caption glass glass--regular">{{ shot.caption }}</figcaption>
      </figure>

      <template v-if="shots.length > 1">
        <button type="button" class="lightbox__btn lightbox__nav lightbox__nav--prev glass press" :aria-label="t('project.prev_shot')" @click="go(-1)">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <button type="button" class="lightbox__btn lightbox__nav lightbox__nav--next glass press" :aria-label="t('project.next_shot')" @click="go(1)">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
      </template>
    </div>
  </Teleport>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { SHOT_SIZE } from '@/data/projects'

// Full-screen screenshot viewer. The parent mounts it with v-if, owns `index`
// and returns focus to the thumbnail that opened it.
const props = defineProps({
  shots: { type: Array, required: true }, // [{ src, alt, caption }]
  index: { type: Number, required: true }
})
const emit = defineEmits(['update:index', 'close'])

const SWIPE_PX = 50

const { t } = useI18n()
const dialog = ref(null)
const closeBtn = ref(null)
const startX = ref(null)
const shot = computed(() => props.shots[props.index])

function go(dir) {
  const n = props.shots.length
  emit('update:index', (props.index + dir + n) % n)
}

function trapFocus(e) {
  const focusable = [...dialog.value.querySelectorAll('button')]
  const first = focusable[0]
  const last = focusable[focusable.length - 1]
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  } else if (!dialog.value.contains(document.activeElement)) {
    e.preventDefault()
    first.focus()
  }
}

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowLeft') go(-1)
  else if (e.key === 'ArrowRight') go(1)
  else if (e.key === 'Tab') trapFocus(e)
  else return
  if (e.key !== 'Tab') e.preventDefault()
}

function onPointerDown(e) {
  startX.value = e.clientX
}

function onPointerUp(e) {
  if (startX.value === null) return
  const dx = e.clientX - startX.value
  startX.value = null
  if (Math.abs(dx) > SWIPE_PX && props.shots.length > 1) go(dx < 0 ? 1 : -1)
}

let savedOverflow = ''
let savedPadding = ''
onMounted(() => {
  // Lock page scroll without the layout jumping by the scrollbar width.
  const html = document.documentElement
  const scrollbar = window.innerWidth - html.clientWidth
  savedOverflow = html.style.overflow
  savedPadding = document.body.style.paddingRight
  html.style.overflow = 'hidden'
  if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
  document.addEventListener('keydown', onKeydown)
  closeBtn.value.focus()
})

onBeforeUnmount(() => {
  document.documentElement.style.overflow = savedOverflow
  document.body.style.paddingRight = savedPadding
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped lang="scss">
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  grid-template-rows: auto 1fr;
  padding: calc(16px + env(safe-area-inset-top, 0px)) 16px calc(16px + env(safe-area-inset-bottom, 0px));
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(1.2);
  backdrop-filter: blur(18px) saturate(1.2);
}

.lightbox__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.lightbox__counter {
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.lightbox__btn {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  color: var(--ink);
  display: grid;
  place-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
}

.lightbox__stage {
  margin: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  touch-action: pan-y;
  user-select: none;
}

.lightbox__img {
  max-width: min(100%, 1600px);
  max-height: calc(100% - 64px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 24px 60px var(--g-shadow);
}

.lightbox__caption {
  max-width: 70ch;
  padding: 10px 16px;
  border-radius: 16px;
  font-size: 15px;
  text-align: center;
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &--prev {
    left: 16px;
  }

  &--next {
    right: 16px;
  }

  &.press:active {
    transform: translateY(-50%) scale(.96);
  }
}

@media (max-width: 560px) {
  .lightbox__nav {
    top: auto;
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    transform: none;

    &.press:active {
      transform: scale(.96);
    }
  }
}
</style>
