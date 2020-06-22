import Vue from 'vue'
import Router from 'vue-router'
import BookShow from '@/views/BookShow'
import Login from '@/views/Login'
import Records from '@/views/Records'
import User from '@/views/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'Login',
      component: Login
    },
    {
      path: '/bookshow',
      name: 'BookShow',
      component: BookShow
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
