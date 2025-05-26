<template>
  <nav class='flex justify-between items-center p-4'>
    <div class='text-xl font-bold'>InBio</div>
    <div class='flex items-center gap-4'>
      <select v-model='$i18n.locale'>
        <option value='uz'>UZ</option>
        <option value='ru'>RU</option>
        <option value='en'>EN</option>
      </select>
      <DarkModeToggle />
    </div>
  </nav>
</template>

<script setup>
import DarkModeToggle from './DarkModeToggle.vue'
</script>
