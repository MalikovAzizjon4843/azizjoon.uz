<template>
  <section id="about" class="bold-about">
    <h2 class="section-heading">
      <span class="mono text-accent">01/</span> {{ $t('about.title').toUpperCase() }}
      <span class="heading-line"></span>
    </h2>

    <div class="about-grid">
      <div class="about-text">
        <p>{{ $t('about.p1') }}</p>
        <p>{{ $t('about.p2') }}</p>
        <p>{{ $t('about.p3') }}</p>
      </div>

      <div class="about-photo">
        <ProfilePhoto :size="220" border-radius="4px" border-color="var(--accent)" />
      </div>
    </div>

    <div class="skills-block">
      <div class="skills-grid">
        <div v-for="(skills, category) in portfolioData.skills" :key="category" class="skill-group">
          <span class="category mono">// {{ $t(`skills.${category}`) }}</span>
          <div class="skill-list">
            <span
              v-for="skill in skills"
              :key="skill"
              class="skill-tag mono"
              :class="{ highlighted: portfolioData.highlightedSkills.includes(skill) }"
            >
              {{ skill }}
            </span>
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
.bold-about {
  padding: 60px 0;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-heading);
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 40px;
  white-space: nowrap;

  .mono { font-size: 13px; letter-spacing: 0; }
}

.heading-line {
  flex: 1;
  height: 0.5px;
  background: var(--border);
  max-width: 200px;
}

.about-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.about-text {
  p {
    font-size: 14px;
    color: var(--text-2);
    margin-bottom: 16px;
    line-height: 1.7;
  }
}

.about-photo {
  display: flex;
  justify-content: center;

  :deep(.profile-photo) {
    filter: grayscale(20%);
    transition: filter 0.3s;
    &:hover { filter: grayscale(0%); }
  }

  @media (max-width: 767px) {
    order: -1;
  }
}

.skills-block {
  margin-top: 40px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.skill-group {
  .category {
    display: block;
    font-size: 11px;
    color: var(--text-3);
    margin-bottom: 10px;
  }
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  font-size: 10px;
  padding: 4px 10px;
  border: 1px solid var(--border);
  color: var(--text-3);
  border-radius: 0;
  transition: all 0.15s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  &.highlighted {
    background-color: var(--accent);
    color: var(--bg);
    border-color: var(--accent);
  }
}
</style>
