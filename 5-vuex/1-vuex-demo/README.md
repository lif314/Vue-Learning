# vuex
- 集中式状态(数据)管理的一个Vue插件，对Vue中多个组件的共享状态进行集中式管理(读/写)，也可以提供组件通信

- 多个组件需要使用一个数据，就放在vuex中，对于其它的，依然使用以前的方法进行数据传递

## 啥时候使用
- 多个依赖同一状态(数据)
- 多个组件需要变更同一状态(数据)


## 使用
- 安装: vuex4只能在vue3中使用，vue2中应该使用vuex3
```shell
npm i vuex@3
```

- 引入
```js
//引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)
```

- 配置`store/index.js`
```js
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
const actions = {}
// 准备mutations---用于操作数据(state)
const mutations = {}
// 准备state---用于存储数据
const state = {}

// 创建并导出store
export default new Vuex.Store({
    actions:actions,
    mutations: mutations,
    state: state
})
```

- 配置$store
```js
// 引入store
import store from './store/index'

new Vue({
  render: h => h(App),
  store: store,  // 在vm上配置store
}).$mount('#app')
```

## 使用流程
- 在vue页面中调用
```js
incrementOdd() {
    this.$store.dispatch('jiaodd', this.n)
},
```

- actions
```js
jiaodd(context, value){
        if(context.state.sum % 2){
            context.commit('JIAODD', value)
        }
    },
```

- mutations
```js
JIAODD(state,value){
        state.sum += value
    },
```

- state
```js
// 准备state---用于存储数据
const state = {
    sum: 0, // 当前的和
}
```