// 该文件用于创建vuex中最为核心的store
// [vuex] must call Vue.use(Vuex) before creating a store instance.
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// 应用vuex插件
Vue.use(Vuex)

// 准备store

// 准备action -- 用于响应组件中的动作
// 在这里处理业务逻辑
const actions = {
    // jia: function(){
    //     console.log('actions中的jia被调用了')
    // }
    jia(context,value){
        // miniStore: context上下文对象commit
        // console.log('actions中的jia被调用了',context, value)
        // 一般采用大写
        context.commit('JIA', value)
    },
    jian(context, value){
        context.commit('JIAN', value)
    },
    jiaodd(context, value){
        if(context.state.sum % 2){
            context.commit('JIAODD', value)
        }
    },
    jiawait(context, value){
        setTimeout(()=>{
            context.commit('JIAWAIT', value)
        }, 500)
    }
}
// 准备mutations---用于操作数据(state)
const mutations = {
    JIA(state, value){
        // console.log("mutatils中JIA被调用")
        state.sum += value
        // console.log(state.sum)
    },
    JIAN(state,value){
        state.sum -= value
    },
    JIAODD(state,value){
        state.sum += value
    },
    JIAWAIT(state,value){
        state.sum += value
    },

}
// 准备state---用于存储数据
const state = {
    sum: 0, // 当前的和
}

// 创建store
// const store = new Vuex.Store({
//     actions:actions,
//     mutations: mutations,
//     state: state
// })

// // 导入store
// export default store


// 创建并导出store
export default new Vuex.Store({
    actions:actions,
    mutations: mutations,
    state: state
})