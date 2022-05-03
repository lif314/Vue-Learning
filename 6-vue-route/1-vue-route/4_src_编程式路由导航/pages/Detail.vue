<template>
  <div>
    <ul>
      <!-- 路由跳转： to的query传递参数 -->
      <!-- <li>消息编号：{{$route.query.id}}</li>
          <li>消息标题：{{$route.query.title}}</li> -->

      <!-- 使用params参数 -->
      <!-- <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ $route.params.title }}</li> -->

      <!-- props + prams -->
       <li>消息编号：{{ id }}</li>
      <li>消息标题：{{ title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
  // props:['a','b'], // props第一种，传递死数据
  props:['id', 'title'], // props第二种写法：prams参数传递
  computed:{
    // 计算属性
    // id(){
    //   return this.$route.params.id 
    // }
  },
  mounted() {
    // 数据在query寻红
    // console.log("路由参数：", this.$route.query)
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>