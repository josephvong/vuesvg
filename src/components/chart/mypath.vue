<template>
 <!--  <path class="mypath" v-bind:d="prosD" v-bind:fill="enddata.color" ></path> -->
 <text x="50" y="30" font-size="20" text-anchor="start">{{startdata}}}</text>
</template>

<script>

export default {
  name: 'mypath',
  props:{
    /*startdata:{
      type:Object,
      default(){
        return{X:0,Y:0,x:0,y:0,color:""}
      }
    },
    enddata:{
      type:Object,
      default(){
        return{X:0,Y:0,x:0,y:0,color:""}
      }
    },*/
    startdata:null,
    enddata:null,
    R:{
      type:Number,
      default:0
    },
    r:{
      type:Number,
      default:0
    },
  },
  computed:{
    prosD(){
      let S=this.startdata;
      let E=this.enddata;
      let R=this.R;
      let r=this.r;
      let str=`M${S.X},${S.Y} A${R},${R},0,0,1,${E.X},${E.Y} L${E.x},${E.y} A${r},${r},0,0,0,${S.x},${S.y}`;
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
