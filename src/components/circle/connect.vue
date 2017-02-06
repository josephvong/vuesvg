<template>
  <g class="connect" >
     <line v-bind:x1="startpoint.x" v-bind:y1="startpoint.y" v-bind:x2="endpoint.x" v-bind:y2="endpoint.y" stroke="black" stroke-width="1"></line>
     <rect v-bind:x="linecenter.x" v-bind:y="linecenter.y" width="20" height="20" rx="4" fill="gray"></rect>
     <text v-bind:x="linecenter.x+10" v-bind:y="linecenter.y+16" font-size="16" text-anchor="middle" fill="white">?</text>
     <other v-bind:pointdata="endpoint" /> 
  </g>
</template>

<script> 
import other from "./other.vue"
export default {
  name: 'connect',
  props:{
    startpoint:{
      type:Object,
      default(){return {x:0,y:0} }
    },
    endpoint:{
      type:Object,
      default(){return {x:0,y:0,text:"",r:'30'} }
    }
  }, 
  computed:{
    linecenter(){
      let obj={x:0,y:0}
      obj.x=(this.startpoint.x+Math.round((this.endpoint.x-this.startpoint.x)/2))-10;
      obj.y=(this.startpoint.y+Math.round((this.endpoint.y-this.startpoint.y)/2))-10;
      return obj
    }
  },
  components: {
    other:other
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

 
    
</style>
