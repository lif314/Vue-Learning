<template>
  <div>
      <ul>
          <!-- 路由跳转： to的query传递参数 -->
          <!-- <li>消息编号：{{$route.query.id}}</li>
          <li>消息标题：{{$route.query.title}}</li> -->
          <li>消息编号：{{$route.query.id}}</li>
          <li>消息标题：{{$route.query.title}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'Detail',
    mounted() {
        // 数据在query寻红
        // console.log("路由参数：", this.$route.query)
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>