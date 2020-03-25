import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
// import { Swipe, SwipeItem } from 'vant';
import 'vant/lib/index.css'
// import { Grid, GridItem } from 'vant';
Vue.use(vant)
// Vue.use(Grid);
// Vue.use(GridItem);

// Vue.use(Swipe);
// Vue.use(SwipeItem);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
