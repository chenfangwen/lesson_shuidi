import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Tag from '../views/Tag.vue'
import About from '../views/About.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:'/main',   //列表页
    name:'main',
    component:Main
  },
  {
    path:'/article/:id',  //文章
    name:'article',
    component:Article
  },
  { 
    path:'/tag',  //分类下有多少文章
    name:'tag',
    component:Tag
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
