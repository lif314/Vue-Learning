<template>
  <div class="container">
    <Category/>
    <Category/>
    <Category/>
    <Category/>
  </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>

<style>
.container{
  /* 横向布局 */
  display: flex;
  justify-self: space;
}
</style>
