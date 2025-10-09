import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        title: 'About',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/my',
      name: '/My view',
      component: () => import('@/views/MyView.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/NoShow.vue'),
      meta: {
        title: '404 not found',
      },
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/views/UsersView.vue'),
    },
    {
      path: '/user/:id',
      name: 'User view',
      component: () => import('@/views/SingelUserView.vue'),
      props: true,
    },
  ],
})
router.beforeEach((to) => {
  document.title = to.meta?.title ?? to.name
})
export default router
