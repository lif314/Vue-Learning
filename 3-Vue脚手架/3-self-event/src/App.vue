<template>
  <!-- 必须有根元素 -->
  <div class="app">
    <!-- 插值语法： data, props, computed -->
    <h1>{{ msg }}, 学生姓名是： {{ studentName }}</h1>
    <!-- 组件使用多次： 数据不同 -->

    <!-- 
  子给父传递数据：
    - 父组件中需要绑定回调函数
    - 
 -->

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <hr />
    <!-- v-on绑定自定义事件  ：子给父传递数据
    this.$emit('eventnamr', data)  触发事件
     -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第一种西俄法：@或者v-on) -->
    <!-- <Student v-on:selfevent="getStudentName" /> -->
    <hr />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传数据(第二种写法: ref) -->
    <!-- 通过实例对象获取 数据  通过ref绑定事件-->
    <!--  @click.native 绑定原生事件 -->
    <Student ref="student"  @click.native="show"/>
    <!-- this.$refs.student -->
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
    School,
  },
  mounted() {
    // 使用ref展示学生姓名
    //   this.$refs.student.$on('selfevent', function(name, ...params){
    //       // console.log("App收到了props传递函数-学生姓名：", name, params);
    //       // console.log(this)  // this是Student组件
    //       //  this.studentName = name  // this不是父组件，不能实现复制
    //  })

    this.$refs.student.$on("selfevent", (name, ...params) => {
      console.log("App收到了refs传递函数-学生姓名：", name, params);
      //使用箭头函数向外找this,即父组件App的this
      this.studentName = name;
    });

    // 在mouted中通过实例对象触发事件
    // console.log("使用ref触发事件");
    // console.log("使用ref获取数据-学生姓名", this.$refs.student.name);
    // 灵活性很强
    // $on(): 当什么的时候
    // setTimeout(() => {
    // 通过ref给实例对象绑定事件
    // this.$refs.student.$on("selfevent", this.getStudentName);
    // 只触发一次
    // this.$refs.student.$once("selfevent", this.getStudentName);
    // }, 3000);
  },
  data() {
    return {
      msg: "你好！",
      studentName: "",
    };
  },
  methods: {
    show(){
      alert(12121)
    },
    // methods中的App的实例对象
    getStudentName(name, ...params) {
      // ...a 多余参数整理在数组a上
      this.studentName = name;
      console.log("props传递函数-学生姓名：", name, params);
    },
    // 通过父组件给子组件传递函数类型的props实现：子给父传递数据
    getSchoolName(name) {
      console.log("自定义事件-的学校名字: ", name);
    },
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

.app {
  background-color: blanchedalmond;
}

.title {
  color: red;
}
</style>