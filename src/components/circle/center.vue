<template>
  <g class="center" >
    <circle v-bind:cx="centerpoint.x" v-bind:cy="centerpoint.y" r="50" style="fill:white; stroke:black; stroke-width:1px" ></circle>
    <text v-bind:x="centerpoint.x" v-bind:y="centerpoint.y+8" font-size="20" text-anchor="middle">{{pointdata.text}}</text> 
  </g>
</template>

<script>
 

export default {
  name: 'center',
  props:{
    centerpoint:{  // 圆心坐标
      type:Object,
      default(){ return {x:0,y:0} }
    },
    pointdata:{ // 圆心内容
      type:Object,
      default(){return {content:"",r:"50"}}
    }

  },
  components: {
     
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

 
    
</style>
