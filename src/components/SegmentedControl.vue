<template>
  <div ref="root" class="segmented glass" role="group" :aria-label="label" @keydown="onKeydown">
    <span class="segmented__thumb" :style="thumbStyle" aria-hidden="true" />
    <button
      v-for="o in options"
      :key="o.value"
      type="button"
      class="segmented__btn"
      :data-value="o.value"
      :aria-pressed="String(o.value === modelValue)"
      @click="emit('update:modelValue', o.value)"
    >
      {{ o.label }}
    </button>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

// Glass segmented control with a sliding tinted thumb (same motion as LangSegment).
const props = defineProps({
  modelValue: { type: String, required: true },
  options: { type: Array, required: true }, // [{ value, label }]
  label: { type: String, required: true }
})
const emit = defineEmits(['update:modelValue'])

const root = ref(null)
const thumbStyle = ref({ opacity: 0 })

function moveThumb() {
  const btn = root.value?.querySelector(`[data-value="${props.modelValue}"]`)
  if (!btn) return
  thumbStyle.value = {
    width: `${btn.offsetWidth}px`,
    height: `${btn.offsetHeight}px`,
    transform: `translate(${btn.offsetLeft}px, ${btn.offsetTop}px)`
  }
}

// Arrow keys move focus between options.
function onKeydown(e) {
  if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return
  const buttons = [...root.value.querySelectorAll('.segmented__btn')]
  const i = buttons.indexOf(document.activeElement)
  if (i === -1) return
  e.preventDefault()
  buttons[(i + (e.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length].focus()
}

let resizeObserver
onMounted(() => {
  moveThumb()
  document.fonts?.ready.then(moveThumb)
  resizeObserver = new ResizeObserver(moveThumb)
  resizeObserver.observe(root.value)
})
onBeforeUnmount(() => resizeObserver?.disconnect())

// Labels change width with the language.
watch(() => [props.modelValue, props.options], () => nextTick(moveThumb), { deep: true })
</script>

<style scoped lang="scss">
.segmented {
  position: relative;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 2px;
  padding: 6px;
  border-radius: 28px;
  max-width: 100%;
}

.segmented__thumb {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 999px;
  background: var(--g-tint);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .55), 0 4px 14px rgba(37, 133, 184, .35);
  transition: transform .5s var(--spring), width .4s ease, height .4s ease;
}

.segmented__btn {
  position: relative;
  z-index: 1;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 999px;
  white-space: nowrap;
  transition: color .3s;

  &[aria-pressed="true"] {
    color: #fff;
  }
}

@media (max-width: 560px) {
  .segmented__btn {
    padding: 9px 12px;
    font-size: 13px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .segmented__thumb {
    transition: none;
  }
}
</style>
