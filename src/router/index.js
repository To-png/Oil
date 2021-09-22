import Vue from 'vue'
import VueRouter from 'vue-router'
import Lines from '../views/Lines.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Lines',
    component: Lines
  },
  {
    path: '/settings',
    name: 'Settings',    
    component: () => import('../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
