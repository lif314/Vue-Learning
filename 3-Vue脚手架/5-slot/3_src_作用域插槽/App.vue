<template>
  <div class="container">
    <!-- 数据不变，改变样式。App如何使用Category中的数据games -->
    <Category title="游戏">
      <!-- 包裹template获取slot中传递的数据 -->
      <template scope="data">
        <!-- data是一个对象 data.games是传递的数据 -->
        <ul>
          <li v-for="(item, index) in data.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <template scope="data">
        <ol>
          <li v-for="(item, index) in data.games" :key="index">{{ item }}</li>
        </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- 新API   slot-scope="{games}" -->
      <template slot-scope="{games}">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style>
.container,
.foot {
  /* 横向布局 */
  display: flex;
  /* 主轴对齐 */
  justify-content: space-around;
}

/* 解析结束后才发送给Category */
img {
  width: 100%;
}

video {
  width: 100%;
}

h4 {
  text-align: center;
}
</style>
