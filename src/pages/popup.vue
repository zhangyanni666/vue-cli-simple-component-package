<template>
    <div>
      <el-button @click="handleClick">
        lalalal
      </el-button>
      <!--<el-dialog-right dark v-if="show" @click="closed">-->
        <!--111-->
      <!--</el-dialog-right>-->
      <el-popup
        @click="closed"
        v-if="show"
        @after-enter="afterEnter"
        @after-leave="afterLeave">
        <div v-if="contentShow">
          111
        </div>
      </el-popup>
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
