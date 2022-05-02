<template>
  <div class="container">
    <!-- title不用：是因为就是传字符串本身 -->
    <Category title="美食" :listData="foods">
      <!-- 标签体 -->
      <img
        slot="center"
        src="https://a.cdn-hotels.com/gdcs/production162/d1605/dda6f9f9-ab51-4502-a8fb-7a5ac7f4be3f.jpg?impolicy=fcrop&w=800&h=533&q=medium"
      />
      <a slot="footer" href="https://www.meishichina.com/">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center" v-for="(item, index) in games" :key="index">
        <li>{{ item }}</li>
      </ul>
      <!-- 可以在具名插槽中追加 -->
      <!-- <a slot="footer" href="https://www.meishichina.com/">更多游戏</a> -->
      <!-- <a slot="footer" href="https://www.meishichina.com/">更多玩具</a> -->
      <div class="foot" slot="footer">
        <a href="https://www.meishichina.com/">更多游戏</a>
        <a href="https://www.meishichina.com/">更多玩具</a>
      </div>
    </Category>

    <Category title="电影" :listData="films">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- 使用template包裹元素h4不产生真实的DOM结构，使用div会生产DOM结构 -->
      <template slot="footer">
        <!-- 使用template时slot的两种写法 -->
      <!-- <template v-slot:footer> -->
        <div  class="foot">
        <a href="https://www.youtube.com/">经典</a>
        <a href="https://www.youtube.com/">热门</a>
        <a href="https://www.youtube.com/">推荐</a>
        <!-- 都放在footer中 -->
        </div>
        <h4>欢迎观看！</h4>
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
