// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.prototype.axios = axios
Vue.config.productionTip = false

axios.defaults.timeout = 5000
const baseURL = 'http://localhost:3001/api'
axios.defaults.baseURL = baseURL
axios.defaults.baseURL = baseURL

// http response interceptors
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response) {
//       console.log(error.response.status)
//     }
//     return Promise.reject(error.response.data)
//   })

// http request interceptors
// axios.interceptors.request.use(
//   config => {
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
