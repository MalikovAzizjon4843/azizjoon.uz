import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/projects/:slug',
    name: 'project',
    component: () => import('@/views/ProjectView.vue'),
    props: true
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches
      // Wait a tick when coming from another page so the section is rendered.
      const delay = to.path === from.path ? 0 : 50
      return new Promise((resolve) => {
        setTimeout(() => resolve({ el: to.hash, top: 90, behavior: smooth ? 'smooth' : 'auto' }), delay)
      })
    }
    return { top: 0 }
  }
})

export default router
