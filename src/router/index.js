/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-05 20:01:08
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 02:47:19
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Login',
        component: () => import('@/views/login/index')
      }
    ]
  },
  {
    path: '/sign',
    component: Layout,
    children: [{
      path: 'index',
      name: 'SignUp',
      component: () => import('@/views/signup/index')
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index')
    }]
  },
  {
    path: '/shoppingcart',
    component: Layout,
    children: [{
      path: 'index',
      name: 'ShoppingCart',
      component: () => import('@/views/shoppingcart/index')
    }]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Order',
        component: () => import('@/views/order/index')
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [{
      path: 'index',
      name: 'User',
      component: () => import('@/views/user/index')
    }]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // required service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
