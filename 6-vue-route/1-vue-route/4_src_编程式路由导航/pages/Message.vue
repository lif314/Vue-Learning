<template>
  <div>
    <ul>
      <li v-for="msg in msgList" :key="msg.id">
        <!-- 使用路由名字 -->
        <!-- replace 浏览器前进后退 替换模式(替换当前模式)，默认是push模式 -->
        <router-link
          replace
          :to="{
            name: 'xiangqing',
            query: {
              id: msg.id,
              title: msg.title,
            },
          }"
          >{{ msg.title }}</router-link
        >

        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>
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
  methods: {
    // push查看
    pushShow(msg) {
      // 路由器
      // console.log(this.$router)
      // 随意跳转
      this.$router.push({
        name: "xiangqing",
        query: {
          id: msg.id,
          title: msg.title,
        },
      });
    },
    // replace 查看
    replaceShow(msg) {
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: msg.id,
          title: msg.title,
        },
      });
    },
  },
};
</script>

<style>
button {
  margin-left: 10px;
}
</style>