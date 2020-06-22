<template>
  <div class="users-container container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/users' }">用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-table
        :data="userList"
        stripe
        style="width: 100%"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
        <el-table-column prop="name" label="用户名">
          <template slot-scope="scope">
            <div v-show="!ifUpdate">{{scope.row.name}}</div>
            <div v-show="ifUpdate">
                 <el-input placeholder="请输入用户名"
                    v-model="user.name">
                </el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="pwd" label="密码">
          <template slot-scope="scope">
            <div v-show="!ifUpdate">{{scope.row.pwd}}</div>
            <div v-show="ifUpdate">
                <el-input placeholder="请输入密码"
                    v-model="user.pwd">
                </el-input>
            </div>
          </template>
        </el-table-column>
        <el-table-column width="80" label="操作">
          <template >
            <el-button v-show="!ifUpdate" type="text" @click="update">修改</el-button>
            <el-button v-show="ifUpdate" type="text" @click="cacle">取消</el-button>
            <el-button v-show="ifUpdate" type="text" @click="submit(user.name,user.pwd)">提交</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import api from "../config";
import { mapState } from "vuex";
export default {
  name: "users",
  data() {
    return {
      user: {
        name: '',
        pwd: ""
      },
      ifUpdate: false,
      userList: [],
      addModal: false,
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  computed: mapState({
    curUser: state => state.curUser
  }),
  methods: {
      submit(name, pwd) {
          let oldname = this.curUser
          this.http.post(`${api.userApi}/update` ,{
              oldname,
              name, pwd
          }).then(res => {

          })
      },
      cacle() {
          this.ifUpdate = false
      },
      update() {
          this.ifUpdate = true
          this.user.name = this.curUser
      },
    getUserList() {
      this.http
        .get(`${api.userApi}/list`, {
          params: {
            name: this.curUser
          }
        })
        .then(res => {
          if (res.data.result) {
            this.userList = res.data.data;
          } else {
            this.$message.error(res.data.msg);
          }
        })
        .catch(err => {
          this.$message.error(err);
        });
    }
  },
  created() {
    this.getUserList();
  }
};
</script>

<style lang="stylus" scoped></style>
