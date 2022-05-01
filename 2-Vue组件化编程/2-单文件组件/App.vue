<template>
<!-- 必须有根元素 -->
    <div>
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
// App管理组件
// 引入组件
import School from './School.vue'
import Student from './Student.vue'

export default {
    name: 'App',
    // 注册组件
    components:{
        School,
        Student
    }
};
</script>

<style>
</style>