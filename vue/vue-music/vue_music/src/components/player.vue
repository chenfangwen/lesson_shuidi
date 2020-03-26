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
          <progress-bar ref='progressBar' @percentChangeEnd="percentChangeEnd"  />
        </div>
      </div>
    </transition>
    <audio v-show="true"  ref="audio" loop  autoplay="autoplay" :src='"http://music.163.com/song/media/outer/url?id="+cur_music.id+".mp3"'></audio>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState,mapActions} from 'vuex'
import progressBar from './progressBar.vue'
export default {
  name: 'Player',
  data(){
    return {
      percent:0
    }
  },
  components:{
    progressBar
  },
  watch:{
    // currentTime(value){
    //   console.log(valuse)
    //   if(value==this.duration){
    //     this.$refs.progressBar._offSet(0);
    //   }
    // }
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic
    }),
    currentTime(){
      // console.log( this.$refs.audio.currentTime)
      return this.$refs.audio.currentTime
    },
    duration(){
      return this.$refs.audio.duration;
    },
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
  methods:{
    // onPercentChange (per) {
    //   console.log(per)
    // }
    percentChangeEnd(percent){
      this.move = false
      const currentTime = this.duration * percent
      this.$refs.audio.currentTime = currentTime
      // if (!this.playing) {
      //   this.$refs.audio.play()
      //   this.setPlayingState(true)
      // }
      // if (this.currentLyric) {
      //   this.currentLyric.seek(currentTime * 1000)
      // }
    }
  },
  created(){
    this.move = false; 
    setInterval(()=>{
      console.log(this.currentTime)
    },1000)
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

