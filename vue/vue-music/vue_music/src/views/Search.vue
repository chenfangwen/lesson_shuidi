<template>
  <transition name="search">
    <div id="search" @click="hide">
      <div class="searchbox">
          <img @click="back" class="back_img" src="../assets/back.png" alt="">
          <search-box ref="searchbox" @searchSuggest="searchSuggest" @search="search" @searchClear="searchClear"/>
      </div>
      <suggest-List @changeSearch="changeSearch" :suggestList="suggestList" :query="query" />
      <div class="search-history">
        <div class="text">
          <div>搜索历史：</div>
          <img src="../assets/deleteall.png" class="clear-histpry" @click="clearAllHistory"/>
        </div>
        <div v-if="historyList" class="history-list">
          <div class="history-item" v-for="(item, index) in historyList" :key="index" @click="searchHistory(item)">{{item}}</div>
        </div>
        <div v-else class="null-history">暂无搜索历史</div>
      </div>
      <div class="hotSearch" :style="cur_music ? {'padding-bottom': '60px'} : ''">
        <div>热门搜索：</div>
        <div class="hot-search-list">
          <div class="hot-search-item" v-for="(item, index) in hotSearchList" :key="index" @click="searchHistory(item.searchWord)">
            <div :class="['index', `item${index + 1}`]">{{index + 1}}</div>
            <div class="word">{{item.searchWord}}</div>
            <div class="score">{{item.score}}</div>
          </div>
        </div>
      </div>
      <div v-if="searchResult" class="search-result">
        <div class="firstSinger" v-if="ifSinger" @click="toSinger">
          <img class="singer_img" :src="firstSinger.picUrl" alt="">
          <div class="name">
            <div class="text">歌手 ：</div>
            <div class="singername">{{firstSinger.name}}</div>
          </div>
        </div>
        <music-list id="list" :musicList="searchResult"  @hide="hide"/>
      </div>
      <confirm ref="historyClearConfirm" @confirm="confirmClear" text="是否清空搜索历史" confirmBtnText="清空"></confirm>
    </div>
  </transition>
</template>

<script>
// import axios from 'axios'
import API from "../api/search"
import {mapState, mapActions} from 'vuex'
import {addSearchHistory, clearHistory, getHistory} from '../common/js/util'
import searchBox from '../components/searchBox.vue'
import musicList from '../components/musicList.vue'
import suggestList from '../components/suggestList'
import confirm from '../components/common/confirm'
export default {
  name: 'Search',
  data(){
    return {
      searchValue:'',
      firstSingerName:'',
      firstSinger:'',
      suggestList:[],
      query:'',
      searchResult:'',
      historyList: '',
      hotSearchList: ''
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
    searchBox,
    suggestList,
    confirm
  },
  methods:{
    ...mapActions(['getCur_music','getMusicList']),
    hide(){
      this.query = ''
    },
    updatedHistory() {
      let historyList = getHistory() ? getHistory().split('*/*') : '';
      if (historyList) {
        historyList.forEach((item,index) => {
          if (item === '') {
            historyList.splice(index, 1);
          }
        });
        this.historyList = historyList;
      }

    },
    searchClear() {
      this.searchResult = '';
      this.firstSinger = '';
      this.searchResult = '';
      this.updatedHistory();
    },
    confirmClear() {
      clearHistory();
      this.updatedHistory();
    },
    clearAllHistory() {
      if(this.historyList!='') {
        this.$refs.historyClearConfirm.show();
      }
    },
    search(query) {
        this.query = ''
        if(query){
          addSearchHistory(query);
          API.searchResult(query)
            .then(res=>{
                console.log(res.data)
                this.searchResult = res.data.result.songs;
                // this.getMusicList(res.data.result.songs) 
                if(res.data.result.songs[0].artists[0]){
                  this.firstSingerName = res.data.result.songs[0].artists[0].name
                  API.getSearchSinger(this.firstSingerName)
                  .then(res=>{
                      console.log(res.data)
                      if(res.data.result.artists[0]){
                        this.firstSinger = res.data.result.artists[0];
                      }
                  })
                }
            })
        }
    },
    changeSearch(suggest){
      // console.log(suggest)
      this.$refs.searchbox.selectQuery(suggest.name);
      this.search(suggest.name);
      this.query = ''
    },
    searchHistory(query) {
      this.$refs.searchbox.selectQuery(query);
      this.search(query);
    },
    searchSuggest(query){
      this.query = query
      console.log(this.query, 'this.query')
      if(query){
        API.getSearchSuggest(query)
          .then(res => {
            if(res.data.result.artists){
              console.log(res.data)
              let artists = res.data.result.artists
              let songs = res.data.result.songs
              this.suggestList = songs ? artists.concat(songs) : artists;
              console.log(this.suggestList, 'this.suggestList')
            }
          })
      }
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
    this.updatedHistory();
    API.getSearchHot().then(res => {
      if (+res.data.code === 200) {
        this.hotSearchList = res.data.data;
      }
    });
  }
}
</script>

<style lang="stylus"  scoped>
.search-enter-active, .search-leave-active {
  transition: all 0.3s;
}
.search-enter,.search-leave-to {
  transform: translate(50%, -50%) scale(0);
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
  .search-history {
    position: relative;
    margin-top: 53px;
    text-align: left;
    padding: 0 5px;
    .text {
      font-size: 14px;
      display: flex;
      margin-bottom: 4px;
      justify-content space-between
      font-weight: 600;
      .clear-histpry {
        height: 20px;
      }
    }
    .history-list {
      display: flex;
      flex-flow: row wrap;
      max-height: 64px;
      overflow hidden
      .history-item {
        white-space nowrap
        background-color: #f2f2f2;
        margin 1.5px 3px 1.5px 0
        padding 3px 8px
        border-radius 15px
      }
    }
    .null-history {
      color: #4a4848;
      text-align: center;
    }
  }
  .hotSearch {
    position: relative;
    font-size: 14px;
    text-align: left;
    font-weight: 600;
    padding: 0 5px;
    margin: 5px 0;
    .hot-search-list {
      margin-top: 5px;
      .hot-search-item {
        position: relative;
        display: flex;
        align-items: center;
        height: 26px;
        margin: 2px 0;
        .index {
          margin-left: 2px;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align center;
          border-radius: 5px;
        }
        .item1 {
          background-color: #f33;
          border-color: #f33;
          color: #fff;
        }
        .item2 {
          background-color: #f60;
          border-color: #f60;
          color: #fff;
        }
        .item3 {
          background-color: #faa90e;
          border-color: #faa90e;
          color: #fff;
        }
        .word {
          font-weight: 400;
          margin-left: 5px;
        }
        .score {
          position: absolute;
          right: 2px;
        }
      }
    }
  }
  .search-result {
    background-color: #fff;
    position: absolute;
    width: 100%;
    top: 0;
    .firstSinger{
      margin-top 60px
      display flex
      margin-left 1.5%
      height 50px
      line-height 50px
      // border-bottom: 1px solid #e4e4e4;
      .singer_img{
        height 50px
        width 50px
      }
      .name{
        margin-left 10px
        font-size 13px
        display flex
        align-items center
        .text{

        }
        .singername{
          color blue
        }
      }
    }
  }
  .searchbox{
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