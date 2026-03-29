import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(text, speed = 80, delay = 500) {
  const displayText = ref('')
  const isComplete = ref(false)
  let timeoutId = null

  function type(index = 0) {
    if (index <= text.length) {
      displayText.value = text.slice(0, index)
      timeoutId = setTimeout(() => type(index + 1), speed)
    } else {
      isComplete.value = true
    }
  }

  onMounted(() => {
    timeoutId = setTimeout(() => type(), delay)
  })

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  return { displayText, isComplete }
}
