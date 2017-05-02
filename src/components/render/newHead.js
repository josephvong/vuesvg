 
export default {
  name: 'newHead',
  props:{
   level:{
      type:Number,
      //required:true  <p>hello <span style='color:red'>world</span></p><h4>hi</h4>
    }, 
  },
  render:function(createElement){
    return createElement(
      ["div","p"],{},this.$slots.default
    )
  },
  data(){
    return {
      
    }
  },
  computed:{

  },
  methods:{ 
     
  },
  mounted(){ 
    
  }
} 