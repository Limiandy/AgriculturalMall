/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-07 23:34:40
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 23:34:40
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}
