<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="test">
    <h1>{{ msg }}</h1>
    <h2>名字: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="sendStudentName">vc:把学生名给School组件</button>
  </div>
</template>

<script>
// 引入pubsub
import pubsub from 'pubsub-js'

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
    console.log("Student", this.x);
  },
  methods: {
    sendStudentName() {
      // 发布消息
      pubsub.publish('hello', this.name)
      // this.$bus.$emit("hello", this.name);
    },
  },
  // beforeDestroy() {
  //   //一定记住要解绑$bus上的事件
  //   this.$bus.$off("hello");
  //   // this.$bus.$off();  // 千万不要这样写
  // },
};

// export default school  // 默认暴露 import ??? from xxx
</script>


<style scoped>
.test {
  background-color: rgb(91, 114, 149);
}
</style>