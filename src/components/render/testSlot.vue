<template>
  <div>
     <p>{{text}}</p>
     <p style="color:green"><slot></slot></p>
     <p style="color:red"><slot name="red_p"></slot></p>
  </div>
</template>

<script>

export default {
  name: 'render',
  props:{

  },
  data(){
    return {
       text: "hello world"
    }
  },
  computed:{

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
