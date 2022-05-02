<template>
  <div>
    <!-- 
  四种展示：
    - welcome
    - loading
    - users
    - errors
 -->
    <!-- 展示用户列表 -->
    <div class="row" v-show="info.users.length">
      <div class="card" v-for="user in info.users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">Welcome to use!</h1>
    <!-- 展示加载中-->
    <h1 v-show="info.isLoading">Loding......</h1>
    <!-- 展示错误 -->
    <h1 v-show="info.errMsg">{{ errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        isFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    // 兄弟组件获取数据
    this.$bus.$on("updateListData", (dataObj) => {
      // 回调函数
      // this.users = dataObj.users;
      // this.isFirst = dataObj.isFirst;
      // this.isLoading = dataObj.isLoading;
      // this.errMsg = dataObj.errMsg;
      // 对象结构: 通过对比属性的形式合并对象
      this.info = {...this.info, ...dataObj}
      // console.log("List收到了数据: ", users);
    });
  },
  beforeDestroy() {
    // 解绑事件
    this.$bus.$off("updateListData");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
