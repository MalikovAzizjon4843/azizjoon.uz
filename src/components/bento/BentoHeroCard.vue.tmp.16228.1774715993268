<template>
  <div id="hero" class="bento-hero-card">
    <div class="terminal-line">
      <span class="prompt mono">$</span>
      <span class="mono cmd">{{ displayText }}<span class="cursor-blink">|</span></span>
    </div>

    <div v-if="isComplete" class="hero-content animate-fade-in">
      <p class="hero-greeting">{{ $t('hero.greeting') }}</p>
      <h1 class="hero-name">{{ portfolioData.personal.name }} {{ portfolioData.personal.surname }}</h1>
      <p class="hero-title mono">{{ $t('hero.title') }}</p>
      <p class="hero-bio">{{ $t('hero.bio') }}</p>

      <div class="hero-actions">
        <a href="#projects" class="btn-primary mono">{{ $t('hero.cta_projects') }} &rarr;</a>
        <a
          :href="portfolioData.personal.social.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost mono"
        >
          github &nearr;
        </a>
        <a
          :href="portfolioData.personal.resumePath"
          download
          class="btn-ghost mono"
        >
          resume &darr;
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { portfolioData } from '@/data/portfolio'
import { useTypewriter } from '@/composables/useTypewriter'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { displayText, isComplete } = useTypewriter(t('hero.terminal_cmd'))
</script>

<style lang="scss" scoped>
.bento-hero-card {
  grid-column: 1 / 6;
  grid-row: 1 / 3;
  background-color: var(--card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
  }

  @media (max-width: 767px) {
    grid-column: 1 / -1;
    grid-row: auto;
  }
}

.terminal-line {
  display: flex;
  gap: 8px;
  align-items: center;

  .prompt {
    font-size: 12px;
    color: var(--accent);
  }

  .cmd {
    font-size: 12px;
    color: var(--text-2);
  }
}

.hero-greeting {
  font-size: 13px;
  color: var(--text-2);
}

.hero-name {
  font-family: var(--font-heading);
  font-size: 32px;
  font-weight: 700;
  color: var(--text);
  line-height: 1.1;
  letter-spacing: -1px;
}

.hero-title {
  font-size: 13px;
  color: var(--accent);
  margin-top: 2px;
}

.hero-bio {
  font-size: 13px;
  color: var(--text-2);
  line-height: 1.6;
  max-width: 380px;
  margin-top: 4px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  background-color: var(--accent);
  color: var(--bg);
  transition: opacity 0.2s, transform 0.2s;

  &:hover {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 11px;
  border: 1px solid var(--text-dim);
  color: var(--text-2);
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
}
</style>
