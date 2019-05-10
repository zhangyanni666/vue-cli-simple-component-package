<template>
    <div>
      <UE :defaultMsg=defaultMsg :config=config ref="ue" v-model="dataEditor"></UE>
    </div>
</template>

<script>
  import UE from './ueditor'
  export default {
    name: '',
    components:{
      UE
    },
    data(){
      return{
        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        dataEditor:""
      }
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    },
    watch:{
      defaultMsg:function(newVal,oldVal){
        console.log(defaultMsg)
      }
    }

  }
</script>

<style scoped>

</style>
