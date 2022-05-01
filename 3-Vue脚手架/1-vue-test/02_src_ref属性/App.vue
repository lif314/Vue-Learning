<template>
  <!-- 必须有根元素 -->
  <div>
    <!-- <h1 v-text="msg" id="msg"></h1> -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">显示DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
// App管理组件
// 引入组件
import School from "./components/School.vue";

export default {
  name: "App",
  // 注册组件
  components: {
    School,
  },
  data() {
    return {
      msg: "Vue. ref",
    };
  },
  methods: {
    showDOM() {
      // 使用原始操作DOM
      // console.log(document.getElementById("msg"))

      // 使用ref获取DOM元素
      console.log("refs", this.$refs);
      console.log("title", this.$refs.title);
      console.log("school", this.$refs.sch);
    },
  },
};
</script>

<style>
</style>