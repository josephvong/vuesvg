<template>
  <g class="other" v-on:mouseenter="hoverHandle" v-on:mouseleave="leaveHandle">
    <circle ref="circle" v-bind:cx="pointdata.x" v-bind:cy="pointdata.y" v-bind:r="animateR" stroke="black" style="fill:white;  stroke-width:1px" ></circle>
    <text v-bind:x="pointdata.x" v-bind:y="pointdata.y+6" font-size="16" text-anchor="middle">{{animateNum}}</text>
  </g>
</template>

<script>
import TWEEN from "tween.js"

export default {
  name: 'other',
  props:{
    pointdata:{  // 圆心坐标
      type:Object,
      default(){ return {x:0,y:0,text:"",r:"30"} }
    },
  },
  data(){
    return {
      inside:0,
      radius:0,
      animateR:0,
      animateNum:0,
    }
  },
  methods:{
    hoverHandle(){
      //this.$refs.circle.setAttribute("r","50")
      this.$refs.circle.setAttribute("stroke","red") ;
      this.inside=this.inside*3;
      this.radius=this.radius*1.5;


    },
    leaveHandle(){
      this.$refs.circle.setAttribute("stroke","black");
      this.inside=this.inside/3;
      this.radius=this.radius/1.5;
    }
  },
  watch:{
    inside:function(newValue,oldValue){
      let vm=this
      function animate(time){
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({tweeningNumber:oldValue}).to({ tweeningNumber: newValue }, 500).onUpdate(function(){vm.animateNum=this.tweeningNumber.toFixed(0)}).start()
      animate()
    },
    radius:function(newValue,oldValue){
      let vm=this
      function animate(time){
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({tweeningNumber:oldValue}).to({ tweeningNumber: newValue }, 1000).onUpdate(function(){vm.animateR=this.tweeningNumber.toFixed(0)}).easing(TWEEN.Easing.Bounce.Out).start()
      animate()
    },
  },
  mounted(){
    this.inside =parseInt(this.pointdata.text);
    this.radius =parseInt(this.pointdata.r);
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">



</style>
