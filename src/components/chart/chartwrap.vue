<template>
  <svg xmlns="http://www.w3.org/2000/svg" class="chartwrap" ref="field">
    <g >
      <text x="100" y="100" font-size="20" text-anchor="start">{{outerpoint[1]}}</text>
      <!-- <group v-bind:pointlist="outerpoint"/> -->
    </g>
  </svg>
</template>

<script>
import TWEEN from "tween.js"
//import part from "./part.vue"
//import mypath from "./mypath.vue"
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
      //outerpoint:[{x:center.x+this.radius,y:center.y}],
      //innerpoint:[{x:center.x+this.radius*0.6,y:center.y}]
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
    outerpoint(){

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
  watch:{

  },
  methods:{
    pathcreate(a,b,c,d,color){
      let R=this.radius;
      let oPath=document.createElementNS('http://www.w3.org/2000/svg' , "path");
      oPath.setAttribute('d',`M${a.x},${a.y} A${R},${R},0,0,1,${b.x},${b.y} L${c.x},${c.y} A${R*0.6},${R*0.6},0,0,0,${d.x},${d.y}`) ;
      oPath.setAttribute('fill',color);
      return oPath;
    },
     pathnew(a,b,c,d,color){
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
    init(){
      let vm=this;
      let num=0;

      function animate(time){
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({tweeningNumber:0}).to({ tweeningNumber: 360 },500).onUpdate(function(){
          let Outer=[vm.outerpoint];
          let Inner=[vm.innerpoint];

          num=this.tweeningNumber.toFixed(0)/360;
          for(let i=0; i<vm.chartangle.length;i++){
            let out={x:0,y:0};  let inn={x:0,y:0};
            out.x=Math.cos( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius + vm.center.x;
            out.y=Math.sin( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius + vm.center.y;
            Outer.push(out);

            inn.x=Math.cos( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius*0.6 + vm.center.x;
            inn.y=Math.sin( vm.chartangle[i].end * num * Math.PI/180 ) * vm.radius*0.6 + vm.center.y;
            Inner.push(inn);
          }
          for(let i=0; i<Outer.length;i++){
            if(i == Outer.length-1){
              break;
            }
            let newPath=vm.pathnew(Outer[i],Outer[i+1],Inner[i+1],Inner[i],vm.chartdata[i].color)
            vm.$refs.field.appendChild(newPath)
          }

        }).easing(TWEEN.Easing.Linear.None).start()
      animate()
    }
  },
  components: {
    group:group
  },
  mounted(){

    //console.log(this.$refs.field);
    //let oTxt=this.pathnew({x:520,y:200},{x:330,y:310},{x:360,y:280},{x:460,y:200},"red")
    //this.$refs.field.appendChild(oTxt);
    this.$nextTick(function(){
      this.init();
     // console.log(this.outerpoint);
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.chartwrap
  width 100%
  height 100%
</style>
