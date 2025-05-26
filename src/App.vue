<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
</script>
