<template>
  <main id="top">
    <HeroSection />
    <WidgetsGrid />
    <ProjectRail />
    <ExperienceTimeline />
    <ContactSection />
  </main>
  <AppDock />
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import WidgetsGrid from '@/components/WidgetsGrid.vue'
import ProjectRail from '@/components/ProjectRail.vue'
import ExperienceTimeline from '@/components/ExperienceTimeline.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppDock from '@/components/AppDock.vue'
</script>
