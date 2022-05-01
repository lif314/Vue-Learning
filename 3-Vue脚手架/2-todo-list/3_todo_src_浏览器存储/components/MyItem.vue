<template>
  <li>
    <label>
      <!-- <input type="checkbox" :checked="todo.done" @click="handleCheck(todo.id)"/> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- 
                下面使用v-model：不进行传参也能改变App上的todo状态
                为什么呢？
                v-model与布尔值绑定，可以直接绑定box的状态
                v-model: 修改todo.done, todo的地址没有更改
                不推荐：不推荐v-model改变props中传进来的参数
             -->
      <!-- <input
        type="checkbox"
        v-model="todo.done"
      /> -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  //   接受一个对象值
  props: ["todo", "checkTodo", 'deleteItemTodo'],
  methods: {
    // 删除
    deleteTodo(id) {
        if(confirm('确定删除吗?')){
        //   console.log(id);
        // 通知App
         this.deleteItemTodo(id)
        }
    },
    //   change事件  取消勾选
    handleCheck(id) {
      this.checkTodo(id);
      //console.log(id)
      // 通知App组件更改done值
      // Item --> List -- > App
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