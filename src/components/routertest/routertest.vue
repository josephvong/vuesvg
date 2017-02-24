<template>
  <div class="testwrap">
    userId is : {{userid}}
    <div class="sub-link">
      <div class="link" v-on:click="selecting"><router-link to="/tab_a">tab a</router-link></div>
      <div class="link"><router-link class="link" to="/tab_b">tab b</router-link></div>

    </div>
    <div class="wrap">
      <router-view >

      </router-view>
    </div>
  </div>
</template>

<script>
import router from '../../router.js'

export default {
  name: 'routertest',
  data(){
    return {
      userid:this.$route.params.userid // 从 vue 实例中的“$route.params” 中获取url传过来的信息
    }
  },
  computed:{

  },
  methods:{
    selecting(){
      //alert("A")
      console.log(event.target.innerHTML);
     // alert(window.userId);
    }
  },
  mounted(){
    router.push({"path":"/tab_a"})
    //console.log(this.$route.params)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.testwrap
  width 100%
  height 100%
  &>.sub-link
    width:100%
    height:30px
    &>.link
      display:inline-block
      height:100%
      padding:0 10px
      margin:0 10px
      line-height:30px
      font-size:16px
  &>.wrap
    width:90%
    height:300px
    border:1px solid blue
    margin :20px auto
</style>
