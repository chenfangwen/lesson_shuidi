import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cur_music:'',
    cur_music_pic:'',
    curList:'',
    musicsList:'',
    albumMusic:'',
    playList:'',
    ifNomal:true,
    curIndex:0
  },
  mutations: {
    setCur_music(state,cur){
      state.cur_music = cur;
    },
    setCur_music_pic(state,pic){
      state.cur_music_pic = pic;
    },
    setAlbumMusic(state,list){
      state.albumMusic = list;
    },
    setMusicsList(state,list){
      state.musicsList = list;
    },
    setPlayList(state,list){
      state.playList = list;
    },
    setCurList(state,list){
      state.curList = list;
    },
    setCurIndex(state,index){
      state.curIndex = index
    },
    setIfNomal(state,value){
      state.ifNomal = value
    }
  },
  actions: {
    getCur_music(context,cur){
      // console.log(cur)
      axios.get(`/api/song/detail?ids=${cur.id}`)
      .then(res => {
        // console.log(res.data.songs[0].al.picUrl);
        context.commit('setCur_music_pic',res.data.songs[0].al.picUrl)
        context.commit('setIfNomal',true);
      })
      context.commit('setCur_music',cur);
    },
    getMusicList(context,list){
      context.commit('setMusicsList',list);
    },
    getAlbumMusic(context,list){
      context.commit('setAlbumMusic',list);
    },
    getPlayList(context,list){
      context.commit('setPlayList',list);
    },
    getCurList(context,list){
      context.commit('setCurList',list);
    },
    getIfNomal(context,value){
      context.commit('setIfNomal',value);
    },
    getCurIndex(context,index){
      context.commit('setCurIndex',index);
    }
  },
  modules: {
  }
})
