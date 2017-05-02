<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="chartwrap">
    <g ref="field">
    </g>
    <g>
        <text v-for="item in textpoint" text-anchor="middle" font-size="20"
              v-bind:x="item.x-10"
              v-bind:y="item.y"
        >{{item.text}}</text>
    </g>
  </svg>
</template>

<script>
import TWEEN from "tween.js"
//import part from "./part.vue"
//import cuspath from "./cuspath.vue"

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
        {precent:8,text:"QQ",color:"pink"},
        {precent:8,text:"知乎",color:"yellow"},
        {precent:23,text:"网易",color:"green"},
        {precent:12,text:"阿里",color:"black"},
        {precent:14,text:"豆瓣",color:"gray"}
      ],
      // outArr:[],
      // inArr:[]
    }
  },
  computed:{
    center(){  // 中间圆的坐标
      let cent={x:0,y:0}
      cent.x=this.width/2;
      cent.y=this.height/2;
      return cent
    },
    colorArr(){
      let arr=[];
      for(let i=0; i<this.chartdata.length;i++){
        arr.push(  this.chartdata[i].color );
      }
      return arr;
    },
    outerpoint(){  //
      return {x:this.center.x+this.radius,y:this.center.y}
    },

    innerpoint(){
      return {x:this.center.x+this.radius*0.6,y:this.center.y}
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
  methods:{
     pathnew(a,b,c,d,color){  // 动态生成扇形路径图
      let R=this.radius;
      let oPath=document.createElementNS('http://www.w3.org/2000/svg' , "path");
      oPath.setAttribute('d',`M${a.x},${a.y} A${R},${R},0,0,1,${b.x},${b.y} L${c.x},${c.y} A${R*0.6},${R*0.6},0,0,0,${d.x},${d.y}`) ;
      oPath.setAttribute('fill',color);
      return oPath;
    },
    textcreate(){

      let oText=document.createElementNS('http://www.w3.org/2000/svg' , "text");
      oText.innerHTML="AAAA";
      oText.setAttribute("x",50);
      oText.setAttribute("y",50);
      oText.setAttribute("font-size",20);
      return oText
    },
    chartInit(obj){
      let vm=this;
      let num=0;
      function animate(time){
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({tweeningNumber:0}).to({ tweeningNumber: 360 },300).onUpdate(function(){ // 运动每一步执行一次以下函数
          let Outer=[vm.outerpoint];  // 外圆数组（每次定义新数组，均以水平半径0度作为开始）
          let Inner=[vm.innerpoint];  // 内圆数组（同上）

          num=this.tweeningNumber.toFixed(0)/360;  // 过渡过程
          for(let i=0; i<vm.chartangle.length;i++){ // 轮询角度数组内的每个角度
            let out={x:0,y:0};  let inn={x:0,y:0};
            out.x=Math.cos( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius + vm.center.x;
            out.y=Math.sin( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius + vm.center.y;
            Outer.push(out);  // 每次计算后 将 对应角度 的当前运动进度的角度 生成的外点 放入 外圆数组

            inn.x=Math.cos( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius*0.6 + vm.center.x;
            inn.y=Math.sin( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius*0.6 + vm.center.y;
            Inner.push(inn); // 内圆同上
          }

          for(let i=0; i<Outer.length;i++){ // 然后根据每个外圆/内圆 数组 来生成当前进度下每个角度的扇形
            if(i == Outer.length-1){
              break;
            }
            let newPath=vm.pathnew(Outer[i],Outer[i+1],Inner[i+1],Inner[i],vm.chartdata[i].color) // 生成扇形
            //vm.$refs.field.appendChild(newPath)
            obj.appendChild(newPath)
          }

        }).easing(TWEEN.Easing.Linear.None).start()
      animate()
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.chartInit(this.$refs.field);
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.chartwrap
  width 100%
  height 100%
</style>
