<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>名称: {{ name }}</h2>
    <h2>地址: {{ address }}</h2>
    <button @click="pluhello">调用插件中的hello</button>
  </div>
</template>

<script>
// 暴露方式
export default {
  name: "School",
  data() {
    return {
      msg:"学校信息",
      name: 'tj',
      address: 'shanghai'
    };
  },
  methods: {
    // 使用插件中的hello函数
    pluhello(){
      this.hello()
    }
  },
};

// export default school  // 默认暴露 import ??? from xxx
</script>

<style scoped>
.demo {
  background-color: aqua;
}
</style>