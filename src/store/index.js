/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 11:37:43
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 02:35:58
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})

export default store
