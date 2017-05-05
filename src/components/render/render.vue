<template>
  <div>
     <!-- <smartItem v-bind:nodeInfo="nodeInfo"></smartItem> -->
    <testChild :text="test"></testChild>
    <input type="text" style="border:1px solid red" v-model="test"/>
    <button>红</button>
    <button>黄</button>
    <button>蓝</button>
    <br/>

    <priceInput v-bind:price="price" v-on:input="changePrice" ></priceInput>
    <!-- <priceInput v-model:price="price"></priceInput> -->
    <p>{{price}}</p>
    <br/>
    <!--  <testSlot>green<span slot="red_p">red</span></testSlot> -->
    <!-- <testSlot></testSlot> -->

    <slotList >
      <template slot="item" scope="data">
         <li>{{ data.text }}</li>
      </template>
    </slotList>
  </div>
</template>

<script>

import myHead from './myHead.vue' // render 函数测试
import newHead from './newHead.js'  // render 函数测试
import smartItem from './smartItem.js' // render 函数测试
import testChild from './testChild'   // props 的 使用测试
import priceInput from './priceInput'  // 事件 $on 和 $emit 解析 v-model 指令的测试
import testSlot from './testSlot'  // slot 使用测试
import slotList from './slotList'
export default {
  name: 'render',
  props:{

  },
  data(){
    return {
      nodeInfo:{
        'type':"img",
        //'text':'hello'
        'url':"https://m.9kacha.com/activities_t/G100ChinaTour/thumb/01.jpg"
      },
      test:'this is test child',
      price:0,
      items:[
        {text:"1"},{text:"2"},{text:"3"},
      ]
    }
  },
  computed:{

  },
  components:{
    myHead,
    newHead,
    smartItem,
    testChild,
    priceInput,
    testSlot,
    slotList
  },
  methods:{
    changePrice(price){
      return this.price = price
    }
  },
  mounted(){
    //console.log(this.nodeData)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.renderwrap
  width 100%
  height 100%
</style>
