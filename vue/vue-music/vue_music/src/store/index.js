import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cur_music:{}
  },
  mutations: {
    setCur_music(state,cur){
      state.cur_music = cur;
    }
  },
  actions: {
    getCur_music(context,cur){
      context.commit('setCur_music',cur);
    }
  },
  modules: {
  }
})
