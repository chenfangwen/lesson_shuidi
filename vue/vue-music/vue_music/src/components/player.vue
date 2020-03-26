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
    <transition name="nomal">
      <div class="nomal">

        <div class="progress-wrapper">
          <span class="time time-l">{{format(currentTime)}}</span>
          <div class="progress-bar-wrapper">
            <progress-bar :percent="percent" @percentChangeEnd="percentChangeEnd" @percentChange="percentChange"></progress-bar>
          </div>
          <span class="time time-r">{{format(duration)}}</span>
        </div>
      </div>
    </transition>
    <audio v-show="true"  ref="audio" loop  autoplay="autoplay" :src="url" @timeupdate="updateTime"></audio>
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
      percent:0,
      duration:0,
      currentTime:0,
      url:'',
      move:''
    }
  },
  components:{
    progressBar
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic
    }),
    // duration(){
    //   return this.$refs.audio.duration;
    // },
    // ms(){
    //   let m = parseInt(this.$refs.audio.duration/60);
    //   let s = parseInt(this.$refs.audio.duration)%60
    //   return `${m}:${s}`
    // },
    // currentTime(){
    //   return this.$refs.audio.currentTime
    // },
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
  watch:{
    cur_music(newVal,oldVal){
       if (!newVal.id) {
        return
      }
      if (newVal.id === oldVal.id) {
        return
      }
      this.$refs.audio.pause()
      this.$refs.audio.currentTime = 0
      this._getSong(newVal.id)
    },
    url (newUrl) {
      // this._getLyric(this.currentSong.id)
      // this.$refs.audio.src = newUrl
      let stop = setInterval(() => {
        this.duration = this.$refs.audio.duration
        if (this.duration) {
          clearInterval(stop)
        }
      }, 150)
      // this.setPlayingState(true)
    },
    currentTime (val) {
      this.percent = val / this.duration
      // console.log(this.percent)
    }
    // currentTime(value){
    //   console.log(value)
    //   let percent = value/this.duration
    //   if(value==this.duration){
    //     this.$refs.progressBar._offSet(0);
    //   }else{
    //     this.$refs.progressBar._offSet(percent);
    //   }
    // }
  },
  methods:{
    // onPercentChange (per) {
    //   console.log(per)
    // }
    updateTime (e) {
      // if (this.move) {
      //   return
      // }
      this.currentTime = e.target.currentTime
    },
    _getSong (id) {
      console.log(id)
      this.url = "http://music.163.com/song/media/outer/url?id="+id+".mp3"
    },
    percentChangeEnd(percent){
      // this.move = false
      // console.log(this.duration)
      
      console.log(this.$refs.audio.currentTime)
      const currentTime = this.duration* percent
      this.currentTime = currentTime
      this.$refs.audio.currentTime = currentTime
      // if (!this.playing) {
      //   this.$refs.audio.play()
      //   this.setPlayingState(true)
      // }
      // if (this.currentLyric) {
      //   this.currentLyric.seek(currentTime * 1000)
      // }
    },
    percentChange (percent) {
      // this.move = true
      const currentTime = this.duration * percent
      this.currentTime = currentTime
      // if (this.currentLyric) {
      //   this.currentLyric.seek(currentTime * 1000)
      // }
    },
    format (interval) {
      interval = interval | 0
      let minute = interval / 60 | 0
      let second = interval % 60
      if (second < 10) {
        second = '0' + second
      }
      return minute + ':' + second
    },
  },
  created(){
    this.move = false; 
    // this.duration = this.$refs.audio.duration;
    // setInterval(()=>{
    //   console.log(this.refs.audio.currentTime)
    // },1000)
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
    background-color #F2F3F4;
    .progress-wrapper {
        display: flex;
        align-items: center;
        width: 80%;
        margin: 0px auto;
        padding: 10px 0;
        .time {
          color: rgb(241, 241, 241);
          font-size: 11px;
          flex: 0 0 30px;
          line-height: 30px;
          width: 30px;
          &.time-l {
            text-align: left;
          }
          &.time-r {
            text-align: right;
            color: rgb(219, 219, 219); 
          }
        }
        .progress-bar-wrapper {
          flex: 1;
        }
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

