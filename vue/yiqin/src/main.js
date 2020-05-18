import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import View from './views/View.vue'
const routes=[
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About', //名字
    component:About
  },
  {
    path:'/*',   /*  *匹配所有 */
    name:'view',
    component:View
  }
]

Vue.use(VueRouter) //单页面路由改变
const router = new VueRouter({
  mode:'hash',
  base:process.env.BASE_URl,
  routes
});

Vue.config.productionTip = false

//入口
new Vue({
  router,   //路由对象
  render: h => h(App)
}).$mount('#app')
