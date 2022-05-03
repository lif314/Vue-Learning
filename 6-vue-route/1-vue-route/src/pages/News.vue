<template>
  <div>
    <ul>
      <!--  -->
      <li :style="{ opacity }">欢迎学习Vue</li>
      <li v-for="n in news" :key="n.id">
        {{ n.msg }}
        <input type="text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: [
        { id: "001", msg: "新闻001" },
        { id: "002", msg: "新闻002" },
        { id: "003", msg: "新闻003" },
        { id: "004", msg: "新闻004" },
      ],
      opacity: 1,
    };
  },
  //  切换组件定时器依然运行
  // beforeDestroy() {
  //   // 销毁定时器
  //   clearInterval(this.timer)
  // },
  // mounted() {
  //   this.timer = setInterval(()=>{
  //     this.opacity -= 0.01
  //     if(this.opacity <= 0 ){
  //       this.opacity = 1
  //     }
  //   }, 16)
  // },

  // 激活和非激活
  activated() {
    console.log("激活");
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 16);
  },
  deactivated() {
    clearInterval(this.timer);
    console.log("失活");
  },
};
</script>

<style>
</style>