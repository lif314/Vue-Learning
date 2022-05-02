<template>
  <div class="container">
    <search />
    <list />
  </div>
</template>

<script>
// import 引入css文件严格进行检查
// 1、在assets/css下引入
// import './assets/css/bootstrap.css'
// 2、在public下通过index.html引入
import List from "./components/List.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    List,
    Search,
  },
  methods: {},
};
</script>