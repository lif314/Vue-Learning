<template>
  <div>
    <!-- store中的数据 -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为: {{ bigSum }}</h3>
    <h3>我在{{ school }} ,学习{{ subject }}</h3>
    <!-- 组件通信：数据共享 -->
    <h3>Person人员列表总人数为： {{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option alue="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一会儿再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数字
    };
  },
  computed: {
    // 使用mapState对象进行代码生成 计算属性  从state中读取数据【对象写法】
    // ... 解析赋值
    // ...mapState({sum: 'sum', school: 'school', 'subject': 'subject'}),
    // 使用mapState生成计算属性  数组简写
    // 一个属性两个用途
    // ...mapState(['sum', 'school', 'subject', 'personList']),
    ...mapState('countAbout',['sum', 'school', 'subject']),
    ...mapState( 'personAbout',['personList']),
    
    // Getters
    // 对象写法
    ...mapGetters('countAbout', {bigSum:'bigSum'}),
    //
    // ...mapGetters(['bigSum']),
  },
  methods: {
    // commit 优化
    // 方法会调用mutations 对象写法  调用时传递参数
    ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
    // 写的一样的时候可以使用数组进行简写
    // ...mapMutations([JIA:'JIAN']),
    
    // dispatch优化 
    ...mapActions('countAbout', {incrementOdd:'jiaodd', incrementWait:'jiawait'}),
   // 相同的时候使用数组简写
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  margin-left: 10px;
  background-color: azure;
}
</style>
