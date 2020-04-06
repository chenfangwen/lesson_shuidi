<template>
  <transition name="search">
    <div id="search">
      <div class="search">
          <img @click="back" class="back_img" src="../assets/back.png" alt="">
          <search-box ref="searchbox" @search="search"/>
          <!-- <img @click="search" class="search_img" src="../assets/search.png" alt=""> -->
      </div>
      <div class="hotSearch">

      </div>
      <div class="firstSinger" v-if="ifSinger" @click="toSinger">
        <img class="singer_img" :src="firstSinger.picUrl" alt="">
        <div class="name">
          <div class="text">歌手 ：</div>
          <div class="singername">{{firstSinger.name}}</div>
        </div>
      </div>
      <music-list/>
    </div>
  </transition>
</template>

<script>
// import axios from 'axios'
import API from "../api/search"
import {mapState,mapActions} from 'vuex'
import searchBox from '../components/searchBox.vue'
import musicList from '../components/musicList.vue'
export default {
  name: 'Home',
  data(){
    return {
      searchValue:'',
      firstSingerName:'',
      firstSinger:''
    }
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic,
        musicsList:(state) => state.musicsList
    }),
    ifSinger(){
      return this.firstSinger!=''?true:false;
    },
    artistsNmae(){
      if( this.cur_music.artists){
        return this.cur_music.artists[0].name;
      }
    }
  },
  components: {
    // HelloWorld
    musicList,
    searchBox
  },
  methods:{
    ...mapActions(['getCur_music','getMusicList']),
    search: function(query) {
        API.searchResult(query)
        .then(res=>{
            console.log(res.data)
            // this.musicsList = res.data.result.songs;
            this.getMusicList(res.data.result.songs) 
            if(res.data.result.songs[0].artists[0]){
              this.firstSingerName = res.data.result.songs[0].artists[0].name
              API.getSearchSinger(this.firstSingerName)
              .then(res=>{
                  console.log(res.data)
                  if(res.data.result.artists){
                    this.firstSinger = res.data.result.artists[0];
                  }
              })
            }
        })
    },
    back(){
      this.$router.go(-1)
    },
    toSinger(){
      this.$router.push({
        path:`/singer/${this.firstSinger.id}`
      })
    }
  },
  mounted(){
  }

}
</script>

<style lang="stylus"  scoped>
.search-enter-active, .search-leave-active {
  transition: all 0.3s;
}
.search-enter, .search-leave-to {
  transform: translate3d(50%, 0, 0);
  opacity: 0;
}
#search{
    // overflow hidden
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    .firstSinger{
      margin-top 50px
      display flex
      margin-left 1.5%
      height 60px
      line-height 60px
      // border-bottom: 1px solid #e4e4e4;
      .singer_img{
        height 50px
        width 50px
      }
      .name{
        margin-left 10px
        font-size 13px
        display flex
        .text{

        }
        .singername{
          color blue
        }
      }
    }
    .search{
        // padding-top 20px
        position fixed
        z-index 2
        top 0
        height 45px;
        width 100%
        display flex
        background-color #d44439
        .back_img{
            width 25px
            height 25px
            margin-top 10px
            padding 0
            margin-left 1.5%
        }
        .search_img{
            width 25px
            height 25px
            margin-top 10px
            padding 0
        }
    }
}
</style>