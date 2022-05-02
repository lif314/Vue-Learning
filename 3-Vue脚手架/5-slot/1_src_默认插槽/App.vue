<template>
  <div class="container">
    <!-- title不用：是因为就是传字符串本身 -->
    <Category title="美食" :listData="foods">
      <!-- 标签体 -->
      <img
        src="https://a.cdn-hotels.com/gdcs/production162/d1605/dda6f9f9-ab51-4502-a8fb-7a5ac7f4be3f.jpg?impolicy=fcrop&w=800&h=533&q=medium"
      />
    </Category>
    <Category title="游戏" :listData="games">
      <ul v-for="(item, index) in games" :key="index">
        <li>{{ item }}</li>
      </ul>
    </Category>

    <Category title="电影" :listData="films">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
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
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好，李焕英》", "《尚硅谷》"],
    };
  },
};
</script>

<style>
.container {
  /* 横向布局 */
  display: flex;
  /* 主轴对齐 */
  justify-content: space-around;
}

/* 解析结束后才发送给Category */
img{
  width: 100%;
}

video{
  width: 100%;
}
</style>
