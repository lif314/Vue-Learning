import App from './App.vue'

//  入口文件

// 使用Vue实例管理App
new Vue({
    el: "#root",  // index.html中容器
    template: `<App></App>`,
    components:{
        App
    }
})