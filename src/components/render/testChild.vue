<template>
  <div>
     <span>{{childText}}</span>
  </div>
</template>

<script>

export default {
  name: 'render',
  props:{
    text:{
      type:String,
      required:true
    }
  },
  data(){
    return {
      //childText: this.text
    }
  },
  computed:{
    childText(){
      return this.text+"hello"
    }
  },
  components:{

  },
  methods:{

  },
  mounted(){
    //console.log(this.nodeData)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
