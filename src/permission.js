/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 21:05:35
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 02:57:17
 */
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

const whiteList = ['/home', '/login/index', '/sign/index']

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  console.log(to.path)
  if (hasToken) {
    if (to.path === '/login/index') {
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login/index?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      console.log(4444)
      next(`/login/index?redirect=${to.path}`)
    }
  }
})
