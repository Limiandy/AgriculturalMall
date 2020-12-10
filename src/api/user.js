/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 21:33:08
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 08:31:07
 */
import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function signup(data) {
  return request({
    url: '/vue-admin-template/user/signup',
    method: 'post',
    data
  })
}
