<template>
  <g class="cuspath">
    <path v-bind:d="prosD" v-bind:fill="pathdata.color" ></path>
    <text v-bind:x="pathdata.tx" v-bind:y="pathdata.ty+10" font-size="20" text-anchor="middle">{{pathdata.text}}</text>
  </g>
</template>

<script>

export default {
  name: 'cuspath',
  props:{
    pathdata:{
      type:Object,
      default(){
        return{R:0,r:0,color:"",ang:"",text:"",tx:0,ty:0,x1:0,x2:0,x3:0,x4:0,y1:0,y2:0,y3:0,y4:0,islong:false}
      }
    }
  },
  computed:{
    prosD(){
      let D=this.pathdata;
      let str=`M${D.x1},${D.y1} A${D.R},${D.R},${D.ang},${D.islong?1:0},1,${D.x2},${D.y2} L${D.x3},${D.y3} A${D.r},${D.r},${D.ang},${D.islong?1:0},0,${D.x4},${D.y4}`;
      return str
    }
  },
  components: {

  },
  mounted(){
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
