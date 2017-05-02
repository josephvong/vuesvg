<template>
  <smartItem :data="data"></smartItem>
  <button></button>
</template>

<script>
//import router from '../../router.js'
import myHead from './myHead.vue'
import newHead from './newHead.js'
import smartItem from './smartItem.js'
export default {
  name: 'render',
  props:{ 
     
  },
  data(){
    return {
      data:{}
    }
  },
  computed:{

  },
  components:{
    myHead,
    newHead,
    smartItem
  },
  methods:{ 
     
  },
  mounted(){ 
    
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.renderwrap
  width 100%
  height 100% 
</style>
