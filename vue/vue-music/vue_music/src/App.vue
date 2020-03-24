<template>
  <div id="app">
    <player/>
    <m_header/>
    <tab/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import player from './components/player.vue'
import m_header from './components/m-header.vue'
import Tab from './components/tab.vue'
export default {
  components:{
    player,
    m_header,
    Tab
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
