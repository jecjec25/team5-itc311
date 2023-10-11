import { createRouter, createWebHistory } from 'vue-router'
import Manage from '../views/ManageView.vue'

const routes = [
  {
    path: '/',
    name: 'manage',
    component: Manage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/hellow',
    name: 'app',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/app.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),routes
})

export default router
