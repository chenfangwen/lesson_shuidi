<template>
  <div id="videos" @touchend="updataVideo">
    <van-grid :column-num="2" :border="false">
      <van-grid-item @click="toViedo(item)" :id="index === allVideo.length-1 ? 'lastVedio' : ''" v-if="item.data.coverUrl" v-for="(item,index) in allVideo" :key="index">
        <div class="image">
          <img class="van-image__img"  v-lazy="item.data.coverUrl" />
        </div>
        <div class="name">{{item.data.title}}</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import sliderNav from '../components/common/sliderNav'
import API from '../api/mv'
import {mapActions} from 'vuex'
export default {
  name: 'Videos',
  data () {
    return {
      allVideo: '',
      videoOffset: 1
    }
  },
  created () {
    API.login();
    Promise.all([API.getAllVideo(), API.getAllVideo(1)])
      .then(res => {
        // console.log(res, 'all')
        this.allVideo = res[0].data.datas.concat(res[1].data.datas);
      })
  },
  methods: {
    ...mapActions(['getIfPlaying']),
    toViedo(item){
        this.getIfPlaying(false);
        this.$router.push({
            path:`/videoDetail/${item.data.vid}`
        })
    },
    updataVideo() {
      let videos = document.getElementById('videos');
      let lastVideo = document.getElementById('lastVedio');
      let scrollTop = 0;
      if(document.documentElement&&document.documentElement.scrollTop){
          scrollTop=document.documentElement.scrollTop;
      }else if(document.body){
          scrollTop=document.body.scrollTop;
      }
      if(videos.clientHeight + videos.offsetTop - document.documentElement.clientHeight <= scrollTop + 60) {
        API.getAllVideo(++this.videoOffset).then(res => {
          this.allVideo = this.allVideo.concat(res.data.datas);
        })
      }
        // alert(videos.clientHeight + videos.offsetTop - document.documentElement.clientHeight)
        // alert(scrollTop + 60)
    }
  },
  components: {
    sliderNav
  }
}
</script>

<style lang='stylus' scoped>
#videos{
    position absolute
    top 87px
    .van-grid{
      .van-grid-item{
        .van-grid-item__content {
          position relative
          padding 18px 6px 0 6px
          .image{
            position relative
            width 100%
            height 100%
            padding 0
            border-radius 5px
            // .van-image{
            //   position relative
            //   width 100%
            //   height 100%
            //   border-radius 5px
            .van-image__img{
              position relative
              width 100%
              height 100%
              border-radius 5px
            }
            // }
          }
          .name{
            position relative
            font-size 11px
            width 100%
            color: #757575;
            margin-top 5px
            height 18px
            text-align left
            overflow: hidden;
            text-overflow:ellipsis;//文本溢出显示省略号
            display: -webkit-box;
            -webkit-line-clamp: 1; //控制文字行数
            -webkit-box-orient: vertical; //子元素数值排列
          }
        }
      }
  }
}
</style>


