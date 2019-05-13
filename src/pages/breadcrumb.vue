<template>
    <div>
      <p>breadcrumb</p>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: item.url }" v-for="item in breadCrumb">{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
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

<style scoped>
</style>
