<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // 组件内路由守卫
  beforeRouteEnter(to, from, next) {
    // 通过路由规则进入该组件时被调用
    // console.log('About---beforeRouteEnter', to,  from)
    if (to.meta.isAuth) {
      //判断是否需要鉴权
      if (localStorage.getItem("school") === "llf") {
        next();
        // next放行
      } else {
        alert("school错误");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    // 通过路由规则离开该组件时被调用
    //  console.log('About---beforeRouteLeave', to,  from)
     next() // 放行才能离开 焯！！！
  },
};
</script>

<style>
</style>