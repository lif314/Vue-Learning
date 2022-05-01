import Vue from 'vue'
import App from './App.vue'

//  入口文件

/**
关于不同版本的vue:
1.vue.js与vue,runtime.xxx.js的l区别：
    (1),vue,js是完整版Vue,包含：核心功能+模板解析器。
    (2),vue,runtime,xxX.js是运行版的Vue,只包含：核心功能：没有模板解析器。
2.因为vue,runtime,xxx,js没有模板解析器，所以不能使用template配置项，需要使用
    render函数接收到的createElement函去指定具体内容。
 */

Vue.config.productionTip = false

// 使用Vue实例管理App
new Vue({
    el: "#app",  // index.html中容器
    render: h => h(App)
    // render(a){
    //     // console.log(typedef a)
    //     return this.$createElement('h1', '你好！');
    // }
})

/**
 * render函数：模板解析器 (template complier)
 *    - 箭头函数
 * 
 * 
 * 导出默认配置 vue inspect > output.js
 */