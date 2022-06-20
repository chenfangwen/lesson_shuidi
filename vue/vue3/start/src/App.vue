<template>
  <div>
    <div v-for="(item, index) in person" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      person: [
        {
          name: 'cfw',
          age: 22
        },
        {
          name: 'wzx',
          age: 20
        }
      ]
    }
  },
  mounted() {
    console.log(this.person)
  },
}
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
