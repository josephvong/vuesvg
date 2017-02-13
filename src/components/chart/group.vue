<template>
  <g>
    <text x="0" y="30" font-size="20" text-anchor="start">{{pointlist.length}}</text>
    <!-- <text x="30" y="60" font-size="20" text-anchor="start">{{dlist.length}}</text>


     <circle v-for="(item,index) in dlist"
      v-bind:cx="item.X" v-bind:cy="item.Y" r="5" style="fill:transparent;stroke:red;stroke-width:1"></circle> -->

  </g>
</template>

<script>
import mypath from "./mypath.vue"
export default {
  name: 'mypath',
  props:{
    pointlist:{
      type:Array,
      default:[]
    },
    radius:{
      type:Number,
      default:0
    },
  },
  data(){
    return {
      list:[],
    }
  },
  computed:{
    dlist(){
      /*let arr=[];
      for(let i=1; i<this.list.length;i++){
        let obj={d:"",color:""};
        let S=this.pathdata[i-1];
        let E=this.pathdata[i];
        let R=this.radius;
        let r=this.radius*0.6;
        obj.d=`M${S.X},${S.Y} A${R},${R},0,0,1,${E.X},${E.Y} L${E.x},${E.y} A${r},${r},0,0,0,${S.x},${S.y}`;
        obj.color=E.color;
        arr.push(obj);
      }
      return this.pointlist;*/
      let arr=[]
      for(let i=1; i<this.pointlist.length;i++){
        arr.push(this.pointlist[i])
      }
      return arr
    }
  },
  components: {
    mypath:mypath
  },
  mounted(){
    this.$nextTick(function(){
      console.log(this.pointlist[0]);
      this.list=this.pointlist
    })

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
