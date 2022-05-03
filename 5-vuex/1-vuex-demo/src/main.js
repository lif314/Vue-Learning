import Vue from 'vue'
import App from './App.vue'

//  脚手架import语句执行：异步执行
// 扫描import语句同一执行

//引入vuex
// import Vuex from 'vuex'
// Vue.use(Vuex)   // 创建vm时可以配置store，在store之间引入Vuex

// 引入store
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,  // 在vm上配置store
}).$mount('#app')
