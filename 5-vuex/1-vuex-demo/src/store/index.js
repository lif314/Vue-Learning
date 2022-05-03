// 该文件用于创建vuex中最为核心的store
// [vuex] must call Vue.use(Vuex) before creating a store instance.
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

import axios from 'axios'

// 应用vuex插件
Vue.use(Vuex)

// 模块化编程

// 求和相关的配置
const countOptions = {
    namespaced:true,
    actions:{
        jiaodd(context, value){
            if(context.state.sum % 2){
                context.commit('JIA', value)
            }
        },
        jiawait(context, value){
            setTimeout(()=>{
                context.commit('JIA', value)
            }, 500)
        },
    },
    mutations:{
        JIA(state, value){
            // console.log("mutatils中JIA被调用")
            state.sum += value
            // console.log(state.sum)
        },
        JIAN(state,value){
            state.sum -= value
        },
    },
    state:{
        sum: 0, // 当前的和
        school: 'tj university',
        subject: 'Math',
    },
    // getters还讲究顺序？？？？
    getters:{
        bigSum(state){
            return state.sum * 10
        },
    }
}

// 人员管理的配置
const personOptions = {
    namespaced: true,
    actions:{
        // 添加人员 
        // addPerson(context, value){
        //     context.commit('ADD_PERSON', value)
        // }
        addPersonWang(context, value){
            if(value.name.indexOf('王') === 0){
                context.commit('ADD_PERSON', value)
            }else{
                alert('添加的人必须姓王！')
            }
        },
        // 从服务器获取人的信息 网络请求
        addPersonServer(context, keyword){
            axios.get(`http://api.github.com/search/users?q=${keyword}`).then(
                (response)=>{
                    const data = response.data.items
                    data.forEach((data)=>{
                        const person = {id:data.id+'', name:data.login }
                        context.commit('ADD_PERSON', person)
                    })
                    // console.log('data:', data)
                    
                },
                (error)=>{
                    console.log(error.message)
                }

            )
        }
    },
    mutations:{
         // 添加人员
        ADD_PERSON(state, value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001', name:'llf'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}


// 模块化
export default new Vuex.Store({
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})


// 准备store
// 准备action -- 用于响应组件中的动作
// 在actions中处理业务逻辑, 可以发送AJAX请求等
// const actions = {
   
    
// }
// 准备mutations---用于操作数据(state)
// const mutations = {
   
   
// }
// 准备state---用于存储数据
// const state = {
    
    
// }
// 配置getters: 类似计算属性  用于将state中的数据进行加工
// const getters = {
    
//     }
// }
// 创建store
// const store = new Vuex.Store({
//     actions:actions,
//     mutations: mutations,
//     state: state
// })

// // 导入store
// export default store


// 创建并导出store
