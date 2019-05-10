<template>
    <div>
      <p>breadcrumb</p>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
    }
  }
</script>

<style scoped>
</style>
