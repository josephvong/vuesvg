<template>
  <div>
    <input ref="priceInp" class="price"
           v-bind:value="price"
           v-on:input = "updatePrice($event.target.value)"

    />
  </div>
</template>

<script>

export default {
  name: 'priceInput',
  //props:['price'],
  props:{
    price:{
      type:Number,
      default:0
    }
  },
  data(){
    return {

    }
  },
  computed:{

  },
  components:{

  },
  methods:{
    updatePrice(price){
      //第一个参数是 input 实时传入的值， 第二个参数是 整个自定义input 的prop
      let result = currencyValidator.parse(price,this.price)
      if(result.warning){
        // 如果input中出现非法值时，将正确的值 替代 input的当前值
        this.$refs.priceInp.value = result.value
      }
      this.$emit('input', result.value) // 向发出“input”事件，并发送 值
    }
  },
  mounted(){

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.price
  border:1px solid red;
  &:hover
    background:rgba(0,0,0,0)
</style>
