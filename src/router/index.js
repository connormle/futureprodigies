import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Private from '../views/Private.vue'
import Group from '../views/Group.vue'
import Counseling from '../views/Counseling.vue'
import Homework from '../views/Homework.vue'
import NotFound from '../views/NotFound.vue'
import Faq from '../views/Faq.vue'
import SAT from '../views/SAT.vue'
import AP from '../views/AP.vue'
import Packages from '../views/Packages.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/privatetutoring',
      name: 'private',
      component: Private
    },
    {
      path: '/grouptutoring',
      name: 'group',
      component: Group
    },
    {
      path: '/counseling',
      name: 'counseling',
      component: Counseling
    },
    {
      path: '/homework',
      name: 'homework',
      component: Homework
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/sat',
      name: 'SAT',
      component: SAT
    },
    {
      path: '/ap',
      name: 'AP',
      component: AP
    },
    {
      path: '/packages',
      name: 'Packages',
      component: Packages
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ,],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
