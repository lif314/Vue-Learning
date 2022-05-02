<template>
  <ul class="todo-main">
      <!-- 将对象传进入 -->
    <my-item 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo="todoObj" 
        :checkTodo="checkTodo"
        :deleteItemTodo='deleteListTodo'
        />
  </ul>
</template>

<script>
import MyItem from "../components/MyItem.vue";

export default {
  name: "MyList",
  components: {
    MyItem,
  },
  // checkTodo进一步传递给item
    props:['checkTodo','todos', 'deleteListTodo'],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>