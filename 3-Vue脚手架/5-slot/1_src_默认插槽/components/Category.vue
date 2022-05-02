<template>
  <div class="category">
    <h3>{{title}}分类列表</h3>
    <!-- 插槽(占位符)：显示标签体中的内容 -->
    <slot>没有传值时显示默认值</slot>
    <!-- <ul v-for="item,index in listData" :key="index">
      <li >{{item}}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'Category',
  data() {
    return {
      msg: 'Hello'
    }
  },
  props:['title']
}
</script>

<style scoped>
.category{
  background-color: aquamarine;
  width: 200px;
  height: 400px;
}

h3{
  text-align: center;
  background-color: bisque;
}

</style>