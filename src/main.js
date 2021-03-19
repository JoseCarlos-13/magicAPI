// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '../src/App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

export const MTG = axios.create({
  baseURL: 'https://api.scryfall.com/'
})

MTG.interceptors.request.use(request => {
  return request
}, (error) => {
  return Promise.reject(error)
})

MTG.interceptors.response.use(response => {
  console.log(response)
  return response
}, (error) => {
  return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
