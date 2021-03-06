import Vue from 'vue'
import App from './App.vue'
// 引入插件
import vueResource from 'vue-resource'
// 使用插件
Vue.use(vueResource)  // 绑定在vm和vc上

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate(){
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
