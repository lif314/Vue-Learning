<template>
  <div>
    <ul>
      <li v-for="msg in msgList" :key="msg.id">
        <!-- Query参数传递 -->
        <!-- :当作js解析，使用``当作模板字符串解析 -->
        <!-- to的字符串 -->
        <!-- <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{msg.title}}</router-link> -->

        <!-- 路由跳转：to的对象写法 -->
        <!-- <router-link :to="{
        path: '/home/message/detail',
        query:{
          id:msg.id,
          title: msg.title
        }
        }">{{msg.title}}</router-link> -->

<!-- 使用路由名字 -->
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: msg.id,
              title: msg.title,
            },
          }"
          >{{ msg.title }}</router-link
        >
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgList: [
        {
          id: "001",
          title: "消息001",
        },
        {
          id: "002",
          title: "消息002",
        },
        {
          id: "003",
          title: "消息003",
        },
        {
          id: "004",
          title: "消息004",
        },
      ],
    };
  },
};
</script>

<style>
</style>