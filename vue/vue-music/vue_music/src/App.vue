<template>
  <div id="app">
    <player/>
    <m_header/>
    <tab/>
    <keep-alive :include="include" >
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
import player from './components/player.vue'
import m_header from './components/m-header.vue'
import Tab from './components/tab.vue'
import {mapState,mapActions} from 'vuex'
export default {
  data() {
    return {
      include:[]
    }
  },
  components:{
    player,
    m_header,
    Tab
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
        var index = this.include.indexOf(from.name)
        index !== -1 && this.include.splice(index,1)
      }
      // console.log(this.include,'----')
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
