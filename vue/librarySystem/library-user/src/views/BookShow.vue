<template>
  <div class="bookshow">
    <el-tabs v-model="tabActive" >
      <el-tab-pane label="馆存" name="store">
        <div class="header">
          <el-select v-model="status" placeholder="筛选">
            <el-option
              v-for="item in bookStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-input
            v-model="keyStore"
            prefix-icon="el-icon-search"
            autofocus
            placeholder="请输入图书名字进行搜索"
            clearable
          ></el-input>
          <el-button type="primary" plain @click="getBookData">搜索</el-button>
        </div>
        <div class="content">
          <el-table
            :data="bookData"
            stripe
            style="width: 100%"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            refs="onshelfTable"
          >
            <el-table-column label="封面" width="120">
              <template slot-scope="scope">
                <img :src="scope.row.image" width="80" alt="图书封面" />
              </template>
            </el-table-column>
            <el-table-column prop="title" label="书名"></el-table-column>
            <el-table-column prop="author" label="作者"></el-table-column>
            <el-table-column prop="publisher" label="出版社"></el-table-column>
            <el-table-column prop="summary" label="简介" show-overflow-tooltip></el-table-column>
            <el-table-column prop="count" label="库存" show-overflow-tooltip></el-table-column>
            <el-table-column prop="status" label="状态" width="80">
              <template slot-scope="scope">{{scope.row.status === 1 ? '在架' : '借出'}}</template>
            </el-table-column>
            <el-table-column width="80" label="操作">
              <template slot-scope="scope">
                <el-button
                  v-show="scope.row.count >= 1"
                  type="text"
                  @click="borrow(scope.row.title,scope.row.image)"
                >借阅</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import api from '../config'
import moment from 'moment'
import {mapState,mapActions} from "vuex"
export default {
  name: "books",
  data() {
    return {
      tabActive: "store",
      key: "",
      keyStore: "",
      recordList: [],
      bookData: [],
      bookStatus: [
        {
          label: "所有图书",
          value: 0
        },
        {
          label: "在架图书",
          value: 1
        }
      ],
      status: 0
    };
  },
   computed:mapState({
        curUser:(state) => state.curUser
    }),
  methods:{
    getBookData() {
    this.http
        .get(`${api.bookApi}`, {
            params: {
                status: this.status,
                title: this.keyStore
            }
        })
        .then(res => {
        if (res.data.result) {
            this.bookData = res.data.data;
        } else {
            this.$message.error("查询失败");
        }
        })
        .catch(() => {
        this.$message.error("error");
        });
    },
    borrow (title,image) {
        console.log(moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),'---')
        this.http.post(api.borrowAdd, {
            title,
            name: this.curUser,
            borTime: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            lendTime: moment(Date.now() + 2592000000).format('YYYY-MM-DD HH:mm:ss'),
            isLend: 0,
            image
        })
        this.getBookData()
    },
    searchStore() {}
  },
  mounted() {
      this.getBookData()
  }
};
</script>


<style lang="stylus" scoped>
.container {
    .el-breadcrumb {
        position: absolute;
        top: 60px;
        left: 200px;
        height: 48px;
        line-height: 48px;
        background-color: #fff;
        width: 100%;
        padding-left: 20px;
        border-bottom: 1px solid $border-color;
        .el-breadcrumb__inner {
            font-weight: bolder!important;
        }
    }
    .header {
        margin-bottom: 20px;
        .el-select {
            width: 120px;
            .el-input {
                width: 100%;
            }
        }
        .el-input {
            width: 300px;
        }
    }
}
</style>