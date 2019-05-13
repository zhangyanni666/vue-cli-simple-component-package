<template>
    <div>
      <p>breadcrumb</p>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: item.url }" :key="item.id" v-for="item in breadCrumb">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="marginTop10">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: item.url }" :key="item.id" v-for="item in breadCrumb">{{item.title}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
</template>

<script>
  import ElBreadcrumb from '../components/breadcrumb/breadcrumb';
  import ElBreadcrumbItem from '../components/breadcrumb/breadcrumb-item';
  export default {
    name: '',
    components:{
      ElBreadcrumb,
      ElBreadcrumbItem
    },
    data(){
      return {
        breadCrumb:[{
          title:"首页",
          id:"1",
          url:"/"
        },{
          title:"button",
          id:"2",
          url:"/button"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .marginTop10{
    margin-top: 10px;
  }
</style>
