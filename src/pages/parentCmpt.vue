<template>
  <div id="wrapper">
    <p :style="{fontSize:12+childData+'px'}">我是父组件</p>
    <p>{{childData}}</p>
    <childCmpt :post="title" :dataArr="dataArr" @addOne="handleAddNum">
      <template>
        <p>哈哈哈</p>
      </template>
    </childCmpt>  <!--:enlarge-text="fontSize"-->
  </div>
</template>

<script>
  import childCmpt from './childCmpt';
  export default {
    name: '',
    data(){
      return{
        title:"啦啦啦",
        dataArr:[{
          id:"1",
          num:1,
          title:"这是第1个"
        },{
          id:"2",
          num:2,
          title:"这是第2个"
        },{
          id:"3",
          num:3,
          title:"这是第3个"
        },{
          id:"4",
          num:4,
          title:"这是第4个"
        },{
          id:"5",
          num:5,
          title:"这是第5个"
        }],
        childData:0,
      }
    },
    components:{
      childCmpt
    },
    methods:{
      handleAddNum(data){
        this.childData = data;
        console.log(data)
      }
    },
    mounted(){
    }
  }
</script>

<style scoped>

</style>
