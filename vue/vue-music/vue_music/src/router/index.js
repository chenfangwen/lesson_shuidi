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
const Rank = (resolve) => {
  import('../views/Rank.vue').then((module) => {
    resolve(module)
  })
}
const Singers = (resolve) => {
  import('../views/Singers.vue').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('../views/Singer.vue').then((module) => {
    resolve(module)
  })
}
const SingerTopList = (resolve) => {
  import('../views/SingerTopList.vue').then((module) => {
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
    path:'/banner/:id&:type',
    name:'Banner',
    component:Banner,
    meta: {
      // keepAlive: true,
      title: '热门音乐'
     }
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    meta: {
      keepAlive: true,
      title: '音乐推荐'
     }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      keepAlive: true,
      title: '音乐搜索'
     }
  },
  {
    path: '/rank',
    component: Rank,
    meta: {
      keepAlive: true,
      title: '音乐排行'
     }
  },
  {
    path: '/singers',
    component: Singers,
    meta: {
      keepAlive: true,
      title: '歌手排行'
    }
  },
  {
    path: '/singer/:id',
    component: Singer,
    meta: {
      keepAlive: true,
      title: '歌手详情'
    }
  },
  {
    path: '/singerTopList',
    component: SingerTopList,
    meta: {
      keepAlive: true,
      title: '歌手榜'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
