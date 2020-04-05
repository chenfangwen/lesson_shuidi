<template>
  <transition name="confirm-fade">
    <div class="confirm" v-show="ifShow" @click.stop="hide">
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">{{text}}</p>
          <div class="singers">
              <div class="singer" @click="toSinger(singer.id)" v-for="(singer,index) in singers" :key="index">
                  {{singer.name}}
              </div>
            <!-- <div @click="cancel" class="operate-btn left">{{cancelBtnText}}</div>
            <div @click="confirm" class="operate-btn">{{confirmBtnText}}</div> -->
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>



<script>
export default {
  props: {
    text: {
      type: String,
      default: '请选择要查看的歌手'
    },
    singers: {
        type:Array,
        default:''
    }
  },
  data () {
    return {
      ifShow: false
    }
  },
  methods: {
    show () {
      this.ifShow = true
    },
    hide () {
      this.ifShow = false
    },
    toSinger(id){
        this.$router.push({
            path:`/singer/${id}`
        })
    }
  }
}
</script>

<style scoped lang="stylus">
  .confirm {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
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