<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>名字: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
  </div>
</template>

<script>
// 暴露方式
export default {
  name: "Student",
  data() {
    return {
      msg: "我是一个学生",
      name: "llf",
      age: 19,
    };
  },
  mounted() {
    console.log("Student", this.x)
  },
};

// export default school  // 默认暴露 import ??? from xxx
</script>


<style scoped>
.test {
  background-color: rgb(91, 114, 149);
}
</style>