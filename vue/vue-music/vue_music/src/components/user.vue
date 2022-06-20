<template>
    <transition name="user">
        <div class="user" @touchmove="stop">
            <div :class="['user-popup']" @click="hiddenUser"></div>
            <div v-if="curUser" class="content">
                <div class="switches-wrapper">
                <switches @switch="switchItem" :switches="switchess" :currentIndex="currentIndex"></switches>
                </div>
                <div class="sequence-play">
                <i class="iconfont icon-bofangicon"></i>
                <span class="text">播放全部</span>
                <span class="count">(共{{count}}首)</span>
                </div>
                <scroll  v-if="playHistoryList" class="list-wrapper" :data="playHistoryList" :refreshDelay="refreshDelay">
                    <music-list id="list" :musicList="playHistoryList" @hide="setCurList"/>
                    <!-- {{playHistoryList}} -->
                </scroll>
                <div v-else class="no-result-wrapper">
                    暂无历史记录
                </div>
                <div class="unlogin">
                    <van-button round block type="info" @click="unlogin">退出登录</van-button>
                </div>
            </div>
            <div v-else class="content">
                <van-form>
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px; display: flex;">
                        <van-button round block type="info" @click="login">登录</van-button>
                        <van-button round block type="info" @click="sigin">注册</van-button>
                    </div>
                </van-form>
            </div>
        </div>
    </transition>
</template>
<script>
import {getPlayHistory, setUser, getUser, clearLogin} from '../common/js/util'
import {mapState, mapActions} from 'vuex'
import api from '../api/mysqlreq'
import Scroll from './scroll.vue'
import Switches from './common/switches'
import  MusicList from './musicList'
export default {
  data() {
    return {
        username: '',
        password: '',
        currentIndex: 0,
        noResult: false,
        refreshDelay: 100,
        switchess: [
            {name: '最近播放'},
            {name: '我的收藏'}
        ],
        count: 0,
        playHistoryList: ''
    };
  },
  components: {
      Switches,
      MusicList,
      Scroll
  },
  computed:{
    ...mapState(['curUser'])
  },
  methods: {
    ...mapActions(['getCurList', 'getCurUser']),
    unlogin() {
        clearLogin();
        this.getCurUser('');
    },
    login() {
        // console.log(this.username, this.password)；
        api.login({
            userId: this.username,
            passward: this.password
        }).then(res => {
            // console.log(res.data, 'login');
            if(res.data.msg === '登录失败') {
                this.$toast('用户名或密码错误');
            }
            else {
                this.$toast('登录成功');
                setUser(this.username);
                setTimeout(() => {
                    this.switchItem(this.currentIndex)
                }, 500);
                this.getCurUser(this.username);
            }
        })
    },
    sigin() {
        api.addUser({
            userId: this.username,
            passward: this.password
        }).then(res => {
            // console.log(res.data, 'asdfasd')
            if(res.data.msg === '重复插入') {
                this.$toast('此用户名已存在');
            }
            else {
                this.$toast('注册成功，请登录');
            }
        })
    },
    setCurList() {
        setTimeout(() => {
            this.switchItem(this.currentIndex);
        }, 1000);
        // console.log(this.playHistoryList, 'this.playHistoryList')
    },
    switchItem (index) {
      this.currentIndex = index;
      if (!index) {
        // this.playHistoryList = getPlayHistory();
        // this.playHistoryList = getPlayHistory().split('*/*');
        let playHistoryList = '';
        getPlayHistory(getUser()).then(res => {
            // console.log(res, 'res')
            this.playHistoryList =  res.data.data[0] && res.data.data[0].lastPlay ? res.data.data[0].lastPlay.split('*/*').map((item, index) => {
                // console.log(item+'---', 'item')
                return JSON.parse(item);
            }) : '';
            this.count = this.playHistoryList.length;
            this.getCurList(this.playHistoryList);
        })
        // console.log(this.playHistoryList,'playHistoryList');
      }
      else {
        this.playHistoryList = '';
        this.count= 0;
      }
    },
    stop(e) {
      e.preventDefault();
      return;
    },
    hiddenUser() {
        this.$emit('hiddenuser');
    }
  },
  mounted() {
    this.switchItem(this.currentIndex);
    // localStorage.clear();
  }
};
</script>
<style lang="stylus" scoped>
.user-enter-active, .user-leave-active {
  transition: all 0.3s;
}
.user-leave-to {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
}
.user {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 2;
    .user-popup {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.6;
    }
    .content {
        position: absolute;
        width: 80%;
        height: 100%;
        z-index: 6;
        animation: show ease-in-out 0.3s;
        background-color: #fff;
        .back {
            position: absolute;
            top: 0;
            left: 4px;
            .fa-angle-left {
            padding: 5px 10px;
            font-size: 30px;
            color: #fff;
            }
        }
        .switches-wrapper {
            background-color: #fff;
            display: flex;
            align-items: center;
            background: $color-theme;
            height: 44px;
        }
        .sequence-play {
            background-color: #fff;
            position: absolute;
            top: 44px;
            display: flex;
            align-items: center;
            width: 100%;
            height: 40px;
            border-bottom: 1px solid rgb(228, 228, 228);
            .iconfont {
            font-size: 18px;
            color: $color-text;
            padding-right: 14px;
            }
            .text {
            font-size: $font-size-medium-x;
            }
            .count {
            font-size: $font-size-medium;
            color: $color-text-g;
            }
        }
        .list-wrapper {
            position: absolute;
            z-index: -1;
            top: 84px;
            bottom: 0;
            width: 100%;
            .list-scroll {
            overflow: hidden;
            // width: 100%;
            height: 100%;
            }
        }
        .no-result-wrapper {
            margin-top: 60%;
        }
        .unlogin {
            position: absolute;
            bottom: 60px;
            right: 0;
        }
    }
    .hidden {
        opacity: 0;
    }
}
@keyframes show {
    0% {
        transform: translateX(-50%);
    }
    100%{
        transform: translateX(0);
    }
}
</style>