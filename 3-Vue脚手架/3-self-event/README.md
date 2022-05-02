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