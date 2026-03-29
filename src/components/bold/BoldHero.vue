<template>
  <section id="hero" class="bold-hero">
    <div class="terminal-window">
      <div class="terminal-bar">
        <span class="dot red"></span>
        <span class="dot yellow"></span>
        <span class="dot green"></span>
        <span class="terminal-title mono">aziz@portfolio ~ bash</span>
      </div>
      <div class="terminal-body">
        <div class="term-line">
          <span class="prompt mono text-accent">$</span>
          <span class="mono typed" ref="cmd1"></span>
        </div>
        <div class="term-output" v-show="showName">
          <h1>{{ portfolioData.personal.name.toUpperCase() }} {{ portfolioData.personal.surname.toUpperCase() }}</h1>
        </div>
        <div class="term-line" v-show="showCmd2">
          <span class="prompt mono text-accent">$</span>
          <span class="mono typed" ref="cmd2"></span>
        </div>
        <div class="term-output" v-show="showRole">
          <p class="role-text text-accent">{{ $t('hero.title') }}</p>
        </div>
        <div class="term-line" v-show="showCmd3">
          <span class="prompt mono text-accent">$</span>
          <span class="mono typed" ref="cmd3"></span>
        </div>
        <div class="term-output" v-show="showBio">
          <p>{{ $t('hero.bio') }}</p>
        </div>
        <div class="term-line" v-show="showCursor">
          <span class="prompt mono text-accent">$</span>
          <span class="cursor-blink"></span>
        </div>
      </div>
    </div>

    <div class="hero-actions" v-show="showCursor">
      <a href="#projects" class="btn-bold mono" @click.prevent="scrollTo('#projects')">[{{ $t('hero.cta_projects').toUpperCase() }}]</a>
      <a href="#contact" class="btn-bold-outline mono" @click.prevent="scrollTo('#contact')">[{{ $t('hero.cta_contact').toUpperCase() }}]</a>
      <a :href="portfolioData.personal.resumePath" download class="btn-bold-outline mono">[{{ $t('resume.download').toUpperCase() }}]</a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { portfolioData } from '@/data/portfolio'

const cmd1 = ref(null)
const cmd2 = ref(null)
const cmd3 = ref(null)
const showName = ref(false)
const showCmd2 = ref(false)
const showRole = ref(false)
const showCmd3 = ref(false)
const showBio = ref(false)
const showCursor = ref(false)

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

async function typeWriter(el, text, speed = 60) {
  if (!el) return
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i]
    await new Promise(r => setTimeout(r, speed))
  }
}

async function wait(ms) {
  return new Promise(r => setTimeout(r, ms))
}

onMounted(async () => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReduced) {
    if (cmd1.value) cmd1.value.textContent = 'whoami'
    showName.value = true
    showCmd2.value = true
    if (cmd2.value) cmd2.value.textContent = 'cat role.txt'
    showRole.value = true
    showCmd3.value = true
    if (cmd3.value) cmd3.value.textContent = 'cat bio.txt'
    showBio.value = true
    showCursor.value = true
    return
  }

  await typeWriter(cmd1.value, 'whoami')
  await wait(300)
  showName.value = true

  await wait(500)
  showCmd2.value = true
  await typeWriter(cmd2.value, 'cat role.txt')
  await wait(300)
  showRole.value = true

  await wait(500)
  showCmd3.value = true
  await typeWriter(cmd3.value, 'cat bio.txt')
  await wait(300)
  showBio.value = true

  await wait(300)
  showCursor.value = true
})
</script>

<style lang="scss" scoped>
.bold-hero {
  padding: 80px 0 60px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.terminal-window {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  max-width: 700px;
}

.terminal-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background-color: var(--bg-tertiary);

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    &.red { background-color: #ff5f57; }
    &.yellow { background-color: #febc2e; }
    &.green { background-color: #28c840; }
  }

  .terminal-title {
    font-size: 11px;
    color: var(--text-3);
    margin-left: 8px;
  }
}

.terminal-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: var(--font-mono);
}

.term-line {
  display: flex;
  align-items: center;
  gap: 10px;

  .mono, .typed {
    font-size: 13px;
    color: var(--text-3);
  }
}

.term-output {
  padding-left: 24px;
  margin-bottom: 8px;

  h1 {
    font-family: var(--font-heading);
    font-size: 48px;
    font-weight: 800;
    line-height: 1.1;
    text-transform: uppercase;
    letter-spacing: -1.5px;
    color: var(--text);

    @media (max-width: 767px) {
      font-size: 32px;
      letter-spacing: -1px;
    }
  }

  .role-text {
    font-family: var(--font-heading);
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
    color: var(--text-2);
    line-height: 1.7;
    max-width: 600px;
  }
}

.cursor-blink {
  display: inline-block;
  width: 8px;
  height: 16px;
  background-color: var(--accent);
  animation: blink 1s step-end infinite;
}

.hero-actions {
  display: flex;
  gap: 10px;
  margin-top: 24px;
  flex-wrap: wrap;
}

.btn-bold {
  padding: 10px 20px;
  background-color: var(--accent);
  color: var(--bg);
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  text-transform: uppercase;
  transition: opacity 0.15s;

  &:hover { opacity: 0.9; }
}

.btn-bold-outline {
  padding: 10px 20px;
  border: 1px solid var(--accent);
  color: var(--accent);
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  text-transform: uppercase;
  transition: all 0.15s;

  &:hover {
    background-color: var(--accent);
    color: var(--bg);
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
