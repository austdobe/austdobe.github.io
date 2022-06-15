import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: import('@/views/HomePage'),
    },
    {
      path: "/about",
      name: "about",
      component: import("@/views/AboutPage")
    },
  ],
  scrollBehavior: (to, _, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash
      }
    }
    return { left: 0, top: 0 }
  }
})

export default router;
