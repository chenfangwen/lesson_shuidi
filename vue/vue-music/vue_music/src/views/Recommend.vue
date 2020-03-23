<template>
  <div class="recommend">
    <tab/>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.picUrl" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Tab from '../components/tab.vue'
import {mapState,mapActions} from 'vuex'
import API from "../api/recommend"
export default {
  name: 'Home',
  data(){
    return {
      banners:[]
    }
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic
    })
  },
  components: {
    Tab
  },
  methods:{
    ...mapActions(['getCur_music']),
  },
  mounted(){
    API.getBanner()
    .then(res=>{
      console.log(res.data)
      this.banners = res.data.banners
    })
  }
}
</script>

<style lang="stylus"  scoped>
.recommend{
  background-color: #f2f3f4;
  margin: 0;
  padding: 0;
  .swiper{
    width 100vw
    .my-swipe{
    }
  }
  
}
.my-swipe .van-swipe-item {
  height: 200px;
}
</style>
