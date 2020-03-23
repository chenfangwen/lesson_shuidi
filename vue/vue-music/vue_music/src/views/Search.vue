<template>
  <div id="search">
    <div class="search">
        <img @click="back" class="back_img" src="../assets/back.png" alt="">
        <search-box @search="search"/>
        <img @click="search" class="search_img" src="../assets/search.png" alt="">
    </div>
    <div class="firstSinger" v-if="ifSinger">
      <img class="singer_img" :src="firstSinger.picUrl" alt=""><div class="name">歌手:{{firstSinger.name}}</div>
    </div>
    <div class="music_list">
      <div  @click="getCur_music(item)" class="music_item" v-for="(item, index) in musicsList" :key="index">
        <div class="music_item_box">
          <div class="song">{{ item.name }}</div>
          <div class="singer">{{ item.artists[0].name }}</div>
        </div>
      </div>
      <!-- <ol>
        <li @click="getCur_music(item)" class="music_item" v-for="(item, index) in musicsList" :key="index">
          <span style="font-weight: 600;">歌曲：</span>{{ item.name }} <br />
          <span style="font-weight: 600;">歌手：</span>{{ item.artists[0].name }}<br />
        </li>
      </ol> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import API from "../api/search"
import {mapState,mapActions} from 'vuex'
import searchBox from '../components/searchBox.vue'
export default {
  name: 'Home',
  data(){
    return {
      searchValue:'',
      musicsList:[],
      firstSinger:''
    }
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic
    }),
    ifSinger(){
      return this.firstSinger!=''?true:false;
    },
    ifShow(){
      return this.cur_music!=''?true:false;
    },
    artistsNmae(){
      if( this.cur_music.artists){
        return this.cur_music.artists[0].name;
      }
    }
  },
  components: {
    // HelloWorld
    searchBox
  },
  methods:{
    ...mapActions(['getCur_music']),
        search: function(query) {
            API.searchResult(query)
            .then(res=>{
                // console.log(res.data)
                this.musicsList = res.data.result.songs;
            })
            API.getSearchSinger(query)
            .then(res=>{
                // console.log(res.data)
                if(res.data.result.artists){
                  this.firstSinger = res.data.result.artists[0];
                }
                
            })
        },
        back(){
            this.$router.go(-1)
    }
  }

}
</script>

<style lang="stylus"  scoped>
#search{
    // overflow hidden
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0;
    // z-index: 150;
    width: 100vw;
    height: 100vh;
    background-color: #f2f3f4;
    .firstSinger{
      margin-top 10px
      display flex
      margin-left 1.5%
      height 60px
      line-height 60px
      border-bottom: 1px solid #e4e4e4;
      .singer_img{
        height 50px
        width 50px
      }
      .name{
        margin-left 10px
        font-size 13px
      }
    }
    .search{
        // padding-top 20px
        height 45px;
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
    .music_list{
        position: relative;
        background-color: #f2f3f4;
        /* margin-top: 50px; */
        .music_item{
            position: relative;
            // background-color: #f2f3f4;
            width: 97vw;
            height: 47px;
            margin-left 1.5%
            text-align left 
            border-bottom: 1px solid #e4e4e4;
            .music_item_box{
              position: relative;
              margin-top  10px
              height 40px
              margin-bottom 7px
              .song{
                font-size 14px;
                font-weight 500
                height 20px
                padding-top  2px
                padding-bottom 2px
              }
              .singer{
                font-size 11px
                color: #757575;
                height 18px
                font-weight 500
                padding-top 2px
                padding-bottom 2px
              }
            }
        }
    }
}





</style>