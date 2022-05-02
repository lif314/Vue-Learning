<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <!-- 通过props父组件给子组件传递函数的方式：子组件给父组件传递消息  -->
          <my-header :receive="receiveDataFromHeader" />
          <!-- 使用全局事件总线 $bus Item和App-->
          <my-list
            :todos="todos"
          />
          <!-- 通过父组件给子组件绑定自定义事件：子组件给父组件传递消息 -->
          <!-- v-on/@ 或者 ref -->
          <my-footer :todos="todos" @checkAllTodo="checkAllTodo" ref="footer" />
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
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  mounted() {
    // 使用ref绑定自定义事件 -- clearAll
    // 事件名， 回调函数
    this.$refs.footer.$on('clearAll', this.clearAll);
    //使用箭头函数
    // this.$refs.footer.$on("clearAll", () => {
    //   if (confirm("确定删除完成的todo吗?")) {
    //     this.todos = this.todos.filter((todo) => {
    //       return !todo.done;
    //     });
    //   }
    // });
    // 使用全局事件中线与Item之间传递数据
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('deleteTodo', this.deleteTodo)
  },
  beforeDestroy() {
      // 清除$bus上的事件
      this.$bus.$off('checkTodo')
      this.$bus.$off('deleteTodo')
  },
  methods: {
    // 全部删除  // 删除所有已经完成的todo
    clearAll() {
      if (confirm("确定删除完成的todo吗?")) {
        this.todos = this.todos.filter((todo) => {
          return !todo.done;
        });
      }
    },
    // my-footer自定义事件的回调函数
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    // 使用全局事件总线与Item传递数据
    // 取消勾选todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    // 删除一个todo
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },
    // 将该函数传给MyHeader，调用该函数获取数据
    receiveDataFromHeader(data) {
      // console.log("App组件收到子组件的数据", data)
      // 将该数据加在todos中
      this.todos.unshift(data);
    },
  },
  //   开启深度监视
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
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

.btn-edit {
  color: #fff;
  background-color: #27bd54;
  border: 1px solid #16db62;
  margin-right: 5px;
}

.btn-edit:hover {
  color: #fff;
  background-color: #2ade1a;
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
