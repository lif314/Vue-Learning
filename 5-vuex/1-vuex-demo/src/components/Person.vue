<template>
  <div>
      <h1>人员列表</h1>
      <input type="text" placeholder="添加人员" v-model="name"/>
      <button @click="add">添加</button>
      <button @click="addWang">添加姓王的人</button>
      <button @click="addFromGithub">搜索github添加人员信息</button>
      <ul>
          <li v-for="p in personList" :key="p.id">{{p.name}}</li>
      </ul>
      <h3>Count组件中的总和: {{sum}}</h3>
      <h3>列表中第一个人的名字是: {{firstPersonName}}</h3>
  </div>
</template>

<script>

// import {mapState} from 'vuex'
import {nanoid} from 'nanoid'

export default {
    name:'Person',
    data() {
        return {
            name: ''
        }
    },
    computed:{
        // ...mapState('personAbout',['personList']),
        // ...mapState('countAbout',['sum'])
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        // getters
        firstPersonName(){
            // getters 模块化
            return this.$store.getters['personAbout/firstPersonName']
        }
    },methods: {
        add(){
            const personObj = {
                id: nanoid(),
                name: this.name
            }
            // 或者直接给mutatiols中
            // this.$store.personAbout.dispatch('addPerson', personObj)
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            // this.$store.commit('ADD_PERSON', personObj)
            this.name = ''
        },
        addWang(){
            const personObj = {
                id: nanoid(),
                name: this.name
            }
            // dispatch
            this.$store.dispatch('personAbout/addPersonWang', personObj)
            this.name = ''
        },
        addFromGithub(){
            const keyword = this.name
              this.$store.dispatch('personAbout/addPersonServer', keyword)
        }
    },
}
</script>

<style>
button{
    margin-left: 10px;
    background-color: beige;
}
</style>