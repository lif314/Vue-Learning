<template>
  <li>
    <label>
      <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <button class="btn btn-edit" @click="editTodo(todo.id)">编辑</button>
  </li>
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
    editTodo(id){
        console.log('修改todo', id)
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