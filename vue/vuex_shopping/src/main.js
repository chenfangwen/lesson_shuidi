import Vue from 'vue';
import router from './router';
import App from './App.vue'
import './style.css';
import store from './store'

//路由配置

// console.log(router)


// 跳转前设置title
// router.beforeEach((to, from, next) => {
//     window.document.title = to.meta.title;
//     next();
// });
// //跳转后设置scroll为原点
// router.afterEach((to, from, next) => {
//     window.scrollTo(0, 0);
// });

//配置Vuex状态管理

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => {
        return h(App)
    }
})


