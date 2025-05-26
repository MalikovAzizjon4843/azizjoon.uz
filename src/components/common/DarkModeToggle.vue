<template>
  <button @click='toggleDark' class='p-2 rounded'>
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const isDark = ref(localStorage.getItem('theme') === 'dark')

const toggleDark = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', isDark.value)
}
watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>