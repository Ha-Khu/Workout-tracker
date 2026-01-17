import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/view/HomeView.vue'
import WorkoutsView from '@/view/WorkoutsView.vue'
import StatsView from '@/view/StatsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/workouts',
    name: 'workouts',
    component: WorkoutsView
  },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
