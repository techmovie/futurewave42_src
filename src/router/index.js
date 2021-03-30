import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/recommendation",
    name: "/Recommendation",
    component: () => import("../views/Recommendation.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/recommendation/:id",
    name: "BookDetail",
    component: () => import("../components/BookDetail.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router