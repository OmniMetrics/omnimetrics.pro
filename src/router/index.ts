import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },

    { path: '/solutions', name: 'solutions', component: () => import('@/views/SolutionsView.vue') },
    {
      path: '/solutions/coach',
      name: 'solutions-coach',
      component: () => import('@/views/SolutionCoachView.vue'),
    },
    {
      path: '/solutions/broadcast',
      name: 'solutions-broadcast',
      component: () => import('@/views/SolutionBroadcastView.vue'),
    },

    { path: '/company', name: 'company', component: () => import('@/views/CompanyView.vue') },

    { path: '/:catchAll(.*)', name: 'not-found', component: () => import('@/views/NotFoundView.vue') },
  ],
})

export default router
