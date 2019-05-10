<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-button type="primary" @click="handleClick">
      primary
    </el-button>
    <el-button type="danger">
      danger
    </el-button>
    <el-button type="success">
      success
    </el-button>
    <el-button type="default">
      default
    </el-button>
    <el-button type="warning">
      warning
    </el-button>

    <el-button size="mini">
      mini
    </el-button>
    <el-button size="small">
      small
    </el-button>
    <el-button size="medium">
     medium
    </el-button>
    <el-button disabled>
      disabled
    </el-button>
    <el-button plain>
      plain
    </el-button>
    <el-button round>
      round
    </el-button>
    <el-button circle>
      circle
    </el-button>
    <el-button round plain>
      round plain
    </el-button>
    <el-button type="success" disabled>
      plain success
    </el-button>
    <el-button type="success" :loading="true">
      loading success
    </el-button>
    <el-button type="success" :loading="true">
      loading success
    </el-button>
    <el-button-group>
      <el-button circle>
        circle
      </el-button>
      <el-button round plain>
        round plain
      </el-button>
    </el-button-group>
  </div>
</template>

<script>
import '../types/alert';
import ElButton from '../components/button/button'
import ElButtonGroup from '../components/button-group/button-group'
export default {
  name: 'HelloWorld',
  components:{
    ElButton,
    ElButtonGroup
  },
  data(){
    return{
      msg:"button",
    }
  },

  methods:{
    handleClick:function(data){
      console.log(data)
    }
  },

  mounted(){

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
