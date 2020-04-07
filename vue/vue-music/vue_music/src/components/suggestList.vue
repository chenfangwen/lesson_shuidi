<template>
    <transition name="confirm-fade">
    <div class="confirm" v-show="query!=''" @click.stop="hide">
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">搜索 "{{query}}"</p>
          <div class="singers">
              <div class="singer" v-for="(suggest,index) in suggestList" :key="index">
                  {{suggest.name}}
              </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    props:{
        query:{
            type:String,
            default:''
        },
        suggestList: {
            type:Array,
            default:[]
        }
    }
}
</script>

<style scoped lang="stylus">
  .confirm {
    position: fixed;
    left: 20px;
    width 75%
    top: 50px;
    z-index: 998;
    background-color: rgba(0, 0, 0, 0.3);
    &.confirm-fade-enter-active {
      animation: confirm-fadein 0.3s;
      .confirm-content {
        animation: confirm-zoom 0.3s;
      }
    }
    .confirm-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      .confirm-content {
        width: 270px;
        border-radius: 5px;
        background: #fff;
        .text {
          padding: 12px 15px;
          line-height: 22px;
          text-align: left ;
          font-weight 600
          font-size: 16px;
          color:  #2E3030;
        }
        .singers {
          align-items: center;
          text-align: center;
          font-size: 16px;
          color:  #2E3030;
          .singer{
            padding 0 0 20px 0
          }
        }
      }
    }
  }
  @keyframes confirm-fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes confirm-zoom {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>