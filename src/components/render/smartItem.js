
var ImgItem = {
  props:['nodeInfo'],
  render:function(createElement){
    return createElement('div',[
      createElement('p','图片组件'),
      createElement("img",{
        attrs:{
          'src':this.nodeInfo.url
        }
      })
    ])
  }
}

/*var VideoItem = {
  props:['nodeData'],
  render:function(createElement){
    return createElement('div',[
      createElement('p','视频组件'),
      createElement('video',{
        attrs:{
          src:this.data.url,
          controls:'controls',
          autoplay:'autoplay'
        }
      })
    ])
  }
}*/

var TextItem = {
  props:['nodeInfo'],
  render:function(createElement){
    return createElement('div',[
      createElement('p','文本组件'),
      createElement("p",this.nodeInfo.text)
    ])
  }
}

export default{   // 整个export 的对象 将会被 封装作为一个 节点 "<smartItem>""
  name:"smartItem",
  functional: true, // 使当前组件没有状态（deat）和 实例（this）, 下面render() 中的context代表this

  props:{  // 在使用 smartItem 组件时传入的数据，根据传入的属性 来判断 使用哪一种组件
    nodeInfo:{
      type:Object,
      required:true
    }
  },
  render : function(createElement,context){ // render() 函数第二个参数是 context 上下文(表示当前此组件的实例)
    function getComponent(){  // 用于判断使用上面声明的那个 VNode 组件
      var nodeInfo = context.props.nodeInfo;  // 获取上文 的 props 的data
      //console.log(nodeInfo);
      if(nodeInfo.type === 'img') {  // 根据 data.type 来定义使用那总类型的 组件Item
        return ImgItem
      }else{
        return TextItem
      }
    }
    getComponent();
    return createElement( // 返回 createElement() 函数的执行结果
      getComponent(),  // 第一个参数为 “getComponent()” 的返回值
      {                // 第二个参数是 Vnode 节点数据, 用上下文的 props
        props:{
          nodeInfo:context.props.nodeInfo
        }
      },
      context.children   // 第三个参数为 smartItem 在使用时，添加到里面的子节点
    )
  }
}