<template>
  <div id="app">
      <pag :url="url"></pag>
  </div>
</template>

<script>
import Pag from './components/pag';
export default {
  name: "App",
  data() {
    return {
      url: 'https://pag.io/file/like.pag',
    };
  },
  methods: {},
  mounted() {
    // console.log(this.url)
  },
  components: {
    Pag
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
