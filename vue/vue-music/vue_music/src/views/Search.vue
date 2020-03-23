<template>
  <div id="search">
    <div class="search">
        <img @click="back" class="back_img" src="../assets/back.png" alt="">
        <search-box @search="search"/>
        <img @click="search" class="search_img" src="../assets/search.png" alt="">
    </div>
    <div class="music_list">
      <ol>
        <li @click="getCur_music(item)" class="music_item" v-for="(item, index) in musicsList" :key="index">
          <span style="font-weight: 600;">歌曲：</span>{{ item.name }} <br />
          <span style="font-weight: 600;">歌手：</span>{{ item.artists[0].name }}<br />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState,mapActions} from 'vuex'
import searchBox from '../components/searchBox.vue'
export default {
  name: 'Home',
  data(){
    return {
      searchValue:'',
      musicsList:[]
    }
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic
    }),
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
            console.log(query)
            axios.get(`/api/search?keywords=${query}`)
                .then(res=>{
                    console.log(res.data.result.songs)
                    this.musicsList = res.data.result.songs;
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
            margin-left 1%
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
            width: 100vw;
            height: 50px;
        }
    }
}





</style>