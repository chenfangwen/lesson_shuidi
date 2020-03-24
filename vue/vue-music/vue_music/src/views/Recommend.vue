<template>
  <div class="recommend">
    <div class="red"></div>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index" @click="getbanner(item)">
          <img :src="item.picUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="recommendList">
      <!-- <div class="img" v-for="(item,index) in playlists" :key="index">
        <img :src="item.picUrl" alt="">
      </div> -->
      <van-grid :column-num="3">
        <img src="" alt="">
      </van-grid>
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
    ...mapActions(['getCur_music']),
    getbanner(item){
      console.log(item)
      if(item.targetType==10){
          this.$router.push({
            path:`recommend/${item.targetId}&${item.targetType}`
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
                }
            })
        }
    },
    getplaylist(item){
      this.$router.push({
        path:`recommend/${item.targetId}&10`
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
  background-color: #f2f3f4;
  margin: 0;
  padding: 0;
  .red{
    height 100px
    background-color #d44439
  }
  .swiper{
    position absolute
    top 85px
    width: 98%;
    margin: 0 1%;
    border-radius: 10px;
    overflow: hidden;
    .my-swipe .van-swipe-item {
    }
  }
}

</style>
