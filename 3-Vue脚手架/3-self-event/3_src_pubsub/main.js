import Vue from 'vue'
import App from './App.vue'

// 1、所有组件都可以看到
// window.x = {x:12, y: 232}
// 使用Vue原型(Vue只有一个) vc都可以看见
// VueComponent.prototype.__proto__ = Vue.prototype
// Vue.prototype.x = {x:12, y: 232}

// 2、可以调用$emit $on $off   都在Vue的原型对象上
// Vue.prototype.x = {x:12, y: 232}  // vc vm
// 使用VC
// const Demo = Vue.extend({})  // 生成VueComponent
/* <demo/>  //生成实例对象 */
// const d = new Demo() // d就是vc
// Vue.prototype.x = d


// 使用vm
Vue.config.productionTip = false
// 使用Vue实例管理App
new Vue({
    el: "#app",  // index.html中容器
    render: h => h(App),
    // beforeCreate() {
    //     // 安装全局事件总线  $表示Vue的内部使用
    //     Vue.prototype.$bus = this // 生命周期钩子，给bus上放vm
    // }
})
