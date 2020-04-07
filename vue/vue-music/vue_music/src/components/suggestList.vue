<template>
    <transition name="confirm-fade">
    <div class="confirm" v-show="query!=''" @click.stop="hide">
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">搜索 "{{query}}"</p>
          <div class="singers">
              <div @click="changeSearch(suggest)" class="singer" v-for="(suggest,index) in suggestList" :key="index">
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
    },
    methods:{
        changeSearch(suggest){
            this.query = ''
            this.$emit('changeSearch',suggest)
        }
    }
}
</script>

<style scoped lang="stylus">
  .confirm {
    position: fixed;
    left: 20px;
    width 75%
    top: 135px;
    
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
        box-shadow 0 0 10px  #f2f2f2
        .text {
          padding: 12px 15px;
          line-height: 22px;
          text-align: left ;
          font-weight 600
          font-size: 16px;
          color:  #2E3030;
          border-bottom  1px solid #e4e4e4;

        }
        .singers {
          align-items: center;
          text-align: left ;
          font-size: 16px;
          color:  #2E3030;
          
          .singer{
            padding 10px 15px 10px 15px
            border-bottom  1px solid #e4e4e4;
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