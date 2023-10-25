import Vue from 'vue'
import VueRouter from 'vue-router'
// import Recommend from '../views/Recommend.vue'
const Eye = (resolve) => {
  import('../views/eye.vue').then((module) => {
    resolve(module)
  })
}
const Banner = (resolve) => {
  import('../views/banner.vue').then((module) => {
    resolve(module)
  })
}
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect: '/recommend'
  // },
  {
    path: '/eye',
    name: 'Eye',
    component: Eye,
    meta: {
      keepAlive: true,
      title: '偷瞄',
      deepth: 0.5
     }
  },
  {
    path:'/banner',
    name:'Banner',
    component:Banner,
    meta: {
      keepAlive: true,
      title: '广告',
      deepth: 1
     }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
