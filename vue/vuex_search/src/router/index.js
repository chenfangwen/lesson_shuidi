import vue from "vue"
import vueRouter from "vue-router"
import Index from '../views/Index.vue'
import Home from '../views/Home.vue'
import Goods from '../views/Goods.vue'
vue.use(vueRouter)

const routes = [
    {
        path:'/',
        name:'index',
        // redirect:'/home',
        component:Index,
        children:[
            {
                path:'goods',
                // component:() => import('../views/Goods.vue')
                component:Goods
            },
            {
                path:'home',
                // component:() => import('../views/Goods.vue')
                component:Home
            }
        ]
    }
]

const router = new vueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router