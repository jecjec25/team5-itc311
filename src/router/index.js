import { createRouter, createWebHistory } from 'vue-router'
import name from '../views/MyName.vue'

const routes = [
  {
    path: '/',
    name: 'myname',
    component: name
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
  {
    path: '/Manage',
    name: 'Manage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Manage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),routes
})

export default router
