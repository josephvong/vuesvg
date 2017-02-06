<template>
  <div class="app">
     <wrap v-bind:centerdata="center" v-bind:otherdata="others"/>
  </div>
</template>

<script>
import wrap from "./components/svg/wrap.vue"

export default {
  name: 'app',
  data(){
    return{
      center:{text:"科鲁兹",r:'50'},
      others:[{text:"1",r:'30'},{text:"2",r:'30'},{text:"3",r:'30'},{text:"4",r:'30'},{text:"5",r:'30'},{text:"6",r:'30'},{text:"7",r:'30'},{text:"8",r:'30'},{text:"9",r:'30'},]
    }
    
  },
  components: {
     wrap:wrap
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
    
</style>
