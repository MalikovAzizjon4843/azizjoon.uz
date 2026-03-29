<template>
  <div class="original-layout">
    <header class="original-placeholder__header">
      <div class="container original-placeholder__header-inner">
        <span class="mono logo">~/aziz.dev</span>
        <div class="controls">
          <LangSwitcher />
          <ThemeToggle />
          <VersionSwitcher />
        </div>
      </div>
    </header>

    <main class="original-placeholder">
      <div class="container original-placeholder__content">
        <h1>Original <span class="text-accent">v6</span></h1>
        <p class="subtitle">Bu versiya hozirgi azizjoon.uz dizayni asosida yaratiladi.</p>
        <p class="note mono">Tez kunda qaytariladi</p>

        <div class="version-links">
          <button
            v-for="v in ['v1', 'v2', 'v3', 'v4']"
            :key="v"
            class="version-link mono"
            @click="store.setVersion(v)"
          >
            {{ v }} &rarr;
          </button>
        </div>
      </div>
    </main>

    <footer class="original-placeholder__footer">
      <div class="container">
        <SocialLinks />
        <p class="mono">&copy; {{ new Date().getFullYear() }} Azizjon Malikov</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/useAppStore'
import LangSwitcher from '@/components/shared/LangSwitcher.vue'
import ThemeToggle from '@/components/shared/ThemeToggle.vue'
import VersionSwitcher from '@/components/shared/VersionSwitcher.vue'
import SocialLinks from '@/components/shared/SocialLinks.vue'

const store = useAppStore()

onMounted(() => {
  document.documentElement.setAttribute('data-layout', 'original')
})
</script>

<style lang="scss" scoped>
.original-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.original-placeholder__header {
  border-bottom: 1px solid var(--border);

  &-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
  }

  .logo {
    font-size: 15px;
    color: var(--accent);
  }

  .controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.original-placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    text-align: center;

    h1 {
      font-family: var(--font-heading);
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      margin-bottom: 16px;
    }

    .subtitle {
      font-size: 16px;
      color: var(--text-2);
      max-width: 400px;
      margin: 0 auto;
    }

    .note {
      font-size: 13px;
      color: var(--accent);
      margin-top: 12px;
    }
  }
}

.version-links {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
}

.version-link {
  padding: 8px 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 12px;
  color: var(--text-2);
  transition: all 0.2s;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
}

.original-placeholder__footer {
  border-top: 1px solid var(--border);
  padding: 20px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  p {
    font-size: 11px;
    color: var(--text-3);
  }
}
</style>
