import Vue from 'vue'
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 使用Vue实例管理App
new Vue({
    el: "#app",  // index.html中容器
    render: h => h(App)
})
