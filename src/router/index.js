import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  // 启动页
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // 隐私协议页
  {
    path: '/privacy',
    name: 'privacy',
    component: function () {
      return import( '../views/privacy.vue')
    }
  },
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import( '../views/login.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
