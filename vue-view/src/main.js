// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import $ from 'jquery'
import bootstrap from 'bootstrap'
import store from './store'

Vue.prototype.axios = axios
Vue.config.productionTip = false

axios.defaults.timeout = 5000
const baseURL = 'http://localhost:3001/api'
axios.defaults.baseURL = baseURL
axios.defaults.baseURL = baseURL
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
