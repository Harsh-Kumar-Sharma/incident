import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/common-section',
      name: 'commonSection',
      component: () => import('../components/common Section/commonSection.vue')
    }
    
  ]
})

export default router
