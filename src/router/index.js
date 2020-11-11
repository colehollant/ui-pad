import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    redirect: '/playground'
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: () => import('../views/Home.vue')
  // },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import('../views/Playground.vue')
  },
  {
    path: '/playground/:code',
    name: 'PlaygroundCode',
    component: () => import('../views/Playground.vue')
  },
  {
    path: '/playground/preview',
    name: 'PlaygroundPreview',
    component: () => import('../views/Playground.vue')
  },
  {
    path: '/playground/preview/:code',
    name: 'PlaygroundPreviewCode',
    component: () => import('../views/Playground.vue')
  },
  {
    path: '*',
    redirect: '/playground'
  }
]

const router = new VueRouter({
  // mode: 'hash',
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
