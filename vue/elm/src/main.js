import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './config/rem'
import cfw_ui from 'cfw_ui'
import 'cfw_ui/lib/cfw_ui.css'

Vue.use(cfw_ui)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
