import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/Accueil',
    name: 'Accueil',
    component: Accueil
  },

 /*  {
    path: '/Contenuhomepage',
    name: 'Contenuhomepage',
    component: () => import('../bouttons/Boutton4.vue')
  }, */

  {
    path: '/Notreblog',
    name: 'Notreblog',
    // route level code-splitting
    // this generates a separate chunk (Blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue')
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
