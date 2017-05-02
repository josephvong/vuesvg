<template>
  <div class="tabA">
    tab A {{insideId}} <input type="text" />
  </div>
</template>

<script>


export default {
  name: 'tabA',
  data(){
    return {
      insideId:this.$route.params.userid,
    }
  },
  computed:{

  },
  methods:{

  },
  mounted(){

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tabA
  width 100%
  height 100%
</style>
