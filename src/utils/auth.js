/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 21:08:06
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 21:56:44
 */
import Cookies from 'js-cookie'

const TokenKey = 'admin_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
