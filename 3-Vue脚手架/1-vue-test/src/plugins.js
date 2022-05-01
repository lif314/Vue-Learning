// 插件 本质就是一个对象 install方法
// 使用插件进行增强
export default {
    install(Vue){
        console.log("@@@install", Vue)

        //  全局过滤器  name, function
        // 可以在{{}}中使用，以及v-bind中 :x='mam121 | myslice '
        Vue.filter('myslice', function(value){
            return  value.slice(0,4)
        })


        //插件可以在Vue上添加各种东西
        Vue.prototype.hello  = ()=>{alert("hello")}

    }
}