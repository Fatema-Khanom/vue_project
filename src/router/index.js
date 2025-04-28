import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import UserRoutes from './portal/user'

const routes = [
  ...UserRoutes,
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
  })

export default router
