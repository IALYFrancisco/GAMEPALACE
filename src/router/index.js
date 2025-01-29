import HomeVue from '@/components/Home.vue'
import DashboardView from '@/views/DashboardView.vue'
import signin_signup_pageVue from '@/views/signin_signup_page.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeVue
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView
    },
    {
      path: "/signin_signup_page",
      name: "signin_signup_page",
      component: signin_signup_pageVue
    }
 
  ]
})

export default router
