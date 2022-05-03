<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <!-- <li>
          <a class="list-group-item" href="./home-news.html">News</a>
        </li>
        <li>
          <a class="list-group-item active" href="./home-message.html"
            >Message</a
          >
        </li> -->
        <li>
          <!-- to的路径要写全 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>