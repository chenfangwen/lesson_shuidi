<template>
  <div id="app">
    <h1>订单管理</h1>
    <el-table
      v-loading="listLoading"
      :data="list">
      <el-table-column label="ID" prop="_id" align="center" width="80"></el-table-column>
      <el-table-column label="Name" prop="name" align="center" width="200"></el-table-column>
      <el-table-column label="OrderDate" prop="orderDate" align="center" width="200">
        <template slot-scope="{row}">
          <span class="red">{{row.orderDate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" prop="status" align="center" width="200">
        <template slot-scope="{row}">
          <span class="red">{{row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column label="OrderDate" prop="orderDate" align="center" width="200">
        <template slot-scope="{row}">
          <span class="red">{{row.shippingFee}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" prop="status" align="center" width="200">
        <template slot-scope="{row}">
          <span class="red">{{row.total}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page.sync="page"
      :total="total"
      :pageSizee="limit"
      layout="total,prev,pager,next"
      @current-change="handleCurrentPage"
      >

    </el-pagination>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      page:1,
      total:100,
      limit:20,
      listLoading:true,
      list:[
        // {
        //   _id:'adsfasd',
        //   name:'取衣服',
        //   orderDate: new Date(),
        //   status:'completed',
        //   shippingFee:0.2,
        //   total:70
        // },
        // {
        //   _id:'1242',
        //   name:'去一番',
        //   orderDate: new Date(),
        //   status:'created'
        // }
      ]
    }
  },
  methods:{
    handleCurrentPage(page){
      console.log(page)
    }
  },
  mounted(){
    // setTimeout(()=>{
    //   this.listLoading = false
    // }, 1000)
    axios.post('/api/orders',{
      params:{

      }
    })
    .then(res=>{
      console.log(res)
      this.list = res.data.orders
      setTimeout(()=>{
        this.listLoading = false
      }, 1000)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
