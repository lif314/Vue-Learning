<template>
  <div>
    <div class="row">
      <Banner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始页面使用a标签实现页面跳转 -->
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->

          <!-- vue-router实现页面跳转 -->
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
          <!--           
          <router-link
          class="list-group-item" 
          active-class="active" 
          to="/about"
            >About</router-link> -->

          <!-- 使用路由名字:这样可以隐藏路由信息 -->
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}"
            >About</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 展示路由页面 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";

export default {
  name: "App",
  components: {
    Banner,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
