import Vue from 'vue'
import Router from 'vue-router'
import World from '@/components/World'
import Login from '@/views/Login'

// const Login = () => import('../view/Login.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'World',
      component: World
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
