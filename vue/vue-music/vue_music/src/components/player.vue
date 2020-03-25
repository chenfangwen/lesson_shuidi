<template>
  <div class="player">
    <transition>
      <div class="info" v-show="ifShow">
        <div class="avator"><img class="vatoar" :src="cur_music_pic" alt=""></div>
        <div class="name">
          <div class="left" >{{cur_music.name}}</div>
          <div class="left_singer" >{{artistsNmae}}</div>
        </div>
        <audio class="audio" loop controls autoplay="autoplay" :src='"http://music.163.com/song/media/outer/url?id="+cur_music.id+".mp3"'></audio>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Player',
  data(){
    return {
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

<style scoped>
.info{
  z-index: 150;
  background-color: rgba(255, 255, 255, 0.85);
  position: fixed;
  display: flex;
  bottom: 0;
  height: 50px;
}
.avator{
  width: 50px;
}
.vatoar{
  width: 50px;
  height: 50px;
  border-radius: 25px;;
}
.name{
  width: 46vw;
  padding-left: 5px;
  /* margin-left: 20px; */
}
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
.audio{
  /* background-color: #fff; */
  width: 48vw;
  /* margin-left: 20px; */
}
</style>

