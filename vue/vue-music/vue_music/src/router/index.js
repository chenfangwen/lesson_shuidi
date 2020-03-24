import Vue from 'vue'
import VueRouter from 'vue-router'
// import Recommend from '../views/Recommend.vue'
const Recommend = (resolve) => {
  import('../views/Recommend.vue').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search.vue').then((module) => {
    resolve(module)
  })
}
const Banner = (resolve) => {
  import('../views/Banner.vue').then((module) => {
    resolve(module)
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    children: [
      {
        path: ':id&:type',
        component: Banner,
      }
    ],
    meta: {
      keepAlive: true,
      title: '音乐推荐',
      meta: {
        // keepAlive: true,
        title: '热门音乐'
       }
     }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      keepAlive: true,
      title: '音乐搜索'
     }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
