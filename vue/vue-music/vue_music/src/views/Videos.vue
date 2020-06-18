<template>
  <div id="videos">
    <!-- <slider-nav :list="chooseListTag"></slider-nav> -->
    <!-- <keep-alive>
      <router-view class="router-view" style="height: 87vh; overflow-y: scroll;"></router-view>
    </keep-alive> -->
  </div>
</template>

<script>
import sliderNav from '../components/common/sliderNav'

export default {
  name: '',
  data () {
    return {
      chooseListTag: [
        {
          path: '/videoPage/musicFestival',
          text: '音乐节'
        }, {
          path: '/videoPage/scene',
          text: '广告'
        }, {
          path: '/videoPage/listenBGM',
          text: '听BGM'
        }, {
          path: '/videoPage/singing',
          text: '娱乐'
        }, {
          path: '/videoPage/dance',
          text: '流行'
        }, {
          path: '/videoPage/ACG',
          text: 'ACG'
        }, {
          path: '/videoPage/rock',
          text: '摇滚'
        }, {
          path: '/videoPage/game',
          text: '游戏'
        }, {
          path: '/videoPage/animation',
          text: '动漫'
        }
      ],
      list: [{
        id: 0
      }]
    }
  },
  created () {
  },
  methods: {
  },
  components: {
    sliderNav
  }
}
</script>

<style lang='stylus' scoped>
#videos{
    position absolute
    top 150px
}
</style>


