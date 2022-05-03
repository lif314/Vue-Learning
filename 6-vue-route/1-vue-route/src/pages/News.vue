<template>
  <div>
    <ul>
      <li v-for="n in news" :key="n.id">{{n.msg}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'News',
    data() {
      return {
        news:[
          {id:'001', msg:'新闻001'},
          {id:'002', msg:'新闻002'},
          {id:'003', msg:'新闻003'},
          {id:'004', msg:'新闻004'},
        ]
      }
    },
};
</script>

<style>
</style>