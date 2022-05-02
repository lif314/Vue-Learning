
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    // 获取github用户信息
    getUsers(){
      // 后端使用CORS解决跨域问题
      this.$bus.$emit('updateListData', {isFirst: false, isLoading: true, errMsg: '', users: []})
     
     // 使用axios
      // axios.get(`http://api.github.com/search/users?q=${this.keyword}`).then(
      // 使用vue-resource
      this.$http.get(`http://api.github.com/search/users?q=${this.keyword}`).then(
          (response)=>{
              // console.log(response.data.items)
              // 触发事件
              // this.$bus.$emit('getUsers',response.data.items )
               this.$bus.$emit('updateListData', {isLoading: false, errMsg: '', users: response.data.items})
          },
          (error)=>{
              // console.log(error.message)
               this.$bus.$emit('updateListData', {errMsg: error.message, users: []})
          }
      )
    }
  },
};
</script>

<style>
</style>