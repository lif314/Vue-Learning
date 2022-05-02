<template>
  <div>
    <my-test/>
    <hr/>
    <my-test2/>
  </div>
</template>

// 组件通信：父组件给子组件传递函数获取子组件的数据

<script>
// 引入组件
import MyTest from "./components/MyTest.vue";
import MyTest2 from "./components/MyTest2.vue";

export default {
  name: "App",
  components: {
    MyTest,
    MyTest2,
  },
};
</script>

<style>
</style>
