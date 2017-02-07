<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="chartwrap">
    <g>
      <text x="100" y="100" font-size="20" text-anchor="start">{{pathlist.length}}</text>

      <!-- <group v-bind:pointlist="pathlist" v-bind:radius="radius" /> -->

    </g>
  </svg>
</template>

<script>
import TWEEN from "tween.js"
import part from "./part.vue"
import mypath from "./mypath.vue"
import group from "./group.vue"
export default {
  name: 'chartwrap',
  data(){
    return {
      width:740, // wrap的宽
      height:400, //wrap的高
      time:2000,  // 2s 内完成
      radius:150, // 最长半径
      ang:0,
      moveang:0,
      chartdata:[
        {precent:18,text:"人人",color:"red"},
        {precent:17,text:"微博",color:"blue"},
        {precent:16,text:"知乎",color:"yellow"},
        {precent:23,text:"网易",color:"green"},
        {precent:12,text:"阿里",color:"black"},
        {precent:14,text:"豆瓣",color:"gray"}
      ],
      pathlist:[]
    }
  },
  computed:{
    center(){  // 中间圆的坐标
      let cent={x:0,y:0}
      cent.x=this.width/2;
      cent.y=this.height/2;
      return cent
    },
    singleangle(){  // 单个角度
      let arr=[];
      for(let i=0; i<this.chartdata.length;i++){
        arr.push( Math.round(360*this.chartdata[i].precent/100) );
      }
      return arr;
    },
    chartangle(){ // 单个累计角度
      let arr=[];
      let ang=0;
      for(let i=0; i<this.chartdata.length;i++){
        let obj={start:0,end:0}
        obj.start=ang;
        obj.end=ang+Math.round(360*this.chartdata[i].precent/100);

        ang+=Math.round(360*this.chartdata[i].precent/100);;
        if(i==this.chartdata.length-1){
          obj.end==360;
        }

        arr.push(obj);
      }
      return arr;
    },

    textpoint(){  // 文字坐标
      let arr=[];
      for(let i=0; i<this.chartangle.length;i++){
        let textangle=this.chartangle[i].end-Math.round(this.singleangle[i]/2);
        let point={x:0,y:0,text:""};

        point.x=this.center.x + Math.round(Math.cos(Math.PI*textangle/180)*this.radius*1.2);
        point.y=this.center.y + Math.round(Math.sin(Math.PI*textangle/180)*this.radius*1.2);
        point.text=this.chartdata[i].text
        arr.push(point);
      }
      return arr;
    },

  },
  watch:{
    ang:function(newValue,oldValue){
      let i=0;
      let vm=this
      function animate(time){
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({tweeningNumber:oldValue}).to({ tweeningNumber: newValue }, 1000).onUpdate(function(){
          vm.moveang=this.tweeningNumber.toFixed(0);
          let obj={X:0,Y:0,x:0,y:0,color:''}
          obj.X= Math.round(vm.center.x +Math.cos(Math.PI*vm.moveang/180)*vm.radius);
          obj.Y=Math.round(vm.center.y + Math.sin(Math.PI*vm.moveang/180)*vm.radius);
          obj.x=Math.round(vm.center.x + Math.cos(Math.PI*vm.moveang/180)*vm.radius*0.6);
          obj.y=Math.round(vm.center.y + Math.sin(Math.PI*vm.moveang/180)*vm.radius*0.6);
          obj.color=vm.chartdata[i].color;
          if(vm.moveang>=vm.chartangle[i].end){
            i+=1;
          }

          vm.pathlist.push(obj);

        }).easing(TWEEN.Easing.Linear.None).start()
      animate()
    }
  },
  components: {
    part:part,
    mypath:mypath,
    group:group
  },
  mounted(){
    this.ang=360;
    //console.log(this.pathlist[0])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.chartwrap
  width 100%
  height 100%
</style>
