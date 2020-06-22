import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    curUser: ''
  },
  mutations: {
    setCurUser(state,user){
      state.curUser = user
  },
  },
  actions: {
    changeUser({commit},user){
      commit('setCurUser',user)
  }
  }
})
