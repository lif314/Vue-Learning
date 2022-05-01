<template>
  <!-- 必须有根元素 -->
  <div>
    <!-- 组件使用多次： 数据不同 -->
    <Student></Student>
    <hr/>
    <School/>
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
    School
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