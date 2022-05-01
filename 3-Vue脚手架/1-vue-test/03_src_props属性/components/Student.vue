<template>
  <!-- 结构: 组件中必须有根目录 -->
  <div class="demo">
    <h1>{{msg}}</h1>
    <h2>名字: {{ name }}</h2>
    <h2>年龄: {{ myAge+10 }}</h2>
    <button @click="add">修改组件内部数据</button>
  </div>
</template>

<script>
// 暴露方式
export default {
  name: "Student",
  data() {
    return {
      msg:"我是一个学生",
      myAge: this.age  // 外部传入的数据不能够进行修改，如果需要改，则在data中接受这个数据，然后更改data中的数据
    };
  },
  // 外部传入的数据不能够进行修改，如果需要改，则在data中接受这个数据，然后更改data中的数据
  //动态添加组件的数据
  //数据类型 -- 简单接受
  // props:['name', 'age'],
  // 接受的同时对类型进行限制
  // props:{
  //   name: String, 
  //   age: Number
  // },
  props:{
    name:{
      type: String,
      required: true // 必须要传值
    },
    age:{
      type: Number,
      default: 18 //默认值
    }
  },
  methods: {
  add(){
    this.myAge++;
  }
  },
};

// export default school  // 默认暴露 import ??? from xxx
</script>


<style scoped>
.demo {
  background-color: aqua;
}
</style>