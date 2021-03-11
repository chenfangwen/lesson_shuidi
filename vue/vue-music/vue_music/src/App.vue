<template>
  <div id="app">
    <m-header @showuser="changeUser"/>
    <tab/>
    <player/>
    <user v-show="isShowUser" @hiddenuser="changeUser"/>
    <keep-alive :include="include" >
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
import player from './components/player.vue'
import mHeader from './components/m-header.vue'
import tab from './components/tab.vue'
import user from './components/user.vue'
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      include:[],
      isShowUser: false
    }
  },
  components:{
    player,
    mHeader,
    tab,
    user
  },
  computed: {
    ...mapState(['ifNomal','cur_music'])
  },
  watch: {
    $route(to, from){
      // console.log(from,to)
      if(to.meta.keepAlive) {
        !this.include.includes(to.name) && this.include.push(to.name)
      }

      if(from.meta.keepAlive && to.meta.deepth < from.meta.deepth) {
        // console.log('删除')
        var index = this.include.indexOf(from.name)
        index !== -1 && this.include.splice(index,1)
      }
      // console.log(this.include,'----')
    }
  },
  methods: {
    changeUser() {
      this.isShowUser = !this.isShowUser;
    }
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
