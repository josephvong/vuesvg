<template> 
    <div class="wrap">
      <svg xmlns="http://www.w3.org/2000/svg">
          <g>
            <connect v-for="point in otherpoint" v-bind:startpoint="centerpoint" v-bind:endpoint="point" /> 
          </g>  
          <center v-bind:centerpoint="centerpoint" v-bind:pointdata="centerdata" /> 
      </svg>
    </div> 
</template>

<script>
import center from "./center.vue"
import connect from "./connect.vue"
import other from "./other.vue"
export default {
  name: 'wrap',
  props:{
    centerdata:{  // 中心 圆的内容/大小
      type:Object,
      default(){ return { text:"", r:"50" } }
    },
    otherdata:{  // 其他圆的内容/大小
      type:Array,
      default:[]
    }
  },
  data(){
    return {  
      width:740, // wrap的宽
      height:400, //wrap的高
      direct:160,  //离开中心圆的距离 
      //otherpoint:[]
    }
  },
  computed:{
     centerpoint(){  // 中间圆的坐标
        let cent={x:0,y:0}
        cent.x=this.width/2;
        cent.y=this.height/2;
        return cent
     },
     otherpoint(){  // 周边圆的圆心坐标数组 
        let arr=[];
        for (var i=0; i < 9; i++) {
          let obj={x:0,y:0}
          obj.x=this.centerpoint.x+Math.round(Math.cos(40*i*Math.PI/180)*this.direct);
          obj.y=this.centerpoint.y+Math.round(Math.sin(40*i*Math.PI/180)*this.direct);
          obj=Object.assign(obj,this.otherdata[i])
          arr.push(obj)
        }
        return arr;
     }, 
  },
  components: {
     center:center,
     connect:connect,
     other:other
  },
  mounted(){
    console.log(this.otherpoint)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrap
  width:740px
  height:400px
  border:1px solid red
  margin :20px auto
  background : url('../../assets/bg.jpg') no-repeat 0 0
  svg
    width 100%
    height 100%
      
</style>
