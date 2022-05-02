<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>名字: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="sendStudentName">给App发送学生姓名</button>
    <button @click="unbind">解绑自定义事件selfevent</button>
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
  methods: {
    unbind(){
      // 解绑事件
      this.$off('selfevent')   // 只能解绑一个自定义事件
      // this.$off(['selfevent', 'demo'])   // 解绑多个自定义事件 使用[]
      // this.$off()   // 解绑所有自定义事件
    },
    sendStudentName() {
      // 可以传递多个参数
       this.$emit('selfevent', this.name, 1, 2,3);
      // 触发自定义事件
      // 触发student上的实例对象上的事件
    },
    showName() {
      alert(this.name);
    },
  },
};

// export default school  // 默认暴露 import ??? from xxx
</script>


<style scoped>
.test {
  background-color: rgb(91, 114, 149);
}
</style>