<template>
  <section id="projects" class="light-projects">
    <div class="container-light">
      <span class="section-label">{{ $t('projects.featured').toUpperCase() }}</span>
      <h2>{{ $t('projects.title') }}</h2>

      <!-- Featured projects (full width cards) -->
      <div class="featured-list">
        <div
          v-for="(project, i) in featuredProjects"
          :key="i"
          class="featured-card"
        >
          <div class="featured-top">
            <span class="type-badge">{{ project.type }}</span>
            <div class="project-links">
              <a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a v-if="project.links.live" :href="project.links.live" target="_blank" rel="noopener noreferrer" aria-label="Live">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          <h3>{{ project.name }}</h3>
          <p class="featured-desc">{{ $t(project.i18nDesc) }}</p>
          <div class="featured-tech">
            <span v-for="t in project.tech" :key="t" class="tech-tag mono">{{ t }}</span>
          </div>
        </div>
      </div>

      <!-- Other projects (3 col grid) -->
      <h3 class="other-heading">{{ $t('projects.other') }}</h3>
      <div class="other-grid">
        <div
          v-for="(project, i) in otherProjects"
          :key="i"
          class="other-card"
        >
          <div class="other-top">
            <svg class="folder-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#grad)" stroke-width="1.5">
              <defs><linearGradient id="grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--accent)" /><stop offset="100%" stop-color="var(--accent-2, var(--accent))" /></linearGradient></defs>
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
            </svg>
            <div class="card-links">
              <a v-if="project.links.github" :href="project.links.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a v-if="project.links.live" :href="project.links.live" target="_blank" rel="noopener noreferrer" aria-label="Live">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
          <h4>{{ project.name }}</h4>
          <p class="other-desc">{{ $t(project.i18nDesc) }}</p>
          <div class="other-tech mono">
            <span v-for="t in project.tech" :key="t">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { portfolioData } from '@/data/portfolio'

const featuredProjects = computed(() => portfolioData.projects.filter(p => p.featured))
const otherProjects = computed(() => portfolioData.projects.filter(p => !p.featured))
</script>

<style lang="scss" scoped>
.light-projects {
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

h2 {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
  margin: 8px 0 32px;
}

/* Featured */
.featured-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.featured-card {
  background-color: var(--bg-secondary);
  border: 0.5px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;

  &:hover {
    border-color: var(--border-accent, var(--accent));
    box-shadow: var(--shadow-hover);
    transform: translateY(-4px);
  }

  h3 {
    font-family: var(--font-heading);
    font-size: 22px;
    font-weight: 600;
    color: var(--text);
    transition: color 0.2s;

    &:hover { color: var(--accent); }
  }
}

.featured-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.type-badge {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 14px;
  background: var(--gradient);
  color: #fff;
  border-radius: 6px;
}

.featured-desc {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.7;
}

.featured-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}

.tech-tag {
  font-size: 12px;
  color: var(--accent);
  background: var(--accent-tint);
  padding: 4px 10px;
  border-radius: 6px;
}

.project-links {
  display: flex;
  gap: 12px;

  a {
    color: var(--text-3);
    transition: color 0.2s;
    display: flex;
    &:hover { color: var(--accent); }
  }
}

/* Other */
.other-heading {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin: 48px 0 24px;
}

.other-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.other-card {
  background-color: var(--bg-secondary);
  border: 0.5px solid var(--border);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: var(--border-accent, var(--accent));
    transform: translateY(-4px);
    box-shadow: var(--shadow-hover);
  }

  h4 {
    font-family: var(--font-heading);
    font-size: 16px;
    font-weight: 600;
    color: var(--text);
    transition: color 0.2s;

    &:hover { color: var(--accent); }
  }
}

.other-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.other-desc {
  font-size: 13px;
  color: var(--text-2);
  line-height: 1.6;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.other-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;

  span {
    font-size: 11px;
    color: var(--text-3);
  }
}

.card-links {
  display: flex;
  gap: 10px;

  a {
    color: var(--text-3);
    display: flex;
    transition: color 0.2s;
    &:hover { color: var(--accent); }
  }
}
</style>
