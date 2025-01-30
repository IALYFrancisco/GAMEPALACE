import HomeVue from '@/components/Home.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginOrRegisterView from '@/views/LoginOrRegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue')
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView
    },
    {
      path: "/login-or-register",
      name: "login-or-register",
      component: LoginOrRegisterView
    }
 
  ]
})

export default router
