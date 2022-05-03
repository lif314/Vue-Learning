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

**使用原则**
- 在actions中的context可使用链式的dispatch
- 在actions中书写业务逻辑
- 在mutations中进行真正改变数据(state)的操作


### getters 相当于计算属性
- 逻辑复杂时使用
- 配置
```js
// 配置getters: 类似计算属性  用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}
```

- 使用
```js
{{$store.getters.bigSum}}
```

### mapState\mapGetters
```js
    // 使用mapState对象进行代码生成 计算属性  从state中读取数据【对象写法】
    // ... 解析赋值
    // ...mapState({sum: 'sum', school: 'school', 'subject': 'subject'}),
    
    // 使用mapState生成计算属性  数组简写
    // 一个属性两个用途
    ...mapState(['sum', 'school', 'subject']),
    
    // Getters
    // 对象写法
    // ...mapGetters({bigSum:'bigSum'}),
    // 数组写法
    ...mapGetters(['bigSum']),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
```


### mapMutations和mapActions
- 需要在模板中传递参数
- 传递参数
```vue
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
``` 
- 调用
```js
// commit 优化
    // 方法会调用mutations 对象写法  调用时传递参数
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    // 写的一样的时候可以使用数组进行简写
    // ...mapMutations([JIA:'JIAN']),
    
    // dispatch优化 
    ...mapActions({incrementOdd:'jiaodd', incrementWait:'jiawait'}),
   // 相同的时候使用数组简写
```