// 插件 本质就是一个对象 install方法
// 使用插件进行增强
export default {
    // 参数就是Vue,在main.js中使用Vue进行调用
    install(Vue){
        console.log("@@@install", Vue)

        //  全局过滤器  name, function
        // 可以在{{}}中使用，以及v-bind中 :x='mam121 | myslice '
        Vue.filter('myslice', function(value){
            return  value.slice(0,4)
        })

        // 全局的自定义指令
        // Vue.directive('fbind', {

        // })

        // 在Vue上可以添加任何合法的属性和方法

        //插件可以在Vue上添加各种东西（vm和vc都可以使用）
        Vue.prototype.hello  = ()=>{alert("hello")}

    }
}