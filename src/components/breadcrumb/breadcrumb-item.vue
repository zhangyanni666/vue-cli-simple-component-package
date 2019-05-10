<template>
  <span class="el-breadcrumb__item">
    <span
    :class="['el-breadcrumb__inner',to?'is-link':'']"
    ref="link"
    role="link"
    >
      <slot></slot>
    </span>
    <i v-if="separatorClass" class="el-breadcrumb__separator" :class="separatorClass"></i>
    <span v-else class="el-breadcrumb__separator" role="presentation">{{separator}}</span>
  </span>
</template>

<script>
  export default {
    name: 'ElBreadcrumbItem',
    data(){
      return{
        separator:'',
        separatorClass: ''
      }
    },
    props:{
      to:{},
      replace:Boolean
    },
    inject: ['elBreadcrumb'],
    mounted(){
      this.separator = this.elBreadcrumb.separator;
      this.separatorClass = this.elBreadcrumb.separatorClass;
      const link = this.$refs.link;
      link.setAttribute("role","link");
      link.addEventListener("click",()=>{
        console.log($router)
        const{to,$router} = this;
        if(!to||!$router) return ;
        this.replace ? $router.replace(to) : $router.push(to);
      })
    }
  }
</script>

<style scoped>

</style>
