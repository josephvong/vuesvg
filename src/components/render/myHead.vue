<template>
  <div class="myHead"> 
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-if="level === 6">
      <slot></slot>
    </h6>
  </div>
</template>

<script> 

export default {
  name: 'myHead',
  props:{
   level:{
      type:Number,
      required:true
    },
    /*title:{
      type:String,
      default:''
    },*/
  },
  data(){
    return {
      
    }
  },
  computed:{

  },
  methods:{ 
     
  },
  mounted(){ 
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
