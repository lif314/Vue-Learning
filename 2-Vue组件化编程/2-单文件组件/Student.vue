<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="demo">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
  </div>
</template>

<script>
// 暴露方式
export default {
  name: "Student",
  data() {
    return {
      name: "llf",
      age: 12,
    };
  },
};

// export default school  // 默认暴露 import ??? from xxx
</script>

<style scoped>

</style>