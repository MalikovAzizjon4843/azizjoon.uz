<template>
  <section id="about" class="minimal-about minimal-section">
    <h2 class="section-heading">
      <span class="mono text-accent">01.</span> {{ $t('about.title') }}
      <span class="heading-line"></span>
    </h2>

    <div class="about-inner">
      <div class="about-text">
        <p>{{ $t('about.p1') }}</p>
        <p>{{ $t('about.p2') }}</p>
        <p>{{ $t('about.p3') }}</p>

        <div class="skill-list">
          <span v-for="skill in skillList" :key="skill" class="skill-item">
            <span class="text-accent">&#9655;</span> {{ skill }}
          </span>
        </div>
      </div>

      <div class="about-photo">
        <div class="photo-wrapper">
          <ProfilePhoto :size="260" border-radius="4px" border-color="var(--accent)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import ProfilePhoto from '@/components/shared/ProfilePhoto.vue'

const skillList = [
  'Vue.js / Nuxt',
  'Java / Spring Boot',
  'PostgreSQL',
  'JavaScript / TypeScript',
  'JPA / Hibernate',
  'REST API',
  'Docker',
  'Git'
]
</script>

<style lang="scss" scoped>
.minimal-about {
  padding: 100px 0;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 40px;
  white-space: nowrap;

  .mono {
    font-size: 18px;
  }
}

.heading-line {
  flex: 1;
  height: 1px;
  background-color: var(--border);
  max-width: 300px;
}

.about-inner {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.about-text {
  p {
    font-size: 16px;
    color: var(--text-2);
    line-height: 1.7;
    margin-bottom: 16px;
  }
}

.skill-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
  margin-top: 20px;
}

.skill-item {
  font-size: 13px;
  color: var(--text-2);
  display: flex;
  align-items: center;
  gap: 8px;

  .text-accent {
    font-size: 10px;
  }
}

.about-photo {
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    order: -1;
  }
}

.photo-wrapper {
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--accent);
    border-radius: 4px;
    z-index: -1;
    transition: all 0.3s ease;
  }

  &:hover::after {
    top: 10px;
    left: 10px;
  }
}
</style>
