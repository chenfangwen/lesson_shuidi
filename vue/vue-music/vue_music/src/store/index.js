import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cur_music:'',
    cur_music_pic:'',
    musicsList:'',
    albumMusic:'',
    playList:''
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
  },
  actions: {
    getCur_music(context,cur){
      console.log(cur)
      axios.get(`/api/song/detail?ids=${cur.id}`)
      .then(res => {
        // console.log(res.data.songs[0].al.picUrl);
        context.commit('setCur_music_pic',res.data.songs[0].al.picUrl)
      })
      context.commit('setCur_music',cur);
    },
    getMusicList(context,list){
      // console.log(cur.id)
      context.commit('setMusicsList',list);
    },
    getAlbumMusic(context,list){
      // console.log(cur.id)
      context.commit('setAlbumMusic',list);
    },
    getPlayList(context,list){
      // console.log(cur.id)
      context.commit('setPlayList',list);
    }
  },
  modules: {
  }
})
