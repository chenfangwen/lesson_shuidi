<template>
  <transition name="currentList">
    <div class="playlist" v-show="showList" @click="hide">
      <div class="list-wrapper" @click.stop="donull">
        <div class="list-header">
            <div class=" playtype" @click="changePlayType(playType)">
                <img  src="../assets/b_cycle.png" v-show="playType==1" alt="">
                <img  src="../assets/b_anyone.png" v-show="playType==2" alt="">
                <img  src="../assets/b_onecycle.png" v-show="playType==3" alt="">
                <div v-show="playType==1" class="name">顺序播放</div>
                <div v-show="playType==2" class="name">随机播放</div>
                <div v-show="playType==3" class="name">单曲循环</div>
            </div>
            <div class="deleteall" @click.stop="deleteAll"><img src="../assets/deleteall.png" alt=""></div>
        </div>
        <scroll ref="listContent" class="list-content" :data="curList" :refreshDelay="refreshDelay">
          <transition-group name="list" tag="ul">
            <li class="item" ref="listItem" :class="index==curIndex?'active':''"
            @click.stop="m_getCur_music(item, index)"
            v-for="(item, index) in curList" :key="item.id">
              <!-- <i class="current fa" :class="getCurrentIcon(item)"></i> -->
              <div class="laba" v-show="curIndex==index"><img src="../assets/laba.png"  alt=""></div>
              <div class="text">{{item.name}}</div>
              <div class="null">-</div>
              <div class="singer">{{item.ar[0].name}}</div>
              <span class="delete" @click.stop="deletOne(item,index)">
                <img src="../assets/deleteone.png" alt="">
              </span>
            </li>
          </transition-group>
        </scroll>
        <div @click="hide" class="list-close">
          <span>关闭</span>
        </div>
      </div>
      <!-- <confirm ref="confirm" @confirm="confirmClear" text="是否清空播放列表" confirmBtnText="清空"></confirm> -->
    </div>
  </transition>
</template>


<script>
import Scroll from './scroll.vue'
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            showList:false,
            refreshDelay:100
        }
    },
    components:{
        Scroll
    },
    computed:{
        ...mapState(['curList','cur_music','curIndex','playType']),
        getCurrentIcon (item) {
            if (this.cur_music.id === item.id) {
                return 'fa-volume-up'
            }
            return ''
        }
    },
    methods:{
        ...mapActions(['getCur_music','getCurIndex','getPlayType','getCurList']),
        m_getCur_music(item,index){
            this.getCur_music(item)
            this.getCurIndex(index)
            console.log(this.curIndex)
        },
        changePlayType(type){
            console.log(type)
            if(type<3){
                this.getPlayType(type+1)
            }else{
                this.getPlayType(1)
            }
        },
        deleteAll(){
          let arr = []
          this.getCurList(arr);
          this.showList = false
        },
        deletOne(item,index){
          console.log(index,this.curIndex)
          if(this.curIndex>index){
            let arr = this.curList;
            arr.splice(index,0);
            this.getCurList(arr);
            let newIndex = this.curIndex - 1
            this.getCurIndex(newIndex)
            this.getCur_music(this.curList[newIndex+1])
            // console.log(this.curIndex)
          }
          if(this.curIndex==index){
            let arr = this.curList;
            arr.splice(index,1);
            this.getCurList(arr);
            // console.log(index,this.curIndex)
            this.getCur_music(this.curList[index])
          }
          else{
            let arr = this.curList;
            arr.splice(index,1);
            this.getCurList(arr);
          }
        },
        show(){
            this.showList = true
        },
        hide(){
            this.showList = false
        },
        donull(){
            return 
        }
    }
}
</script>


<style lang="stylus" scoped>
.playlist {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.3);
    &.list-fade-enter-active, &.list-fade-leave-active {
      transition: opacity 0.3s;
      .list-wrapper {
        transition: all 0.3s;
      }
    }
    &.list-fade-enter, &.list-fade-leave-to {
      opacity: 0;
      .list-wrapper {
        transform: translate3d(0, 100%, 0);
      }
    }
    .list-wrapper {
      position: absolute;
      left: 0;
      bottom: 20px;
      left 5%
      width: 90%;
      border-radius:8px
    //background-color: #F2F3F4;
      background-color #fff
      .list-header {
        display: flex;
        height 40px
        .playtype{
          margin-left 20px
          display flex
          height 40px
          img{
              margin-top 10px
              height 20px
              widows 20px
          }
          .name{
              margin-left 10px
              line-height 40px
          }
        }
        .deleteall{
          position absolute
          right 20px
          height 40px
          img{
            margin-top 10px
            height 20px
            widows 20px
          }
        }
      }
      .list-content {
        .active{
            color #d81e06
        }
        .listItem{
            height 30px
            display flex
            margin 20px
            .name{
                font-size 16px
                line-height 30px
            }
            .singer{
                font-size 12px
                color #757575
                line-height 32px
            }
            .delete{
                position absolute
                right 20px
                line-height 30px
            }
        }
        max-height: 240px;
        overflow: hidden;
        .item {
          display: flex;
          align-items: center;
          height: 40px;
          padding: 0 30px 0 20px;
          overflow: hidden;
          &.list-enter-active, &.list-leave-active {
            transition: all 0.1s;
          }
          &.list-enter, &.list-leave-to {
            height: 0;
          }
          .fa-volume-up {
            color: rgb(212, 68, 57);
            margin-right: 5px;
          }
          .null{
              margin 0 5px
          }
          .laba{
            position relative
            margin-top 5px
            height 20px
            width 20px
            img{
              height 15px
              width 15px
            }
          }
          .text {
            // flex: 1;
            text-align left
            @include no-wrap();
            line-height: 20px;
            font-size: 14px;
            // color: #2E3030;
          }
          .singer{
            text-align left
            @include no-wrap();
            line-height: 20px;
            font-size: 12px;
            // color: #757575; 
          }
          .delete {
            @include extend-click();
            position absolute
            right 20px
            margin-top 5px
            height 20px
            width 20px
            img{
              height 15px
              width 15px
            }
          }
        }
      }
      .list-close {
        text-align: center;
        line-height: 50px;
        // background:#F2F3F4;

        font-size: 16px;
        color: #2E3030;
      }
    }
}
</style>