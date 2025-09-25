import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/style.css';
import '@/assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import i18n from './i18n'
import BaseImage from './components/BaseImage.vue'
import { setMeta, sendPageView } from './utils/meta'

Vue.use(BootstrapVue)
Vue.component('BaseImage', BaseImage)
// import '@/assets/scss/style.scss';

Vue.config.productionTip = false

if (typeof window !== 'undefined') {
  try {
    const supportedLocales = Object.keys(i18n.messages || {})
    const params = new URLSearchParams(window.location.search)
    const queryLocale = params.get('lang')
    const storedLocale = window.localStorage.getItem('preferred-locale')
    const initialLocale = supportedLocales.includes(queryLocale)
      ? queryLocale
      : supportedLocales.includes(storedLocale)
        ? storedLocale
        : i18n.locale

    if (initialLocale && initialLocale !== i18n.locale) {
      i18n.locale = initialLocale
    }
  } catch (error) {
    // Gracefully ignore locale bootstrap errors
  }
}

router.afterEach((to) => {
  const resolvedMeta = setMeta(to.meta)
  sendPageView(to, resolvedMeta)
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')

setMeta(router.currentRoute.meta)
