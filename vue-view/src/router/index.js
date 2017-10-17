import Vue from 'vue'
import Router from 'vue-router'
import Firstpage from '@/views/Firstpage'
import Ask from '@/components/Ask'
import Login from '@/views/Login'
import Write from '@/views/Write'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Firstpage',
      component: Firstpage,
      children:[
        {
        	path: 'ask',
        	component: Ask
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    	path: '/write',
    	name: 'Write',
    	component: Write
    }
  ]
})
