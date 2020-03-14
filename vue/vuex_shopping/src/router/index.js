import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//商品列表路由配置
const routers = [
    {
        path: '/list',
        meta: {
            title: '商品列表'
        },
        component: () => import('../views/list.vue')
    },
    {
        path: '/product/:id',
        meta: {
            title: '商品详情'
        },
        component:() => import('../views/product.vue')
    },
    {
        path: '/cart',
        meta: {
            title: '购物车'
        },
        component: () => import('../views/cart.vue')
    },
    {
        path: '/login/:loginStatus',
        meta: {
            title: '登录注册'
        },
        component: () => import('../views/login.vue')
    },
    {
        path: '*',
        redirect: '/login/login'
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routers
})
  
export default router
  