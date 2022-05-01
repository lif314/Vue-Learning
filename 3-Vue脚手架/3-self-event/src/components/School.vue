<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="demo title">
    <h1>{{msg}}</h1>
    <h2>名称: {{ name }}</h2>
    <h2>地址: {{ address }}</h2>
    <button @click="sendSchoolName">给App发送学校名字</button> 
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
  props:['getSchoolName'],
  methods: {
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  },

};

// export default school  // 默认暴露 import ??? from xxx
</script>


<style scoped>
/* 
- 如果没有scoped, 所有的样式最终都会汇总在一起
- 使用scoped属性，作用域。局部作用域，所有的杨思只负责当前的样式
- 实现原理：
  - 在外层的div上添加了随机值，是名字不会发证冲突
 */
.demo {
  background-color: aqua;
}
</style>