<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
      <!-- v-model不能修改props,但可以修改isAll 计算属性 -->
    </label>
    <span> <span>已完成{{doneTotal}}</span> / 全部{{total}}</span>
    <button class="btn btn-danger" @click='deleteTodos'>清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props:['todos', 'clearAll'],
  computed:{
    doneTotal(){
        // ES6
        return this.todos.reduce((pre, current)=>{
            // 第1次调用的返回值是第一次的return值
            return pre + (current.done? 1 : 0)
        }, 0)
        
        // let count = 0;
        // this.todos.forEach((todo)=>{
        //     if(todo.done){
        //         count++;
        //     }
        // })
        // return count
    },
    total(){
        return this.todos.length
    },
    // isAll(){
    //     return this.doneTotal === this.total && this.total > 0
    // }
    // 计算属性会被修改
     isAll:{
         get(){
            //  是否全部选中
            return this.doneTotal === this.total && this.total > 0
         },
         set(value){
             // 全选或者全部选
             // 使用emit触发事件
             this.$emit('checkAllTodo', value)
         }
        
    }
  },
  methods: {
      // 删除所有已经完成的todo
    deleteTodos(){
      // 触发使用ref绑定的事件
      this.$emit('clearAll')
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>