<template>
  <aside class="minimal-sidebar">
    <div class="sidebar-top">
      <a href="/v2" class="sidebar-logo">
        Azizjon<span class="dot">.</span>
      </a>

      <nav class="sidebar-nav">
        <a
          v-for="(item, i) in navItems"
          :key="i"
          :href="item.href"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.href)"
        >
          <span class="nav-num mono">0{{ i + 1 }}.</span>
          <span class="nav-label">{{ $t(item.label) }}</span>
        </a>
      </nav>
    </div>

    <div class="sidebar-middle">
      <VersionSwitcher />
      <ThemeToggle />
      <LangSwitcher />
    </div>

    <div class="sidebar-bottom">
      <SocialLinks direction="vertical" />
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SocialLinks from '@/components/shared/SocialLinks.vue'
import VersionSwitcher from '@/components/shared/VersionSwitcher.vue'
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
import LangSwitcher from '@/components/shared/LangSwitcher.vue'

const activeSection = ref('')

const navItems = [
  { href: '#about', label: 'nav.about', id: 'about' },
  { href: '#experience', label: 'nav.experience', id: 'experience' },
  { href: '#projects', label: 'nav.projects', id: 'projects' },
  { href: '#contact', label: 'nav.contact', id: 'contact' }
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

let observer = null

onMounted(() => {
  const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-40% 0px -50% 0px' }
  )
  sections.forEach(s => observer.observe(s))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style lang="scss" scoped>
.minimal-sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  background: var(--bg);
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;

  @media (max-width: 1024px) {
    display: none;
  }
}

.sidebar-logo {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  transition: color 0.25s;

  .dot {
    color: var(--accent);
  }

  &:hover {
    color: var(--accent);
  }
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 40px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  transition: all 0.25s;

  .nav-num {
    font-size: 13px;
    color: var(--accent);
  }

  .nav-label {
    font-size: 13px;
    color: var(--text-2);
    transition: color 0.25s, transform 0.25s;
  }

  &:hover .nav-label,
  &.active .nav-label {
    color: var(--accent);
    transform: translateX(4px);
  }
}

.sidebar-middle {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.sidebar-bottom {
  margin-top: auto;
}
</style>
