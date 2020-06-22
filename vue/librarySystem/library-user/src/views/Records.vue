<template>
  <div class="records-container container">
    <div class="header">
      <el-input
        v-model="title"
        prefix-icon="el-icon-search"
        autofocus
        placeholder="请输入图书名字进行搜索"
        clearable
      ></el-input>
      <el-button type="primary" plain @click="getRecordList">搜索</el-button>
    </div>
    <div class="content">
      <el-table
        :data="recordList"
        stripe
        style="width: 100%"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <el-table-column label="序号" prop="_id" width="80"></el-table-column>
        <el-table-column label="封面" width="120">
          <template slot-scope="scope">
            <img :src="scope.row.image" width="80" alt="图书封面" />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="借阅书籍"></el-table-column>
        <el-table-column prop="borTime" label="借阅日期"></el-table-column>
        <el-table-column prop="lendTime" label="归还日期"></el-table-column>
        <el-table-column prop="isLend" label="状态">
          <template slot-scope="scope">
              <div v-show="scope.row.isLend === 0 ">借阅中</div>
              <div class="blue" v-show="scope.row.isLend === 1 ">已归还</div>
              <div class="red" v-show="scope.row.isLend === 2 ">催还中</div>
          </template>
        </el-table-column>
        <el-table-column width="80" label="操作">
          <template slot-scope="scope">
            <el-button
              v-show="scope.row.isLend === 0 || scope.row.isLend === 2"
              type="text"
              @click="lend(scope.row._id)"
            >归还</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "../config";
import {mapState,mapActions} from "vuex"
export default {
  name: "records",
  data() {
    return {
      recordList: [],
      recordStatus: [
        {
          label: "所有记录",
          value: 0
        },
        {
          label: "借阅中",
          value: 1
        },
        {
          label: "已归还",
          value: 2
        }
      ],
      status: 0,
      title: ""
    };
  },
  computed:mapState({
        curUser:(state) => state.curUser
    }),
  methods: {
      
    getRecordList() {
        console.log(this.curUser,'----')
      this.http
        .get(`${api.borrowApi}/list`, {
          params: {
            name: this.curUser,
            title: this.title
          }
        })
        .then(res => {
          if (res.data.result) {
            console.log(res.data.result);
            this.recordList = res.data.result;
          } else {
            this.$message.error("查询失败");
          }
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    lend(id) {
        this.http.post(api.lendApi,{
            id
        }).then(res => {
            console.log(res)
        })
        let t_id = setTimeout(() => {
            this.getRecordList()
            clearTimeout(t_id)
        },1000)
    }
  },
  created() {
    this.getRecordList();
    if(window.localStorage.getItem('username')==null){
          window.alert('请先完成登录');
          this.$router.push("/")
      }
  }
};
</script>
<style lang="stylus" scoped>
.red{
    color red
}
.blue{
    color #4c99fe;
}
</style>
