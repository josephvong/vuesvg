<template>
  <div class="renderwrap">
    <!-- <vTable :columns="colunms" :data="data">
    </vTable> -->
  </div>
</template>

<script>


export default {
  name: 'renderTable',
  props:{

  },
  data(){
    return {
      // 列数据
      columns:[
        {
          title:"姓名",
          key:"name"
        },
        {
          title:"年龄",
          key:"age",
          sortable:true
        },
        {
          title:"出生日期",
          key:"birthday",
          sortable:true
        },
        {
          title:"地址",
          key:"address"
        },
      ],

      // 行数据
      data:[
        {
          name:"AA",
          age:18,
          birthday:'1999-02-08'
        },
        {
          name:"BB",
          age:18,
          birthday:'1999-02-08'
        },
        {
          name:"CC",
          age:13,
          birthday:'1999-02-08'
        },
        {
          name:"DD",
          age:38,
          birthday:'1999-02-08'
        }

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

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.renderwrap
  width 100%
  height 100%
</style>


