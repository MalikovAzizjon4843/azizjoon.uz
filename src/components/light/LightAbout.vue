<template>
  <section id="about" class="light-about">
    <div class="container-light">
      <!-- About Me -->
      <div class="about-grid">
        <div class="about-photo">
          <div class="photo-border">
            <ProfilePhoto :size="280" border-radius="12px" border-color="transparent" />
          </div>
        </div>
        <div class="about-content">
          <span class="section-label">{{ $t('about.title').toUpperCase() }}</span>
          <h2>{{ $t('about.title') }}</h2>
          <p>{{ $t('about.p1') }}</p>
          <p>{{ $t('about.p2') }}</p>
          <p>{{ $t('about.p3') }}</p>
        </div>
      </div>

      <!-- Skills -->
      <div class="skills-section">
        <span class="section-label">{{ $t('skills.title').toUpperCase() }}</span>
        <h2>{{ $t('skills.title') }}</h2>

        <div class="skills-grid">
          <div v-for="(skills, category) in portfolioData.skills" :key="category" class="skill-card">
            <h4>{{ $t(`skills.${category}`) }}</h4>
            <div class="chip-list">
              <span
                v-for="skill in skills"
                :key="skill"
                class="chip"
                :class="{ highlighted: portfolioData.highlightedSkills.includes(skill) }"
              >
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import ProfilePhoto from '@/components/shared/ProfilePhoto.vue'
</script>

<style lang="scss" scoped>
.light-about {
  padding: 80px 0;
}

.container-light {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.about-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.about-photo {
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
}

.photo-border {
  padding: 3px;
  background: var(--gradient);
  border-radius: 14px;
  display: inline-block;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-hover);
  }

  :deep(.profile-photo) {
    border: none !important;
  }
}

.about-content {
  h2 {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 600;
    margin: 8px 0 16px;
  }

  p {
    font-size: 16px;
    color: var(--text-2);
    line-height: 1.7;
    margin-bottom: 16px;
  }
}

.skills-section {
  margin-top: 64px;

  h2 {
    font-family: var(--font-heading);
    font-size: 24px;
    font-weight: 600;
    margin: 8px 0 24px;
  }
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.skill-card {
  background-color: var(--bg-secondary);
  border: 0.5px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: var(--border-accent, var(--accent));
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover, var(--shadow));
  }

  h4 {
    font-size: 14px;
    font-weight: 600;
    color: var(--accent);
    text-transform: uppercase;
    margin-bottom: 12px;
  }
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.chip {
  font-size: 13px;
  color: var(--text-2);
  background: var(--bg);
  border: 0.5px solid var(--border);
  border-radius: 6px;
  padding: 6px 12px;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--border-accent, var(--accent));
    color: var(--accent);
  }

  &.highlighted {
    background: var(--gradient);
    color: #fff;
    border: none;
    font-weight: 500;
  }
}
</style>
