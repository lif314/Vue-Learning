<template>
  <!-- 必须有根元素 -->
  <div>
    <!-- 组件使用多次： 数据不同 -->
    <Student name="ll" :age="12"></Student>
    <Student name="12" :age="12"></Student>
    <Student name="as"></Student>
  </div>
</template>

<script>
// App管理组件
// 引入组件
import Student from "./components/Student.vue";

export default {
  name: "App",
  // 注册组件
  components: {
    Student,
  },
  data() {
    return {
    
    };
  },
  methods: {
  },
};
</script>

<style>
</style>