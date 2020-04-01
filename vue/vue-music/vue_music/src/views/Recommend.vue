<template>
  <div class="recommend">
    <div class="red"></div>
    <div class="content">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index" @click="getbanner(item)">
          <van-image  :src="item.picUrl" />
        </van-swipe-item>
      </van-swipe>
      <div class="recommendList">
        <div class="text">推荐歌单</div>
        <van-grid :column-num="3" :border="false">
          <van-grid-item @click="getplaylist(item)" v-for="(item,index) in playlists" :key="index">
            <div class="image"><img class="van-image__img" :src="item.picUrl" /></div>
            <div class="name">{{item.name}}</div>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import API2 from '../api/search'
import {mapState,mapActions} from 'vuex'
import API from "../api/recommend"
export default {
  name: 'Home',
  data(){
    return {
      banners:[],
      playlists:[]
    }
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic
    })
  },
  components: {
  },
  
  methods:{
    ...mapActions(['getCur_music','getCurList']),
    getbanner(item){
      console.log(item)
      if(item.targetType==10||item.targetType==1000){
          this.$router.push({
            path:`banner/${item.targetId}&${item.targetType}`
          })
      }
      if(item.targetType == 1){
          API2.getSongDetail(item.targetId)
          .then(res=>{
              console.log(res.data)
              // this.music = res.data.songs
              if(res.data.songs[0]){
                  // this.getMusicList(res.data.songs)
                  this.getCur_music(res.data.songs[0])
                  this.getCurList(res.data.songs)
              }
          })
      }
      if(item.targetType == 3000){
        window.open(item.url)
      }
    },
    getplaylist(item){
      this.$router.push({
        path:`banner/${item.id}&0`
      })
    }
  },
  mounted(){
    API.getBanner()
    .then(res=>{
      console.log(res.data)
      this.banners = res.data.banners
    })
    API.getRecommendList()
    .then(res=>{
      console.log(res.data.result)
      this.playlists = res.data.result;
    })
  }
}
</script>

<style lang="stylus"  scoped>
.recommend{
  // background-color: #f2f3f4;
  margin: 0;
  padding: 0;
  z-index: 100;
  .red{
    height 200px
    background-color #d44439
  }
  .content{
    position absolute
    top 85px
    width: 98%;
    margin: 0 1%;
    // .swiper{
    //   position relative
    //   background-color #f2f2f2
    //   border-radius: 10px;
    //   // overflow: hidden;
    .van-swipe{
      border-radius: 10px;
      .van-swipe__track{
        .van-swipe-item{
          .van-image{
            width 100%
            height 100%
            margin 0
            .van-image__img{
               border-radius: 10px;
            }
          }
        }
      }
      
    }
    
    // }
    .recommendList{
        position relative
        width 98%
        margin 0 1%
        .text{
          font-size 14px
          font-weight 600
          width 98%
          margin-top 10px
          height 20px
          line-height 20px
          text-align left
        }
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
  }
  
  
}

</style>
