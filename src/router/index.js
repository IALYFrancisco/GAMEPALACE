import DashboardView from '@/views/DashboardView.vue'
import LoginOrRegisterView from '@/views/LoginOrRegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardView
    },
    {
      path: "/login-or-register",
      name: "Login-or-register",
      component: LoginOrRegisterView
    }
 
  ]
})

export default router
