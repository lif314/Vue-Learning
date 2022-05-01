import Vue from 'vue'
import App from './App.vue'

//  入口文件

Vue.config.productionTip = false

// 使用Vue实例管理App
new Vue({
    el: "#app",  // index.html中容器
    render: h => h(App)
})

/**
 * render函数：模板解释器 (template complier)
 * 
 * 
 */