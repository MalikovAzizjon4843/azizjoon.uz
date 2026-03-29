import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import i18n from '@/i18n'

const VERSION_ROUTES = {
  v1: '/',
  v2: '/v2',
  v3: '/v3',
  v4: '/v4',
  v6: '/v6'
}

const VERSION_LAYOUTS = {
  v1: 'bento',
  v2: 'minimal',
  v3: 'light',
  v4: 'bold',
  v6: 'original'
}

const DEFAULT_THEMES = {
  v1: 'dark',
  v2: 'dark',
  v3: 'light',
  v4: 'dark',
  v6: 'dark'
}

export const useAppStore = defineStore('app', () => {
  const version = ref(localStorage.getItem('version') || 'v1')
  const theme = ref(localStorage.getItem('theme') || null)
  const lang = ref(localStorage.getItem('lang') || 'uz')

  let router = null

  function setRouter(r) {
    router = r
  }

  function setVersion(v) {
    version.value = v
    localStorage.setItem('version', v)
    document.documentElement.setAttribute('data-layout', VERSION_LAYOUTS[v])
    if (!localStorage.getItem('theme')) {
      setTheme(DEFAULT_THEMES[v])
    }
    if (router) {
      router.push(VERSION_ROUTES[v])
    }
  }

  function setTheme(t) {
    theme.value = t
    localStorage.setItem('theme', t)
    document.documentElement.setAttribute('data-theme', t)
    const metaTheme = document.querySelector('meta[name="theme-color"]')
    if (metaTheme) {
      metaTheme.setAttribute('content', t === 'dark' ? '#09090b' : '#fafaf9')
    }
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  function setLang(l) {
    lang.value = l
    localStorage.setItem('lang', l)
    i18n.global.locale.value = l
    document.documentElement.setAttribute('lang', l)
  }

  function init() {
    const savedVersion = localStorage.getItem('version') || 'v1'
    version.value = savedVersion
    document.documentElement.setAttribute('data-layout', VERSION_LAYOUTS[savedVersion])

    const savedLang = localStorage.getItem('lang') || 'uz'
    setLang(savedLang)

    let savedTheme = localStorage.getItem('theme')
    if (!savedTheme) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        savedTheme = 'light'
      } else {
        savedTheme = DEFAULT_THEMES[savedVersion]
      }
    }
    setTheme(savedTheme)
  }

  return {
    version,
    theme,
    lang,
    setRouter,
    setVersion,
    setTheme,
    toggleTheme,
    setLang,
    init,
    VERSION_ROUTES,
    VERSION_LAYOUTS,
    DEFAULT_THEMES
  }
})
