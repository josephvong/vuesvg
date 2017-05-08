<template>
  <div class="testwrap">
    userId is : {{userid}}
    <div class="sub-link">
      <div class="link" ><router-link :to="{name:'tab_a',params:{userid:this.userid}}">tab_a</router-link></div>
      <div class="link" v-on:click="pushWithId">tab_b</div>
      <div class="link" ><router-link to="/tab_c">tab_c</router-link></div>
      <div class="link" v-on:click="go_back" >go_back</div>
      <div class="link" >stop router</div>
      <div class="link" >start router</div>
    </div>
    <div class="wrap">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <!-- <div class="wrap">
      <router-view >

      </router-view>
    </div> -->
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
    pushWithId(){  // 带上ID进行路由视区切换的方法 
      let url=`/${event.target.innerHTML}/${this.userid}`; //routertest
      router.push({"path":url,query:{"name":"joseph"}})
    },
    go_back(){  // 返回上一级方法
       router.go(-1)
    },
  },
  beforeRouteEnter (to, from, next) { // 进入 到 当前组件 时触发 
    // 参数to 为 当前 组件的 url
    console.log(from.path);
    next()
  },
  mounted(){ 
    router.push({"name":"tab_a",params:{userid:this.userid}})  
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
    height:100px
    border:1px solid blue
    margin :20px auto
</style>
