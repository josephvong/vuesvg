
export default {
  props:{
    columns:{ // 传入的列头数据
      type:Array,
      default(){
        return []
      }
    },
    data:{  // 传入的 行数据
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentColumns:[], // 根据 props 设置 组件中的列数据（使用makeColunms()）
      currentData:[] // 根据 props 设置 组件中的行数据（使用makeRow()）
    }
  },
  methods:{
    makeColumns(){ // 创建 组件的 列头 状态数据（可变的）
      this.currentColumns = this.colunms.map((col,index)=>{
        col._sortType = "normal";
        col._index = 'index';
        return col
      })
    },
    makeData(){  // 创建 组件的 行 状态数据 （可变的）
      this.currentData = this.data.map((row,index)=>{
        row._index = index;
        return row;
      })
    }
  },
  render(h){
    const ths=[];
    this.currentColumns.forEach((col,index)=>{
      if(col.sortable){
        this.push(h('th',[
          h('span',col.title),
          h('a',)
          h('a')
        ]))
      }else{
        this.push(h('th',col.title));
      }
    })

    const trs =[];
    this.currentData.forEach((row)=>{
      const tds=[];
      this.currentColumns.forEach((cell)=>{
        tds.push(h('td',row[cell.key]))
      })
      trs.push(h('tr',tds))
    })

    return h('table',[
      h('thead',[h('tr',ths)]),
      h('tbody',trs)
    ])
  },
  computed:{

  },

  components:{

  },
  mounted(){
    this.makeColumns();
    this.makeData();

  }
}



