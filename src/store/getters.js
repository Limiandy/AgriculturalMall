/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 11:37:53
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 02:28:55
 */
const getters = {
  devWidth: state => state.app.devWidth,
  token: state => state.user.token,
  name: state => state.user.name
}

export default getters
