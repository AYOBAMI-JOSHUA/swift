import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../store/storage'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/auth',
    name: 'Auth', 
    component: () => import('../views/Auth.vue'),
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next('/dashboard')
      } else {
        next()
      }
    }
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/auth/signup', 
    name: 'Signup',
    component: () => import('../views/Auth.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/auth/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('../views/Ticket.vue'),
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) {
        next('/auth/login')
      } else {
        next()
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router