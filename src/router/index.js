import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: { title: 'Accueil' }
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
          component: () => import('@/components/Dashboard/SettingsComponent.vue'),
        }
      ],
      meta: {title: 'Dashboard', requiresAuth: true}
    },
    {
      path: '/login-or-register',
      name: 'Login-or-register',
      component: () => import('../views/LoginOrRegisterView.vue'),
      meta: {title: 'Authentification'}
    },
    {
      path: '/game/:_id',
      name: 'Details-game',
      component: () => import('../views/DetailsGameView.vue'),
      meta: {title: 'Détails'}
    }
  ]
})

export default router