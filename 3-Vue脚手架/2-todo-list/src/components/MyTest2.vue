<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 一个简单的动画 -->
    <!-- <h1 class="come" v-show="isShow">简单的动画</h1> -->
    <!-- <transition name="hello" :appear="true"> -->
    <transition name="hello" appear>
      <!-- 包裹使用动画 -->
      <h1 v-show="isShow">简单的动画效果</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "MyTest2",
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
}

/* 固定的名字 */
.hello-enter-active {
  animation: test 1s;
}

.hello-leave-active {
  animation: test 1s reverse;
}

@keyframes test {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0px);
  }
}

/* .v-enter-active{
  tex;
} */
</style>