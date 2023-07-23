import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Private from '../views/Private.vue'
import Group from '../views/Group.vue'
import Counseling from '../views/Counseling.vue'
import Homework from '../views/Homework.vue'
import NotFound from '../views/NotFound.vue'
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
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ,],
  scrollBehavior(to, from, savedPosition) {
    // If navigating back, restore the savedPosition (scroll position) if available
    // Otherwise, scroll to the top of the new page
    return { top: 0 };
  },
})

export default router
