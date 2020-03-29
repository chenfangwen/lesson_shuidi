<template>
  <transition name="currentList">
    <div class="playlist" v-show="showList" @click="hide">
      <div class="list-wrapper">
        <div class="list-header">
          <h1 class="title">
            <img src="../assets/cycle.png" alt="">
            <span class="text">顺序循环
              (<span class="count">10</span>)
            </span>
            <span class="clear" >
                清空
            </span>
          </h1>
        </div>
        <div class="list-content">
            <div class="listItem" v-for="(item,index) in curList" :key="index">
                <div class="name">{{item.name}}</div>
                <div class="singer">-{{item.ar[0].name}}</div>
                <div class="delete">X</div>
            </div>
        </div>
        <!-- <scroll ref="listContent" class="list-content" :data="sequenceList" :refreshDelay="refreshDelay">
          <transition-group name="list" tag="ul">
            <li class="item" ref="listItem"
            @click="selectItem(item, index)"
            v-for="(item, index) in sequenceList" :key="item.id">
              <i class="current fa" :class="getCurrentIcon(item)"></i>
              <span class="text">{{item.name}}</span>
              <span class="delete" @click.stop="deletOne(item)">
                <i class="icon-delete"></i>
              </span>
            </li>
          </transition-group>
        </scroll> -->
        <div @click="hide" class="list-close">
          <span>关闭</span>
        </div>
      </div>
      <!-- <confirm ref="confirm" @confirm="confirmClear" text="是否清空播放列表" confirmBtnText="清空"></confirm> -->
    </div>
  </transition>
</template>


<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            showList:false
        }
    },
    computed:{
        ...mapState(['curList'])
    },
    methods:{
        ...mapActions(['']),
        show(){
            this.showList = true
        },
        hide(){
            this.showList = false
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
        position: relative;
        padding: 20px 30px 10px 20px;
        .title {
          display: flex;
          align-items: center;
          .iconfont {
            margin-right: 10px;
            font-size: 20px;
            color: #757575; 
          }
          .text {
            flex: 1;
            font-size: 14px;
            color:  #2E3030;
            .count {
              position: relative;
              top: 1px;
            }
          }
          .clear {
            @include extend-click();
            .icon-clear {
              font-size:14px;
              color:  #757575; 
            }
          }
        }
      }
      .list-content {
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
          .text {
            flex: 1;
            @include no-wrap();
            line-height: 20px;
            font-size: 14px;
            color: #2E3030;
          }
          .delete {
            @include extend-click();
            font-size: 11px;
            color:  rgb(212, 68, 57);
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