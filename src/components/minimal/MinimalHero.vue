<template>
  <section id="hero" class="minimal-hero">
    <p class="hero-intro mono animate-fade-in-up">{{ $t('hero.greeting') }}</p>
    <h1 class="hero-name animate-fade-in-up delay-1">
      {{ portfolioData.personal.name }} {{ portfolioData.personal.surname }}.
    </h1>
    <h2 class="hero-tagline animate-fade-in-up delay-2">{{ $t('hero.title') }}</h2>
    <p class="hero-desc animate-fade-in-up delay-3">{{ $t('hero.bio') }}</p>
    <a href="#projects" class="hero-cta mono animate-fade-in-up delay-4" @click.prevent="scrollTo('#projects')">
      {{ $t('hero.cta_projects') }} &darr;
    </a>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.minimal-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 40px;
}

.hero-intro {
  font-size: 14px;
  color: var(--accent);
  margin-bottom: 24px;
}

.hero-name {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 600;
  color: var(--text);
  line-height: 1.1;
  letter-spacing: -1px;

  @media (max-width: 767px) {
    font-size: 36px;
  }
}

.hero-tagline {
  font-family: var(--font-heading);
  font-size: 44px;
  font-weight: 600;
  color: var(--text-2);
  line-height: 1.1;
  letter-spacing: -1px;
  margin-top: 8px;

  @media (max-width: 767px) {
    font-size: 28px;
  }
}

.hero-desc {
  font-size: 16px;
  color: var(--text-2);
  max-width: 540px;
  margin-top: 24px;
  line-height: 1.7;
}

.hero-cta {
  display: inline-block;
  margin-top: 40px;
  padding: 14px 28px;
  border: 1px solid var(--accent);
  border-radius: 4px;
  color: var(--accent);
  font-size: 13px;
  background: transparent;
  transition: background-color 0.25s;
  align-self: flex-start;

  &:hover {
    background-color: var(--accent-tint);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out both;
}
.delay-1 { animation-delay: 100ms; }
.delay-2 { animation-delay: 200ms; }
.delay-3 { animation-delay: 300ms; }
.delay-4 { animation-delay: 400ms; }

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
