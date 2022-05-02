<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="demo title">
    <h1>{{ msg }}</h1>
    <h2>名称: {{ name }}</h2>
    <h2>地址: {{ address }}</h2>
  </div>
</template>

<script>
// 引入pubsub
import pubsub from 'pubsub-js'

// 暴露方式
export default {
  name: "School",
  data() {
    return {
      msg: "学校信息",
      name: "tj",
      address: "shanghai",
    };
  },
  mounted() {
      // 订阅消息
      // 消息主题   回调函数(消息名，数据)
      this.pubId = pubsub.subscribe('hello', (msgName,data)=>{
          // console.log(this)  // this undefined  使用箭头函数才是vc
          console.log('有人发布消息，接受到消息：', data)
      })

    // this.$bus.$on("hello", (data) => {
    //   console.log("我是School组件,收到了数据：", data);
    // });
  },
  beforeDestroy() {
    // 取消订阅消息
    // 每个消息都有唯一的id,需要通过id取消订阅
    pubsub.unsubscribe(this.pubId)
  },
};

</script>
<style scoped>
.demo {
  background-color: aqua;
}
</style>