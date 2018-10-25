import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import login from '@/page/login/index'
import register from '@/page/login/register'
//import hello from '@/page/hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
//  {
//    path: '/',
//    name: 'index',
//    component: index,
//  },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    }
  ]
})
