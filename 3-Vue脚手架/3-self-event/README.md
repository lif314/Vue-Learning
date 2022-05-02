# 组件的自定义事件
- 给谁绑定的事件就找谁触发事件

1.一种组件间通信的方式，适用于：子组件===>父组件

2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）。

3.绑定自定义事件：
    1.第一种方式，在父组件中：
    <Demo @atguigu="test"/>或<Demo v-on:atguigu="test"/>
    2.第二种方式，在父组件中：
    <Demo ref="demo"/>
    mounted(){
    this.$refs.xxx.$on('atguigu',this.test)
    }

4.若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法。

5.触发自定义事件：this.$emit('atguigu',数据)

6.解绑自定义事件this.$off('atguigu')

7.组件上也可以绑定原生DOM事件，需要使用native修饰符。

8.注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！


# 全局事件总线：任意组件中进行通信、
- 基本思想：使用不属于任何一个组件的组件X。B组件给A组件传递数据：
    - 在A组件中给X组件绑定自定义事件demo，回调函数留在A组件中
    - B组件中触发X组件的demo事件，并传递数据(data)
    - X组件中的demo事件被触发，则A组件中回调函数执行获取数据(data)

- X组件的特性：
    - 所有组件可以看到X组件 `Vue.prototype.x = {x:12, y: 232}`
    - X组件可以调用$on, $off,$emit
    - $bus

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