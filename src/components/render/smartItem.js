 
var ImgItem = { 
  props:['data'],
  render:function(createElement){
    return createElement('div',[
      createElement('p','图片组件'),
      createElement("img",{
        attr:{
          src:this.data.url
        }
      })
    ])
  }
} 

var TextItem = { 
  props:['data'],
  render:function(createElement){
    return createElement('div',[
      createElement('p','文本组件'),
      createElement("p",this.data.text)
    ])
  }
}

export default{
  functional: true,
  render : function(createElement,context){
    function getComponent(){
      var data = context.data;
      if(data.type == 'img') {
        return ImgItem
      }else{
        return TextItem
      }
    }
    return createElement(
      getComponent(),{
        props:{
          data:context.props.data
        },
        context.children
      }
    )
  }
} 