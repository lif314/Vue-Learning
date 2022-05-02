<template>
  <div class="app">
    <button @click="getStudents">获取学生信息</button>
    <hr/>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      // vue程序启动在8080，需要向8080请求数据，才不存在CORS问题
      // 使用vue-cli配置代理服务器从真正的后台5000端口获取数据
      // 8080不是把所有的资源转发给5000,public中有的就不会转发
      // 因为请求的数据路径命名不能在public中出现

      // http://localhost:8080/api/students  404了
      axios.get('http://localhost:8080/api/students').then(
        (response) => {
          console.log("学生信息请求成功了:", response.data);
        },
        (error) => {
          // 跨域失败： 违背了同源策略(协议 域名 端口号)
          console.log("请求失败了:", error.message);
        }
      );
    },
    getCars() {
      axios.get('http://localhost:8080/demo/cars').then(
        (response) => {
          console.log("汽车信息请求成功了:", response.data);
        },
        (error) => {
          // 跨域失败： 违背了同源策略(协议 域名 端口号)
          console.log("请求失败了:", error.message);
        }
      );
    },
  },
};
</script>

<style scoped>
</style>