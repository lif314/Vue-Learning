<template>
  <!-- 添加item框 -->
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      @keyup.enter="sendTodo"
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
  props: ["receive"], // 接受父组件传递的函数
  methods: {
    // 给父组件发送新添加的todo数据
    sendTodo(event) {
      // id的生成 uuid   nanoid
      const todoObj = {
        id: nanoid(),
        title: event.target.value,
        done: false,
        isEdit: false
      };

      // 调用父组件传递的函数以传递todo对象数据
      this.receive(todoObj);
      // input置空  操作DOM了
      event.target.value = ''
    },
  }
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