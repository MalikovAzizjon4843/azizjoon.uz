<template>
  <div id="app">
    <Header :theme="theme" @toggle-theme="toggleTheme" />
    <router-view />
    <Footer />
    <!-- Back to top -->
    <div class="backto-top" @click="scrollToTop" :class="{ show: backToTopVisible }" style="scroll-behavior: smooth">
      <div><i data-feather="arrow-up"></i></div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { ref, onMounted, onUnmounted, watch } from 'vue'

export default {
  name: 'App',
  components: { Header, Footer },
  setup() {
    const backToTopVisible = ref(false)
    const theme = ref('dark')

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleScroll = () => {
      backToTopVisible.value = window.scrollY > 200
    }

    const applyTheme = value => {
      if (typeof document === 'undefined') return
      const body = document.body
      body.classList.remove('template-color-1', 'white-version')
      body.classList.add(value === 'light' ? 'white-version' : 'template-color-1')
      body.classList.add('spybody')
    }

    const toggleTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }

    onMounted(() => {
      const savedTheme = typeof window !== 'undefined'
        ? window.localStorage.getItem('preferred-theme')
        : null
      if (savedTheme === 'light' || savedTheme === 'dark') {
        theme.value = savedTheme
      }

      applyTheme(theme.value)
      if (typeof document !== 'undefined') {
        document.body.setAttribute('data-spy', 'scroll')
        document.body.setAttribute('data-bs-target', '.navbar-example2')
        document.body.setAttribute('data-offset', '150')
      }

      import('feather-icons').then(feather => feather.replace())
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    watch(theme, newTheme => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('preferred-theme', newTheme)
      }
      applyTheme(newTheme)
    })

    return { scrollToTop, backToTopVisible, theme, toggleTheme }
  }
}
</script>
<style>
html {
  scroll-behavior: smooth;
}
.backto-top {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.backto-top.show {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
</style>
