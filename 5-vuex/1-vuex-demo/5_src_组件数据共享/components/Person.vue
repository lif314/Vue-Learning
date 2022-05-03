<template>
  <div>
      <h1>人员列表</h1>
      <input type="text" placeholder="添加人员" v-model="name"/>
      <button @click="add">添加</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
      <h3>Count组件中的总和: {{sum}}</h3>
  </div>
</template>

<script>

import {mapState} from 'vuex'
import {nanoid} from 'nanoid'

export default {
    name:'Person',
    data() {
        return {
            name: ''
        }
    },
    computed:{
        ...mapState(['personList', 'sum'])
    },methods: {
        add(){
            const personObj = {
                id: nanoid(),
                name: this.name
            }
            // 或者直接给mutatiols中
            this.$store.dispatch('addPerson', personObj)
            this.name = ''
        }
    },
}
</script>

<style>

</style>