<template>
  <div class="tabB">
    tab B {{username}} with id : {{insideId}}
  </div>
</template>

<script>


export default {
  name: 'tabB',
  data(){
    return {
      insideId:this.$route.params.userid,
      username:this.$route.query.name
    }
  },
  computed:{

  },
  methods:{

  },
  mounted(){
   //console.log(this.$route);
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.tabB
  width 100%
  height 100%
</style>
