import Vue from 'vue'
import Router from 'vue-router'
import Firstpage from '@/components/Firstpage'
import Login from '@/views/Login'

// const Login = () => import('../view/Login.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Firstpage',
      component: Firstpage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
