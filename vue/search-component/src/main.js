import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview'; //UI组件库 70%常用 成熟的UI框架
import 'iview/dist/styles/iview.css'; 

Vue.use(iView); //iview 组件全局都可访问
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
