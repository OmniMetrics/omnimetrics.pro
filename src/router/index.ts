import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import FeaturesView from '@/views/FeaturesView.vue'
import UniverseView from '@/views/UniverseView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    // {
    //   path: '/universe',
    //   name: 'universe',
    //   component: UniverseView,
    // },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: HomeView,
    },
  ],
})

export default router
