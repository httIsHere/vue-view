import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
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
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
