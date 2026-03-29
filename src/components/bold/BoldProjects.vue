<template>
  <section id="projects" class="bold-projects">
    <div class="container">
      <h2 class="section-heading mono">
        <span class="text-accent">#</span> {{ $t('projects.title').toUpperCase() }}
      </h2>

      <div class="projects-grid">
        <div
          v-for="(project, i) in portfolioData.projects"
          :key="i"
          class="project-card"
          :class="{ featured: project.featured }"
        >
          <div class="card-header">
            <span class="project-status mono" :class="project.status">
              [{{ project.status.toUpperCase() }}]
            </span>
            <div class="card-links">
              <a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="mono text-accent">
                {git}
              </a>
              <a v-if="project.links.live" :href="project.links.live" target="_blank" rel="noopener noreferrer" aria-label="Live" class="mono text-accent">
                {url}
              </a>
            </div>
          </div>

          <h3>{{ project.name }}</h3>
          <p class="card-type mono">// {{ project.type }}</p>
          <p class="card-desc">{{ $t(project.i18nDesc) }}</p>

          <div class="card-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag mono">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>

<style lang="scss" scoped>
.bold-projects {
  padding: 80px 0;
  border-top: 1px solid var(--border);
}

.section-heading {
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.project-card {
  background-color: var(--card);
  border: 2px solid var(--border);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.15s, transform 0.15s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  &.featured {
    border-color: var(--accent);
  }

  h3 {
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-status {
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 1px;

  &.production { color: var(--success); }
  &.live { color: var(--accent); }
}

.card-links {
  display: flex;
  gap: 10px;

  a {
    font-size: 12px;
    transition: opacity 0.15s;
    &:hover { opacity: 0.7; }
  }
}

.card-type {
  font-size: 12px;
  color: var(--text-3);
}

.card-desc {
  font-size: 14px;
  flex: 1;
}

.card-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.tech-tag {
  font-size: 11px;
  padding: 3px 8px;
  border: 1px solid var(--border);
  color: var(--text-2);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
</style>
