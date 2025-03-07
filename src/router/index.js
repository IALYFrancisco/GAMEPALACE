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
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '',
          name: 'Games',
          component: () => import('@/components/Dashboard/GamesComponent.vue')
        },
        {
          path: 'user',
          name: 'Users',
          component: () => import('@/components/Dashboard/UsersComponent.vue')
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('@/components/Dashboard/SettingsComponent.vue')
        }
      ]
    },
    {
      path: '/login-or-register',
      name: 'Login-or-register',
      component: () => import('../views/LoginOrRegisterView.vue')
    },
    {
      path: '/game/:id',
      name: 'Detailsgame',
      component: () => import('../views/DetailsGameView.vue')
    }
  ]
})

export default router
