<template>
  <div id="projects" class="bento-projects-section">
    <div
      v-for="(project, i) in portfolioData.projects"
      :key="i"
      class="project-card"
      :class="[project.featured ? 'featured' : 'other']"
    >
      <div class="project-top">
        <span class="project-status mono" :class="project.status">// {{ project.status }}</span>
        <div class="project-links">
          <a
            v-if="project.links.github"
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            v-if="project.links.live"
            :href="project.links.live"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="project-type-row">
        <span class="project-type">{{ project.type }}</span>
      </div>

      <h4 class="project-name">{{ project.name }}</h4>
      <p class="project-desc">{{ $t(project.i18nDesc) }}</p>

      <div class="project-tech">
        <span v-for="tech in project.tech" :key="tech" class="tech-chip mono">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
</script>

<style lang="scss" scoped>
.bento-projects-section {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.project-card {
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }
}

.project-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-status {
  font-size: 8px;
  color: var(--text-3);
  opacity: 0.7;

  &.production { color: var(--accent); }
  &.live { color: var(--accent); }
}

.project-links {
  display: flex;
  gap: 8px;

  a {
    color: var(--text-3);
    transition: color 0.2s;
    display: flex;
    &:hover { color: var(--accent); }
  }
}

.project-type-row {
  .project-type {
    font-size: 8px;
    color: var(--text-3);
  }
}

.project-name {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.3px;
}

.project-desc {
  font-size: 10px;
  color: var(--text-3);
  line-height: 1.5;
  flex: 1;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 3px;
  margin-top: 4px;
}

.tech-chip {
  font-size: 8px;
  padding: 2px 6px;
  border-radius: 2px;
  background-color: var(--text-dim);
  color: var(--text-2);
}
</style>
