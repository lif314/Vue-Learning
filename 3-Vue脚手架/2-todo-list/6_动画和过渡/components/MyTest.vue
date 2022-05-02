<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 过度效果-->
    <transition name="hello" appear>
      <!-- 包裹使用动画 -->
      <h1 v-show="isShow">简单的过渡效果</h1>
      <!-- 只能显示一个 -->
      <!-- <h1 v-show="isShow">简单的过渡效果</h1> -->
    </transition>

<!--transition只能显示一个元素  -->

<transition-group name="hello">
  <!-- 内部动画不能同时显示，需要满足互斥 -->
  <h1 v-show="!isShow" key="1">简单的过渡效果 transition-group1</h1>
  <h1 v-show="isShow" key="2">简单的过渡效果 transition-group2</h1>
</transition-group>
  </div>
</template>

<script>
export default {
  name: "MyTest",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: aqua;
  transition: 0.5s linear;
}

/* 进入的起点 */
.hello-enter{
  transform: translateX(-100%);
}

/* 进入的终点 */
.hello-enter-to{
  transform: translateX(0);
}

/* 离开的起点 */
.hello-leave{
  transform: translateX(0);
}

/* 离开的终点 */
.hello-leave-to{
  transform: translateX(-100%);
}
</style>