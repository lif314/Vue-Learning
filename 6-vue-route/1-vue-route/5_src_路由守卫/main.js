import Vue from 'vue'
import App from './App.vue'

// 引入Router
import router from './router'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂在路由
  router: router
}).$mount('#app')
