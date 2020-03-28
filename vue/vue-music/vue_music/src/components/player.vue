<template>
  <div class="player" v-show="ifShow">
    <transition name="mini">
      <div class="info" v-show="!ifNomal" @click="getIfNomal(true)">
        <div class="avator"><img class="vatoar" :class="stopPlaying" :src="cur_music_pic" alt=""></div>
        <div class="name">
          <div class="left" >{{cur_music.name}}</div>
          <div class="left_singer" >{{artistsNmae}}</div>
        </div>
      </div>
    </transition>
    <transition name="nomal">
      <div class="nomal" v-show="ifNomal">
        <div class="top">
          <div class="back"  @click="getIfNomal(false)">
            <!-- <i class="fa fa-angle-down"></i> -->
            <img class="backImg" src="../assets/back.png" alt="">
            <!-- <img  class="fa fa-angle-down" src="../assets/back.png"> -->
          </div>
          <h1 class="title" v-html="cur_music.name"></h1>
          <h2 class="subtitle" v-html="artistsNmae"></h2>
        </div>
        <div class="background">
          <div class="filter"></div>
          <img :src="cur_music_pic" width="100%" height="100%">
        </div>
        <div class="middle">
          <transition name="middleL">
            <div class="middle-l" v-show="true">
              <div class="cd-wrapper">
                <div class="cd"  :class="stopPlaying"  >
                  <img :src="cur_music_pic" class="image">
                </div>
              </div>
            </div>
          </transition>
        </div>
        <div class="bottom">
          <div class="progress-wrapper">
            <span class="time time-l">{{format(currentTime)}}</span>
            <div class="progress-bar-wrapper">
              <progress-bar :percent="percent" @percentChangeEnd="percentChangeEnd" @percentChange="percentChange"></progress-bar>
            </div>
            <span class="time time-r">{{format(duration)}}</span>
          </div>
          <div class="operators">
            <div class="operator palytype" @click="changePlayType(playType)">
              <img src="../assets/cycle.png" v-if="playType==1" alt="">
              <img src="../assets/anyone.png" v-if="playType==2" alt="">
              <img src="../assets/onecycle.png" v-if="playType==3" alt="">
            </div>
            <div class="operator last" @click="last">
              <img src="../assets/last.png" alt="">
            </div>
            <div class="operator paly" @click="changePlaying">
              <img src="../assets/stop.png" v-show="ifPlaying" alt="">
              <img src="../assets/play.png" v-show="!ifPlaying" alt="">
            </div>
            <div class="operator next" @click="next">
              <img src="../assets/next.png" alt="">
            </div>
            <div class="operator list">
              <img src="../assets/list.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </transition>
    <audio v-show="true"  ref="audio"   autoplay="autoplay" :src="url" @timeupdate="updateTime"></audio>
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
        cur_music_pic:(state) => state.cur_music_pic,
        ifNomal:(state) => state.ifNomal,
        ifPlaying:(state) => state.ifPlaying,
        curIndex:(state) => state.curIndex,
        curList:(state) => state.curList,
        playType:(state) => state.playType
    }),
    ifShow(){
      return this.cur_music!=''?true:false;
    },
    stopPlaying () {
      return this.ifPlaying ? 'play' : 'play pause'
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
        // if (this.duration) {
        //   clearInterval(stop)
        // }
      }, 150)
      this.getIfPlaying(true)
      console.log(this.ifPlaying)
    },
    currentTime (val) {
      this.percent = val / this.duration
      if(val == this.duration){
        this.percent = 0
        this.currentTime = 0
        if(this.curList && this.playType == 1){
          if(this.curIndex<this.curList.length-1){   //顺序列表
            this.getCur_music(this.curList[this.curIndex+1])
            this.getCurIndex(this.curIndex+1)
          } else {
            this.getCur_music(this.curList[0])
            this.getCurIndex(0)
          }
        } else if(this.curList && this.playType == 2) { //随机
          let length =  this.curList.length
          let index =  parseInt(length*Math.random())
          this.getCur_music(this.curList[index])
          this.getCurIndex(index)
        } else {
          // this.getIfPlaying(false)  单曲循环
          this.getCur_music(this.cur_music)
          this.$refs.audio.play()
        }
      }
    }
  },
  methods:{
    ...mapActions(['getIfNomal','getIfPlaying','getCur_music','getCurIndex','getPlayType']),
    changePlayType(type){
      if(type<3){
        this.getPlayType(type+1)
      }else{
        this.getPlayType(1)
      }
    },
    changePlaying(){
      // console.log(this.ifPlaying)
      const audio = this.$refs.audio
      this.getIfPlaying(!this.ifPlaying)
      // console.log(this.ifPlaying)
      this.ifPlaying ? audio.play() : audio.pause()
    },
    last(){
      if(this.curList && this.playType == 1){
        if(this.curIndex>0){
          this.getCur_music(this.curList[this.curIndex-1])
          this.getCurIndex(this.curIndex-1)
        }else{
          this.getCur_music(this.curList[this.curList.length-1])
          this.getCurIndex(this.curList.length-1)
        }
      } else if(this.curList && this.playType == 2){
        let length =  this.curList.length
        let index =  parseInt(length*Math.random())
        this.getCur_music(this.curList[index])
        this.getCurIndex(index)
      } else {
        if(this.curList){
          if(this.curIndex>0){
            this.getCur_music(this.curList[this.curIndex-1])
            this.getCurIndex(this.curIndex-1)
          }else{
            this.getCur_music(this.curList[this.curList.length-1])
            this.getCurIndex(this.curList.length-1)
          }
        } else {
          this.getCur_music(this.cur_music)
          this.$refs.audio.play()
        }
      }
    },
    next(){
      // let index = this.curIndex+1
      // console.log(this.curIndex,this.curList.tracks[index])
      if(this.curList && this.playType == 1){
        // this.currentTime = 0
        if(this.curIndex<this.curList.length-1){
          this.getCur_music(this.curList[this.curIndex+1])
          this.getCurIndex(this.curIndex+1)
        }else{
          this.getCur_music(this.curList[0])
          this.getCurIndex(0)
        }
      } else if(this.curList && this.playType == 2){
        let length =  this.curList.length
        let index =  parseInt(length*Math.random())
        this.getCur_music(this.curList[index])
        this.getCurIndex(index)
      } else {
        if(this.curList){
          if(this.curIndex<this.curList.length-1){
            this.getCur_music(this.curList[this.curIndex+1])
            this.getCurIndex(this.curIndex+1)
          }else{
            this.getCur_music(this.curList[0])
            this.getCurIndex(0)
          }
        } else {
          this.getCur_music(this.cur_music)
          this.$refs.audio.play()
        }
      }
    },
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
&.normal-enter-active, &.normal-leave-active {
  transition: all 1s;
  .top, .bottom {
    transition: all 1s cubic-bezier(0.86, 0.18, 0.82, 1.32);
  }
}
&.normal-enter, &.normal-leave-to {
  opacity: 0;
}
.player{
  .nomal{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 150;
    background-color #F2F3F4;
    .top {
      position: relative;
      margin-bottom: 25px;
      .back {
        position: absolute;
        top: 0;
        left: 6px;
        z-index: 50;
        .backImg {
          display: block;
          height 30px
          width 30px
          padding: 8px 10px;
          font-size: 35px;
          color:rgb(241, 241, 241);
        }
      }
      .title {
        width: 70%;
        margin: 0 auto;
        padding-top: 10px;
        line-height: 20px;
        text-align: center;
        @include no-wrap();
        font-size:18px;
        font-weight: bold;
        color:  rgb(241, 241, 241);
      }
      .subtitle {
        width: 70%;
        margin: 0 auto;
        line-height: 20px;
        text-align: center;
        @include no-wrap();
        font-weight 300
        font-size:12px;
        color: rgb(241, 241, 241);
      }
    }
    .background {
      position: absolute;
      left: -50%;
      top: -50%;
      width: 300%;
      height: 300%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(30px);
      .filter {
        position: absolute;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.6;
      }
    }
    .middle{
      display: flex;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 80px;
      bottom: 170px;
      white-space: nowrap;
      font-size: 0;
      .middle-l {
        display: inline-block;
        vertical-align: top;
        position: relative;
        width: 100%;
        height: 0;
        padding-top: 80%;
        &.middleL-enter-active, &.middleL-leave-active {
          transition: all 0.3s
        }
        &.middleL-enter, &.middleL-leave-to {
          opacity: 0
        }
        .cd-wrapper {
          position: absolute;
          left: 10%;
          top: 0;
          width: 80%;
          height: 100%;
          .cd {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 15px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            &.play {
              animation: rotate 20s linear infinite;
            }
            &.pause {
              animation-play-state: paused;
            }
            .image {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
        }
      }
    }
    .bottom {
      position: absolute;
      bottom: 50px;
      width: 100%;
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
      .operators {
        display: flex;
        width 100vw
        align-items: center;
        .operator{
          width 20%
          text-align center
          img{
            height 40px
            width 40px
          }
        }
        }
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
        border-radius: 25px;
        &.play {
          animation: rotate 10s linear infinite;
        }
        &.pause {
          animation-play-state: paused;
        }
      }
    }
    .name{
      // width: 46vw;
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
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

