import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FeaturesView from '@/views/FeaturesView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),  // Switch to history mode
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/features',
      name: 'features',
      component: FeaturesView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: HomeView,
    },
  ],
})

export default router
