<template>
  <div>
    <el-button @click="handleClick">
      lalalal
    </el-button>
    <!--<el-dialog-right dark v-if="show" @click="closed">-->
    <!--111-->
    <!--</el-dialog-right>-->
    <el-dialog-right @closed="closed" v-if="show">
      <div v-if="contentShow">
        111
      </div>
    </el-dialog-right>
  </div>
</template>

<script>
  import ElButton from '../components/button/button';
  import ElPopup from '../components/popover/popover';
  import ElDialogRight from '../components/dialogright/dialog-right';
  export default {
    name: '',
    data(){
      return {
        show:false,
        contentShow:false
      }
    },
    computed:{
    },
    components:{
      ElPopup,
      ElButton,
      ElDialogRight

    },
    methods:{
      handleClick(){
        this.show = true;
      },
      closed(){
        console.log(1)
        this.show = false;
      },
      afterEnter(){
        this.contentShow = true;
      },
      afterLeave(){
        this.contentShow = false;
      }
    }
  }
</script>

<style scoped>

</style>
