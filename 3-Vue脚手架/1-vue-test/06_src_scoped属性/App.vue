<template>
  <!-- 必须有根元素 -->
  <div>
    <!-- 组件使用多次： 数据不同 -->
    <Student></Student>
    <hr/>
    <School/>
  </div>
</template>

<script>
// App管理组件
// 引入组件
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  // 注册组件
  components: {
    Student,
    School
  },
  data() {
    return {
    
    };
  },
  methods: {
  },
};
</script>

<style lang="css">
/**
- 如果没有scoped, 所有的样式最终都会汇总在一起
- 使用scoped属性，作用域。局部作用域，所有的杨思只负责当前的样式
- 实现原理：
  - 在外层的div上添加了随机值，是名字不会发证冲突
- 一般app中是许多公用的样式，不在app中加入scoped

- lang属性：样式语言
  - css 默认
  - less: cli无法处理，需要安装插件  less-loader
    - 存在webpack和less的兼容性问题
    - npm i less-loader@7   安装7.xxx版本
    - npm view webpack versions 查看版本命令
*/
/* 全局样式 */

.title{
  color: red;
}
</style>