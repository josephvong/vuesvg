<template>
  <div class="app">
    <h1 class="title">SVG Pratice</h1>
    <ul class="linkhead">
      <li v-on:click="selectData('circle')">
        <router-link class="link" to="/circle">circle</router-link>
      </li>
      <li v-on:click="selectData('path')">
        <router-link class="link" to="/path" >path</router-link>
      </li>
      <li v-on:click="selectData('chart')">
        <router-link class="link" to="/chart" >chart</router-link>
      </li>
      <li v-on:click="selectData('routertest')">
        <router-link class="link" v-bind:to="routertest" >routertest</router-link>
      </li>
      <li v-on:click="selectData('render')">
        <router-link class="link" to="/render" >render</router-link>
      </li>
    </ul>
    <div class="wrap">
      <router-view>

      </router-view>
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      //定义routertest 组件的连接路径，给连接添加
      routertest:"/routertest/"+ window.userId||"0000"
    }
  },
  computed:{
  },
  methods:{
    selectData(name){
      //console.log(name);
     // alert(window.userId);
    }
  },
  components: {
     // circlewrap:circlewrap,
     // chartwrap:chartwrap
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  .title
    text-align:center
    margin:20px auto
    color:red
  .linkhead
    width:900px
    height:50px
    margin:0 auto
    display:flex
    display:-webkit-flex
    flex-flow:row no-wrap
    -webkit-flex-flow:row no-wrap
    justify-content: space-around
    -webkit-justify-content: space-around
    li
      display:inline-block
      flex:0 1 auto
      -webkit-flex:0 1 auto
      height:50px
      line-height:50px
      text-align:center
      &>.link
        line-height:50px
        font-size:20px
        text-align:center
  &>.wrap
    width:740px
    height:400px
    border:1px solid red
    margin :20px auto
    background : url('./assets/bg.jpg') no-repeat 0 0

</style>
