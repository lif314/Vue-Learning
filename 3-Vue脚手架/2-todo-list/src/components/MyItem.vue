<template>
<!-- 添加动画效果 -->
  <!-- <transition name="todo" appear> -->
    <li>
      <label>
        <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <span v-show="!todo.isEdit">{{ todo.title }}</span>
        <!-- @blur 失去焦点进行保存 或者使用enter进行保存 -->
        <!--  @keyup.enter="handleBlur(todo, $event)" -->
        <input
          v-show="todo.isEdit"
          type="text"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
      <!-- 添加一个编辑功能 -->
      <button class="btn btn-edit" @click="editTodo(todo)">编辑</button>
    </li>
  <!-- </transition> -->
</template>

<script>
export default {
  name: "MyItem",
  //   接受一个对象值
  props: ["todo"],
  methods: {
    // 删除
    deleteTodo(id) {
      if (confirm("确定删除吗?")) {
        // 触发$bus上的事件
        this.$bus.$emit("deleteTodo", id);
      }
    },
    // 编辑
    editTodo(todo) {
      // 点击eidt，将文本改为input框，改完后变为文本
      // console.log('修改todo', JSON.stringify(todo))
      // 将编辑的属性变为true
      todo.isEdit = true;
      // 在原来的基础上追加属性
      // this.$set(todo, 'isEdit', true)
      // 处理焦点问题
      //可以使用定时器
      // setTimeout(()=>{
      //   this.$refs.inputTitle.focus()
      // }, 200)

      // nextTick的函数会在DOM更新之后再执行
      this.$nextTick(function () {
        // 当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTicl中
        // 指定的回调函数中执行
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, event) {
      // 失去焦点变为文本框
      todo.isEdit = false;
      // 发送消息修改todo
      if (!event.target.value.trim()) return alert("输入不能为空！");
      this.$bus.$emit("updateTodo", todo.id, event.target.value);
    },
    //   change事件  取消勾选
    handleCheck(id) {
      // 触发事件总线
      this.$bus.$emit("checkTodo", id);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

/* 悬浮效果 */
li:hover {
  background-color: azure;
}

li:hover button {
  display: block;
}
</style>