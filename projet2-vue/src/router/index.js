import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Notreblog',
    name: 'Notreblog',
    // route level code-splitting
    // this generates a separate chunk (Blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue')
  },
  {
    path: '/Boutton4',
    name: 'Boutton4',
    component: Accueil
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
