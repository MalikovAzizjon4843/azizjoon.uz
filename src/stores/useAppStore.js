import { defineStore } from 'pinia'
import { ref } from 'vue'
import i18n from '@/i18n'

export const LANGS = ['uz', 'ru', 'en']
const THEME_COLORS = { dark: '#051421', light: '#DCEBF2' }
// Keys written by the removed multi-version layout system.
const LEGACY_KEYS = ['version']

function read(key) {
  try { return localStorage.getItem(key) } catch { return null }
}

function write(key, value) {
  try { localStorage.setItem(key, value) } catch { /* storage unavailable */ }
}

export const useAppStore = defineStore('app', () => {
  const theme = ref('dark')
  const lang = ref('uz')

  function setTheme(t) {
    theme.value = t
    write('theme', t)
    document.documentElement.setAttribute('data-theme', t)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLORS[t])
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  function setLang(l) {
    lang.value = l
    write('lang', l)
    i18n.global.locale.value = l
    document.documentElement.setAttribute('lang', l)
    document.title = i18n.global.t('meta.title')
    document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.global.t('meta.description'))
  }

  function init() {
    try { LEGACY_KEYS.forEach((k) => localStorage.removeItem(k)) } catch { /* ignore */ }

    const savedLang = read('lang')
    setLang(LANGS.includes(savedLang) ? savedLang : 'uz')

    const savedTheme = read('theme')
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark')
  }

  return { theme, lang, setTheme, toggleTheme, setLang, init }
})
