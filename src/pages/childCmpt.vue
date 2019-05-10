<template>
    <div id="wrapper">
      <p>{{post}}</p>
      <div v-for="item in dataArr" :key="item.id">
        <p>{{item.num}}</p>
        <p>{{item.title}}</p>
        <button @click="handleAdd(item.num)">点我</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: '',
    props:{
      'post':String,
      'dataArr':Array,
    },
    data(){
      return {
      }
    },
    methods:{
      handleAdd(data){
        this.$emit("addOne",data);
      }
    }
  }
</script>

<style scoped>

</style>
