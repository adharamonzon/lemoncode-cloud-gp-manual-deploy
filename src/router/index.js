import { createRouter, createWebHistory } from 'vue-router';
import LandingComponent from '@/views/LandingComponent.vue';
const routes = [
  { 
    ath: '/',
    name: 'Landing',
    component: LandingComponent
  },
  { path: '/aboutMeDetail',
    name: 'aboutMeDetail',
    component: () => import('../views/AboutMeDetail.vue')
  },
  { 
    path: '/projects',
    name: 'Projects',
    hash: '#project',
    component: () => import('../views/ProjectsComponent.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, top: 50}
    } else {
      return savedPosition || { top: 0}
    }
    //return { top: null, left: null, behavior: null}
  },
  linkActiveClass: 'link-active-link'
})

export default router;