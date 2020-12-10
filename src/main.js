/*
 * @Descripttion:
 * @version:
 * @Author: Andy
 * @Date: 2020-05-05 16:24:08
 * @LastEditors: Andy
 * @LastEditTime: 2020-05-07 21:55:47
 */
import Vue from 'vue'
import 'normalize.css/normalize.css'
import './styles/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/styles/font-awesome/css/font-awesome.css'
import '@/permission'

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
