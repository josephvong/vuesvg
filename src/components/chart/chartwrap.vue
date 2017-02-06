<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="chartwrap">
    <g>
      <cuspath v-for="item in pathdata" v-bind:pathdata="item" />
    </g>
  </svg>
</template>

<script>
import cuspath from "./cuspath.vue"
export default {
  name: 'chartwrap',
  data(){
    return {
      width:740, // wrap的宽
      height:400, //wrap的高
      radius:150,
      chartdata:[
        {precent:18,text:"人人",color:"red"},
        {precent:17,text:"微博",color:"blue"},
        {precent:16,text:"知乎",color:"yellow"},
        {precent:23,text:"网易",color:"green"},
        {precent:12,text:"阿里",color:"black"},
        {precent:14,text:"豆瓣",color:"gray"}
      ],
    }
  },
  computed:{
    centerpoint(){  // 中间圆的坐标
      let cent={x:0,y:0}
      cent.x=this.width/2;
      cent.y=this.height/2;
      return cent
    },
    singleangle(){
      let arr=[];
      for(let i=0; i<this.chartdata.length;i++){
        arr.push( Math.round(360*this.chartdata[i].precent/100) );
      }
      return arr;
    },
    chartangle(){
      let arr=[];
      let ang=0;
      for(let i=0; i<this.chartdata.length;i++){
        ang=Math.round(ang+(360*this.chartdata[i].precent/100));
        if(i==this.chartdata.length-1){
          ang=360;
        }
        arr.push(ang);
      }
      return arr;
    },
    textpoint(){
      let arr=[];
      for(let i=0; i<this.chartangle.length;i++){
        let textangle=this.chartangle[i]-Math.round(this.singleangle[i]/2);
        let point={x:0,y:0};

        point.x=this.centerpoint.x + Math.round(Math.cos(Math.PI*textangle/180)*this.radius*1.2);
        point.y=this.centerpoint.y + Math.round(Math.sin(Math.PI*textangle/180)*this.radius*1.2);

        arr.push(point);
      }
      return arr;
    },
    pathpoint(){
      let arr=[];
      let ang=0;

      for(let i=0; i<this.chartangle.length;i++){
        let point={x1:0,y1:0,x2:0,y2:0,x3:0,y3:0,x4:0,y4:0};

        point.x1=this.centerpoint.x + Math.round(Math.cos(Math.PI*ang/180)*this.radius);
        point.y1=this.centerpoint.y + Math.round(Math.sin(Math.PI*ang/180)*this.radius);

        point.x2=this.centerpoint.x + Math.round(Math.cos(Math.PI*this.chartangle[i]/180)*this.radius);
        point.y2=this.centerpoint.y + Math.round(Math.sin(Math.PI*this.chartangle[i]/180)*this.radius);

        point.x3=this.centerpoint.x + Math.round(Math.cos(Math.PI*this.chartangle[i]/180)*this.radius*0.6);
        point.y3=this.centerpoint.y + Math.round(Math.sin(Math.PI*this.chartangle[i]/180)*this.radius*0.6);

        point.x4=this.centerpoint.x + Math.round(Math.cos(Math.PI*ang/180)*this.radius*0.6);
        point.y4=this.centerpoint.y + Math.round(Math.sin(Math.PI*ang/180)*this.radius*0.6);

        ang=this.chartangle[i];
        arr.push(point)
      }
      return arr;
    },
    pathdata(){
      let arr=[];
      for(let i=0; i<this.pathpoint.length;i++){
        let other={
          text:this.chartdata[i].text,
          R:this.radius,
          r:this.radius*0.6,
          ang:this.singleangle[i],
          color:this.chartdata[i].color,
          tx:this.textpoint[i].x,
          ty:this.textpoint[i].y,
          islong:this.singleangle[i]>=180?true:false
        }
        let whole=Object.assign(this.pathpoint[i],other);
        arr.push(whole);
      }
      return arr
    }

  },
  components: {
    cuspath:cuspath
  },
  mounted(){
    // console.log(this.chartangle)
    // console.log(this.pathpoint)
    // console.log(this.singleangle)
    // console.log(this.pathdata)
    // console.log(this.textpoint)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.chartwrap
  width 100%
  height 100%
</style>
