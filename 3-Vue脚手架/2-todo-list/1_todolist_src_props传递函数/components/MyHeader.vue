<template>
  <!-- 添加item框 -->
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="title"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// 引入nanoid
import { nanoid } from "nanoid";

export default {
  name: "MyHeader",
  data() {
    return {
      title: "",
    };
  },
  props: ["receive"],
  methods: {
    // 使用事件
    // add(event) {
    //   // 将用户的输入封装为一个对象
    //   // id的生成 uuid   nanoid
    //   const todoObj = {
    //     id: nanoid(),
    //     title: event.target.value,
    //     done: false,
    //   };
    //   //   console.log(this.title)
    //   //把该对象存储在my-list组件中
    //   // 兄弟组件之间传递数据
    //   // 初级方案：由于兄弟之间不能沟通，将数据给App中
    //   // 调用App组件传进来的数据
    //   this.receive(todoObj);
    //   // input置空  操作DOM了
    //   event.target.value = ' '
    // //   console.log(event.target.value);
    // },

   // 使用v-model
      add(){
          // 将用户的输入封装为一个对象
          // id的生成 uuid   nanoid
          if(!this.title) return
          const todoObj = {
              id: nanoid(),
              title: this.title,
              done: false
          }
        //   console.log(this.title)
        //把该对象存储在my-list组件中
        // 兄弟组件之间传递数据
        // 初级方案：由于兄弟之间不能沟通，将数据给App中
        // 调用App组件传进来的数据
        this.receive(todoObj)
        // 清空输入
        this.title = ''
      }
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>