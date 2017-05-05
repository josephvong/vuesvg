<template>
  <ul>
    <!-- <slot name="item" v-for="item in items" :text="item.text">

    </slot> -->
    <slot name="item" v-for="item in items" :text="item.text">

    </slot>
  </ul>
</template>

<script>

export default {
  name: 'render',
  /*props:{

  },*/
  //props:['items'],
  data(){
    return {
      items:[
        {text:"1"},{text:"2"},{text:"3"},{text:"1"},{text:"2"},{text:"3"}
      ]
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
