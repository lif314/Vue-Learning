<template>
  <div>
    <!-- store中的数据 -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为: {{ bigSum }}</h3>
    <h3>我在{{ school }} ,学习{{ subject }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option alue="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一会儿再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数字
    };
  },
  mounted() {
    // const x = mapState({'sum':'sum'})  // 代码生成
    // console.log('mapState', x)
    // console.log("Count:", this); // $store
  },
  computed: {
    // 好烦！！！ 程序员亲自写计算属性
   /* sum() {
      return this.$store.state.sum;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    },*/

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
  },
  methods: {
    increment() {
      // 发送给actions
      // this.$store.dispatch('jia', this.n)
      //如果Actions中没有业务逻辑，则直接可以发送给mutations
      this.$store.commit("JIA", this.n);
      // this.$store.sum += this.n;
    },
    decrement() {
      // 发送给actions
      //  this.$store.dispatch('jian', this.n)
      //如果Actions中没有业务逻辑，则直接可以发送给mutations
      this.$store.commit("JIAN", this.n);
      // this.$store.sum -= this.n;
    },
    incrementOdd() {
      // if(this.$store.state.sum % 2 ==1){
      // 只负责通知actions处理
      this.$store.dispatch("jiaodd", this.n);
      // }
      // if (this.sum % 2 == 1) {
      // this.sum += this.n;
      // }
    },
    incrementWait() {
      // setTimeout(() => {
      this.$store.dispatch("jiawait", this.n);
      // this.sum += this.n;
      // }, 500);
    },
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
