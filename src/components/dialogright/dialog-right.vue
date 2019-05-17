<template>
    <el-popup
      @click="handleClick"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
      offset-class="top-left">
      <div class="el-dialog-right">
        <div class="dialog-left-desc">
          <p>点击空白区域</p>
          <p>可收起详情</p>
          <p>
            <i class="el-icon-mouse"></i>
          </p>
        </div>
       <transition
         enter-active-class="animated fadeInRight"
         leave-active-class="animated fadeOutRight"
         @leave="contentLeave"
         @after-enter="contentEnter"
       >
         <div class="dialog-right-desc" v-show="contentShow">
           <slot></slot>
         </div>
       </transition>
      </div>
    </el-popup>
</template>

<script>
  import ElPopup from '../popover/popover';
  export default {
    name: 'ElDialogRight',
    props:{

    },
    components:{
      ElPopup,
    },
    data(){
      return{
        contentShow:false
      }
    },
    methods:{
      handleClick(e){
        this.$emit('click',e)
        if(e) this.contentShow = false;
      },
      afterEnter(){
        this.contentShow = true;
      },
      afterLeave(){
        this.$emit('closed',this);
      },
      contentLeave(){
        this.contentShow = false;
      },
      contentEnter(){
        this.$emit( 'ready', this );
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/dialogright.scss';
</style>
