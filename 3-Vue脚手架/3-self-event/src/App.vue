<template>
  <!-- 必须有根元素 -->
  <div class="app">
    <!-- 插值语法： data, props, computed -->
    <h1>{{ msg }}</h1>
    <School/>
    <hr />
    <Student/>

  </div>
</template>

<script>
// App管理组件
// 引入组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  // 注册组件
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好！",
    };
  },
};
</script>

<style lang="css">
.app {
  background-color: blanchedalmond;
}

.title {
  color: red;
}
</style>