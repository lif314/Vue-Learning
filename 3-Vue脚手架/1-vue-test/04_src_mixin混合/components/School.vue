<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2 @click="showName">名称: {{ name }}</h2>
    <h2>地址: {{ address }}</h2>
  </div>
</template>

<script>
import {mixin} from './mixin'

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
  // 使用混合 mixin   复用配置   
  // 配置进行组合， 原则使用当前的数据配置
  // 生命周期钩子都要，混合在前
  mixins:[mixin]
};

// export default school  // 默认暴露 import ??? from xxx
</script>

<style scoped>
.demo {
  background-color: aqua;
}
</style>