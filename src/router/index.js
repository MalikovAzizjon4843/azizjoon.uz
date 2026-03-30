import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'bento',
    component: () => import('@/layouts/BentoLayout.vue'),
    meta: { version: 'v1' }
  },
  {
    path: '/v2',
    name: 'minimal',
    component: () => import('@/layouts/MinimalLayout.vue'),
    meta: { version: 'v2' }
  },
  {
    path: '/v3',
    name: 'light',
    component: () => import('@/layouts/LightLayout.vue'),
    meta: { version: 'v3' }
  },
  {
    path: '/v4',
    name: 'bold',
    component: () => import('@/layouts/BoldLayout.vue'),
    meta: { version: 'v4' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
