<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <my-header :receive="receiveDataFromHeader" />
          <my-list
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteListTodo="deleteTodo"
          />
          <my-footer
            :todos="todos"
            :checkAllTodo="checkAllTodo"
            :clearAll="clearAll"
          />
        </div>
      </div>
    </div>
  </div>
</template>

// 组件通信：父组件给子组件传递函数获取子组件的数据

<script>
// 引入组件
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyFooter,
    MyHeader,
    MyList,
  },
  // 将数据存给共同的父组件： APP
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
      // todos: [
      //   { id: "001", title: "sleep", done: true },
      //   { id: "002", title: "eat", done: false },
      //   { id: "003", title: "music", done: true },
      //   { id: "004", title: "sing", done: false },
      //   { id: "005", title: "chat", done: false },
      // ],
    };
  },
  methods: {
    // 全部删除  // 删除所有已经完成的todo
    clearAll() {
      if (confirm("确定删除完成的todo吗?")) {
        this.todos = this.todos.filter((todo) => {
          return !todo.done;
        });
      }
      // this.todos  = []
    },
    // 全选或者全不选
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 取消勾选todo
    // 逐层传递消息
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 将该函数传给MyHeader，调用该函数获取数据
    receiveDataFromHeader(data) {
      // console.log("App组件收到子组件的数据", data)
      // 将该数据加在todos中
      this.todos.unshift(data);
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
  // 监视todos  webStorage
  // watch:{
  //   todos(value){
  //       localStorage.setItem('todos', JSON.stringify(value))
  //   }
  // }
  //   开启深度监视
  watch:{
    todos:{
      deep: true,
      handler(value){
        localStorage.setItem('todos', JSON.stringify(value))
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
