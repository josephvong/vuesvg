<template>
  <g >
    <g>
       <cuspath v-bind:startdata="pathList[0]"
                v-bind:enddata="pathList[0]"
                v-bind:R="R"
                v-bind:r="R*0.6"
                v-bind:color="color"
       />
       <cuspath v-for="item in pathData"
                v-bind:startdata="item.startpoint"
                v-bind:enddata="item.endpoint"
                v-bind:R="R"
                v-bind:r="R*0.6"
                v-bind:color="color"
       ></cuspath>
    </g>
    <text v-bind:x="textdata.x" v-bind:y="textdata.y+10" font-size="20" text-anchor="middle">{{textdata.text}}+{{animatestart}}+{{pathList.length}}+{{pathData.length}}</text>
  </g>
</template>

<script>
import cuspath from "./cuspath.vue"
import TWEEN from "tween.js"
export default {
  name: 'part',
  props:{
    center:{
      type:Object,
      default(){return{x:0,y:0}}
    },
    R:{
      type:Number,
      default:0
    },
    color:{
      type:String,
      default:""
    },
    angle:{
      type:Object,
      default(){return {start:0,end:0}}
    },
    textdata:{
      type:Object,
      default(){return{text:"",x:0,y:0}}
    },
    timedata:{
      type:Object,
      default(){return{delay:0,during:0}}
    }
  },
  data(){
    return {
      startangle:this.angle.start,
      animatestart:this.angle.start,
      outerList:[],
      innerList:[],
      pathList:[],
    }
  },
  computed:{
    pathData(){
      let arr=[];

      for(let i=1; i<this.pathList.length;i++){
        let obj={startpoint:null, endpoint:null}
        obj.startpoint=this.pathList[i-1];
        obj.endpoint=this.pathList[i];
        arr.push(obj);
      }

      return arr
    },
  },
  components: {
    cuspath:cuspath,
  },
  watch:{
    startangle:function(newValue,oldValue){

      let vm=this
      function animate(time){
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({tweeningNumber:oldValue}).to({ tweeningNumber: newValue }, vm.timedata.during).onUpdate(function(){
          vm.animatestart=this.tweeningNumber;
          let obj={X:0,Y:0,x:0,y:0}
          obj.X= Math.round(vm.center.x +Math.cos(Math.PI*vm.animatestart/180)*vm.R);
          obj.Y=Math.round(vm.center.y + Math.sin(Math.PI*vm.animatestart/180)*vm.R);
          obj.x=Math.round(vm.center.x + Math.cos(Math.PI*vm.animatestart/180)*vm.R*0.6);
          obj.y=Math.round(vm.center.y + Math.sin(Math.PI*vm.animatestart/180)*vm.R*0.6);

          vm.pathList.push(obj);

        }).delay(0).easing(TWEEN.Easing.Linear.None).start()
      animate()
    }
  },
  methods:{
    creatPathList(){

    }
  },
  mounted(){
    this.startangle=this.angle.end
    //console.log(this.pathList)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
