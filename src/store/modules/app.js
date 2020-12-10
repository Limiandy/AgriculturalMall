/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-06 11:38:00
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-08 03:29:59
 */
// import Cookies from 'js-cookie'

const state = {
  devWidth: 375,
  showSearchBar: true
}

const mutations = {
  TOGGLE_DEVWIDTH: (state, width) => {
    state.devWidth = width
  },
  TOGGLE_SHOWSEARCHBAR: (state, bool) => {
    state.showSearchBar = bool
  }
}

const actions = {
  toggleDevWidth({ commit }, width) {
    commit('TOGGLE_DEVWIDTH', width)
  },
  toggleShowSearchBar({ commit }, bool) {
    commit('TOGGLE_SHOWSEARCHBAR', bool)
  }
}

export default {
  namespace: true,
  state,
  mutations,
  actions
}
