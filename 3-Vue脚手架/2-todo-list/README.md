# 组件化编程

## 静态组件
- 按照功能点划分
- 实现静态组件：抽取组件，使用组件实现结晶态页面效果

## 动态数据
- 展示动态数据

## 总结

- 组件化编码流程：
    - 拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突。
    - 实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一
些组件在用：
        - 一个组件在用：放在组件自身即可。
        - 一些组件在用：放在他们共同的父组件上（状态提升）。
    - 实现交互：从绑定事件开始。
- props适用于：
    - 父组件=>子组件通信
    - 子组件=>父组件通信（要求父先给子一个函数）

- 使用v-mode时要切记：v-mode绑定的值不能是props传过来的值，因props是不可以修改的！

- props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## 事件总线

- 使用全局事件总线
    - 安装事件总线
    ```vue
    new Vue({
        ....
        beforeCreate(){
            Vue.prototype.$bus = this ///安装全局事件总线,this就是当前的vue
        }
    })
    ```
    - 使用事件总线
    1.接受数据：A组件想要接受数据，则在A组件中给$bus绑定自定义事件，事件的回调就在A组件自身
    ```vue
    methods(){
        demo(data){....}
    }
    ....
    mounted(){
        this.$bus.$on('xxx', this.demo) // 给$bus绑定自定义事件
    }
    ```
    2. 提供数据：触发事件发送数据
    ```vue
    this.$bus.$emit('xxxx', data)
    ```
    - 最好在beforeDestroy钩子中，使用$off解绑当前组件中使用的事件
    ```vue
    this.$bus.$off('xxxx')
    ``` 


# this.$nextTick
```js
      // nextTick的函数会在DOM更新之后再执行
      this.$nextTick(function(){
        // 当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTicl中
        // 指定的回调函数中执行
        this.$refs.inputTitle.focus()
      })
```


# 动画
- 还是用库比较香！！！
- animate.css