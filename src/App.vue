<template>
  <AppBackground />
  <TopBar />
  <router-view />
  <AppFooter />
</template>

<script setup>
import { useAppStore } from '@/stores/useAppStore'
import { installSpecular } from '@/composables/useGlass'
import AppBackground from '@/components/AppBackground.vue'
import TopBar from '@/components/TopBar.vue'
import AppFooter from '@/components/AppFooter.vue'

useAppStore().init()
installSpecular()
</script>
