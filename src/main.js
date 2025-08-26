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
Vue.use(BootstrapVue)
// import '@/assets/scss/style.scss';

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
