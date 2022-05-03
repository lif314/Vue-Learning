<template>
  <div>
    <!-- store中的数据 -->
    <h1>当前求和为：{{$store.state.sum}}</h1>
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
export default {
  name: "Count",
  data() {
    return {
      n: 1, // 用户选择的数字
    };
  },
  mounted() {
    console.log("Count:", this);  // $store
  },
  methods: {
    increment() {
      this.$store.dispatch('jia', this.n)
      // this.$store.sum += this.n;
    },
    decrement() {
       this.$store.dispatch('jian', this.n)
      // this.$store.sum -= this.n;
    },
    incrementOdd() {
      // if(this.$store.state.sum % 2 ==1){
        // 只负责通知actions处理
         this.$store.dispatch('jiaodd', this.n)
      // }
      // if (this.sum % 2 == 1) {
        // this.sum += this.n;
      // }
    },
    incrementWait() {
      // setTimeout(() => {
         this.$store.dispatch('jiawait', this.n)
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
