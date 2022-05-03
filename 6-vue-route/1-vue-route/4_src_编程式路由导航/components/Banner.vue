<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">测试go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      // 往前走3步
      this.$router.go(3)
    }
  },
};
</script>

<style>
button{
  margin-bottom: 20px;
}
</style>