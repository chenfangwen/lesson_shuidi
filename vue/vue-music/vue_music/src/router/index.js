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
const Videos = (resolve) => {
  import('../views/Videos.vue').then((module) => {
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
const MvDetial = (resolve) => {
  import('../views/MvDetial.vue').then((module) => {
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
    meta: {
      keepAlive: true,
      title: '音乐推荐',
      deepth: 0.5
     }
  },
  {
    path:'/banner/:id&:type',
    name:'Banner',
    component:Banner,
    meta: {
      keepAlive: true,
      title: '热门音乐',
      deepth: 1
     }
  },
  {
    path: '/search',
    name:'Search',
    component: Search,
    meta: {
      keepAlive: true,
      title: '音乐搜索',
      deepth: 1
     }
  },
  {
    path: '/rank',
    name:'Rank',
    component: Rank,
    meta: {
      keepAlive: true,
      title: '音乐排行',
      deepth:0.5
     }
  },
  {
    path: '/videos',
    name:'Videos',
    component: Videos,
    meta: {
      keepAlive: false,
      title: '歌手排行'
    }
  },
  {
    path: '/singer/:id',
    name:'Singer',
    component: Singer,
    meta: {
      keepAlive: true,
      title: '歌手详情',
      deepth: 2
    }
  },
  {
    path: '/singerTopList',
    name:'SingerTopList',
    component: SingerTopList,
    meta: {
      keepAlive: false,
      title: '歌手榜'
    }
  },
  {
    path: '/mvdetial/:id',
    name:'MvDetial',
    component: MvDetial,
    meta: {
      keepAlive: false,
      title: 'mv',
      deepth: 3
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
