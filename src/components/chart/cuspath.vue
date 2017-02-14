<template>
  <path class="cuspath" v-bind:d="prosD" v-bind:fill="color" ></path>
</template>

<script>

export default {
  name: 'cuspath',
  props:{
    startIn:{
      type:Object,
      default(){
        return {x:0,y:0}
      }
    },
    startOut:{
      type:Object,
       default(){
        return {x:0,y:0}
      }
    },
    endIn:{
      type:Object,
       default(){
        return {x:0,y:0}
      }
    },
    endOut:{
      type:Object,
      default(){
        return {x:0,y:0}
      }
    },
    R:{
      type:Number,
      default:0
    },
    color:{
      type:String,
      default:""
    }
  },
  computed:{
    prosD(){
      let si=this.startIn;
      let so=this.startOut;
      let ei=this.endIn;
      let eo=this.endOut;
      let R=this.R;
      let r=this.r;
      let str=`M${so.x},${so.y} A${R},${R},0,0,1,${eo.x},${eo.y} L${ei.x},${ei.y} A${R*0.6},${R*0.6},0,0,0,${si.x},${si.y}`;
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
