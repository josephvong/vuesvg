<template>
  <div>
     <smartItem v-bind:nodeInfo="nodeInfo"></smartItem>

  <!--<button></button> -->
  </div>
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
      nodeInfo:{
        'type':"img",
        //'text':'hello'
        'url':"https://m.9kacha.com/activities_t/G100ChinaTour/thumb/01.jpg"
      }
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
    //console.log(this.nodeData)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.renderwrap
  width 100%
  height 100%
</style>
