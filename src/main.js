import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import {store} from './store/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
