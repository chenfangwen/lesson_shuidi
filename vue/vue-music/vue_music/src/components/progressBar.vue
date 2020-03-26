<template>
    <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
      @touchstart.prevent="progressTouchStart"
      @touchmove.prevent="progressTouchMove"
      @touchend.prevent="progressTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import {prefixStyle} from '../common/js/dom'
const progressBtnWidth = 16
// const transform = prefixStyle('transform')
export default {
    data(){
        return {
            
        }
    },
    computed:{
    },
    watch:{

    },
    methods:{
        progressClick (e) {
            // 这个有 bug
            // this._offset(e.offsetX)
            const rect = this.$refs.progressBar.getBoundingClientRect()
            // rect.left 元素距离左边的距离
            // e.pageX 点击距离左边的距离
            const offsetWidth = e.pageX - rect.left
            // console.log(rect, e.pageX)
            this._offset(offsetWidth)
            const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
            const percent = this.$refs.progress.clientWidth / barWidth
            this.$emit('percentChangeEnd', percent)
        },
        _offset (offsetWidth) {
            const btnLeft = offsetWidth - progressBtnWidth
            this.$refs.progress.style.width = `${offsetWidth}px`
            this.$refs.progressBtn.style.left = `${btnLeft}px`
        }
    }
}
</script>


<style scoped lang="stylus">
.progress-bar {
  height: 30px;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);
    .progress {
      position: absolute;
      height: 100%;
      background:  rgb(212, 68, 57);
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 5px solid rgb(241, 241, 241);
        border-radius: 50%;
        background:  rgb(212, 68, 57);
      }
    }
  }
}
</style>