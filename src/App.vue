<template>
  <router-view />
</template>

<script setup>
import { useAppStore } from '@/stores/useAppStore'

useAppStore().init()
</script>
