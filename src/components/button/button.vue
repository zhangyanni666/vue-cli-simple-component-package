<template>
    <button
      class="el-button"
      :type="nativeType"
      :class="[type?'el-button--'+type :'',buttonSize?'el-button--'+buttonSize:'',
      {
      'is-disabled':buttonDisabled,
      'is-loading':loading,
      'is-plain':plain,
      'is-round':round,
      'is-circle':circle
      }
      ]"
      @click="handleClick"
      :disabled="buttonDisabled||loading"
      :autofocus="autofocus"

    >
      <i class="el-icon-loading" v-if="loading"></i>
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
  export default {
    name: 'ElButton',
    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },
    props:{
      type:{
        type:String,
        default:'default'
      },
      size:String,
      icon:{
        type:String,
        default:''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading:Boolean,
      disabled:Boolean,
      plain:Boolean,
      round:Boolean,
      circle:Boolean,
      autofocus:Boolean
    },
    methods:{
      handleClick:function(evt){
        this.$emit('click',evt)
      }
    },
    computed:{
      buttonDisabled(){
        return this.disabled ||(this.elForm||{}).disabled;
      },
      _elFormItemSize(){
        return (this.elFormItem||{}).elFormItemSize;
      },
      buttonSize(){
        return this.size ||this._elFormItemSize||(this.$ELEMENT)
      }
    }
  }
</script>
<style scoped lang="scss">
@import '../../assets/css/button.scss';
</style>
