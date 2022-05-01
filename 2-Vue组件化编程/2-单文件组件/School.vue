<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="demo">
    <h2>学校名称: {{ schoolName }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="schoolname">点我提示学校名</button>
  </div>
</template>

<script>
// 暴露方式
export default {
  name: "School",
  data() {
    return {
      schoolName: "tj",
      address: "shanghai",
    };
  },
  methods: {
    schoolname() {
      alert(this.schoolName);
    },
  },
};

// export default school  // 默认暴露 import ??? from xxx
</script>


<style scoped>
.demo {
  background-color: aqua;
}
</style>