<template>
    <div class="pathwrap">
      <svg xmlns="http://www.w3.org/2000/svg">
        <polygon :points="points"></polygon>
        <circle cx="100" cy="100" r="90"></circle>
      </svg>
      <div class="control">
        <label>Sides: {{ sides }}</label>
        <input type="range" min="3" max="500" v-model="sides" />
        <label>Minimum Radius:Minimum Radius: {{ minRadius }}%</label>
        <input type="range" min="3" max="90" v-model.number="minRadius"/>
        <label>Update Interval:  {{ updateInterval }}  milliseconds</label>
        <input type="range" min="10" max="2000"  v-model.number="updateInterval" />
      </div>
    </div>
</template>

<script>
import TimelineLite from 'gsap';
// 计算每个点的坐标
function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.9
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return { x: tx, y: ty }
}

// 用10个100的数组生成多边形的坐标点
function generatePoints (stats) { 
  var total = stats.length
  return stats.map(function (stat, index) {
    var point = valueToPoint(stat, index, total)
    return point.x + ',' + point.y
  }).join(' ')
}

export default {
  name: 'pathwrap',
  data(){
    let  defaultSides=10 // 默认边为10
    let stats = Array.apply(null,{length:defaultSides}).map(function(){return 100}) // 输出 10 个 “100” 的数组
    console.log(stats);
    return {
      stats: stats, //边数量对应的数组
      points:generatePoints(stats), // 生成对应边数的多边形坐标点
      sides:defaultSides, //  默认的边数
      minRadius:50, // 最少直径
      interval:null,  // 
      updateInterval:500 // 循环事件500ms
    }
  },
  watch:{
    sides: function(newSides, oldSides){
      let sidesDifference = newSides - oldSides // 新生成的边数 - 上一次的边数 (边的变化数)
      if(sidesDifference>0){
        for (var i = 0; i <= sidesDifference; i++) {
          this.stats.push(this.newRandomValue())
        }
      }else {
        var absoluteSidesDifference = Math.abs(sidesDifference)
        for (var i = 1; i <= absoluteSidesDifference; i++) {
          this.stats.shift()
        }
      }
    },
    stats: function (newStats) {
      let vm=this

      TweenLite.to(
        this.$data, 
        this.updateInterval / 1000, 
        { points: generatePoints(newStats) }
      )
    },
    updateInterval: function () {
      this.resetInterval()
    }

  }, 
  methods:{
    randomizeStats(){  // 让边的数组 为 随机半径长度的值
      let vm=this;

      this.stats = this.stats.map(()=>{
        return vm.newRandomValue()
      })
    },

    newRandomValue(){// 限制多边形半径在50-100 之间
      return Math.ceil(this.minRadius + Math.random()*(100-this.minRadius)) 
    },

    resetInterval(){
      clearInterval(this.interval); // 清除计时器
      this.randomizeStats(); // 从新生成边数的数组 
      this.interval = setInterval(()=>{
        this.randomizeStats() // 每500ms 生成一次 多变型数组
      },this.updateInterval)
    }
  },
  mounted(){
   console.log(TweenLite); 
   this.resetInterval() // 渲染组件 执行 数组循环重设函数
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.pathwrap
  position: relative
  width 100%
  height 100%
  
  &>svg
    display: block
    margin: 0 auto
    width:200px
    height:200px
    border:1px solid red
    &>polygon
      fill: #41B883
    &>circle
      fill:transparent
      stroke:red  
  &>.control 
    margin:20px auto
    width:500px
    height:170px
    border:1px solid red
     
    &>label
      line-height: 15px
      font-size : 10px
      margin:0
      padding:0
    &>input[type="range"]
      display: block;
      height:10px
      width: 100%; 
      margin-bottom: 15px

     
  
</style>
