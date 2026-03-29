<template>
  <section id="about" class="original-about">
    <div class="container">
      <h2 class="section-heading">
        <span class="text-accent">//</span> {{ $t('about.title') }}
      </h2>

      <div class="about-grid">
        <div class="about-text">
          <p>{{ $t('about.p1') }}</p>
          <p>{{ $t('about.p2') }}</p>
          <p>{{ $t('about.p3') }}</p>
        </div>

        <div class="about-skills">
          <h3>{{ $t('skills.title') }}</h3>
          <div v-for="(skills, category) in portfolioData.skills" :key="category" class="skill-group">
            <span class="skill-category">{{ $t(`skills.${category}`) }}</span>
            <TechTags :techs="skills" />
          </div>
        </div>
      </div>

      <div class="about-stats">
        <div v-for="(stat, i) in portfolioData.stats" :key="i" class="stat-item">
          <span class="stat-value">{{ stat.value }}{{ stat.suffix }}</span>
          <span class="stat-label">{{ $t(stat.i18nLabel) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import TechTags from '@/components/shared/TechTags.vue'
</script>

<style lang="scss" scoped>
.original-about {
  padding: 100px 0;
}

.section-heading {
  font-size: 28px;
  margin-bottom: 48px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 15px;
    line-height: 1.8;
  }
}

.about-skills {
  h3 {
    font-size: 18px;
    margin-bottom: 20px;
    color: var(--text);
  }
}

.skill-group {
  margin-bottom: 16px;
}

.skill-category {
  display: block;
  font-size: 12px;
  color: var(--text-3);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  font-family: var(--font-mono);
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid var(--border);

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  display: block;
  font-size: 13px;
  color: var(--text-3);
  margin-top: 8px;
}
</style>
