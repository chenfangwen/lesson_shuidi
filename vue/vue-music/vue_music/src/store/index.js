import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {addPlayHistory} from '../common/js/util'

Vue.use(Vuex) 

export default new Vuex.Store({
  state: {
    cur_music:'',
    cur_music_pic:'',
    curList:[],
    musicsList:[],
    albumMusic:[],
    playList:[],
    ifNomal:false,
    curIndex:'',
    ifPlaying:false,
    ifP:false,
    playType:1,
    currentLyric:[],
    curUser: ''
  },
  mutations: {
    setCurUser(state, cur) {
      state.curUser = cur;
    },
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
    },
    setIfPalying(state,status){
      state.ifPlaying = status
    },
    setIfP(state,status){
      state.ifP = status
    },
    setPlayType(state,type){
      state.playType = type
    }
  },
  actions: {
    getCurUser(context,cur) {
      context.commit('setCurUser',cur);
    },
    getCur_music(context,cur){
      console.log(cur, 'curr')
      axios.get(`/api/song/detail?ids=${cur.id}`)
      .then(res => {
        console.log(res.data.songs, 'cursong');
        let song = {
          id: res.data.songs[0].id,
          name: res.data.songs[0].name,
          ar: res.data.songs[0].ar.map(item => {
            return {
              name: item.name,
              id: item.id
            }
          }),
          al: {
            name: res.data.songs[0].al.name
          }
        }
        addPlayHistory(JSON.stringify(song));
        context.commit('setCur_music_pic',res.data.songs[0].al.picUrl)
        // context.commit('setIfNomal',true);
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
      // context.commit('setCurIndex',-1)
    },
    getIfNomal(context,value){
      context.commit('setIfNomal',value);
    },
    getCurIndex(context,index){
      context.commit('setCurIndex',index);
    },
    getIfPlaying(context,status){
      context.commit('setIfPalying',status);
    },
    getIfP(context,status){
      context.commit('setIfP',status);
    },
    getPlayType(context,type){
      context.commit('setPlayType',type);
    },
  },
  modules: {
  }
})
