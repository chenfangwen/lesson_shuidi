<template>
  <div class="player" v-show="ifShow">
    <transition name="mini">
      <div class="info" >
        <div class="avator"><img class="vatoar" :src="cur_music_pic" alt=""></div>
        <div class="name">
          <div class="left" >{{cur_music.name}}</div>
          <div class="left_singer" >{{artistsNmae}}</div>
        </div>
      </div>
    </transition>
    <transition>
      <div class="nomal">
        <div class="progcess">
          <!-- <progress-bar :percent="percent"></progress-bar> -->
        </div>
      </div>
    </transition>
    <audio v-show="false"  ref="audio" loop autoplay="autoplay" :src='"http://music.163.com/song/media/outer/url?id="+cur_music.id+".mp3"'></audio>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapActions} from 'vuex'
// import progressBar from './progressBar'
export default {
  name: 'Player',
  data(){
    return {
      // percent:''
    }
  },
  components:{
    // progressBar
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
      if(this.cur_music.ar){
        return this.cur_music.ar[0].name;
      }
    }
  },
  components: {
    // HelloWorld
  },
  methods:{
  }
}
</script>

<style lang="stylus" scoped>
.player{
  .nomal{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background-color #fff
    .progcess{
      top 50px
      position relative
      margin 0 10%
      width 80%
    }
  }
  .info{
    z-index: 150;
    width 100vw
    background-color: rgba(255, 255, 255, 0.85);
    position: fixed;
    display: flex;
    bottom: 0;
    height: 50px;
    .avator{
      width: 50px;
      .vatoar{
        width: 50px;
        height: 50px;
        border-radius: 25px;;
      }
    }
    .name{
      width: 46vw;
      padding-left: 5px;
      /* margin-left: 20px; */
      .left{
        text-align: left;
        margin-top: 5px;
        color: black;
        font-size: 14px;
      }
      .left_singer{
        text-align: left;
        font-size: 12px;
        font-weight: 500;
        color: #757575;
        margin: 5px 0;
      }
    }
  }
}
</style>

