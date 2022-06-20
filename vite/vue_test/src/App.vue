<script>
import HelloWorld from './components/HelloWorld.vue';
import {ref, reactive} from 'vue';

export default {
  setup(props) {
    const title = ref('这是第一次接触');
    const userInfo = reactive({
      name: '阿斯顿发生的发烧',
      age: 20,
      height: 178
    });
    return {
      title,
      userInfo
    }
  },
  methods: {
    add() {
      this.userInfo.age++;
    }
  },
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div>
    <div class="title">{{ title }}</div>
    <div class="info">姓名: {{ userInfo.name }}</div>
    <div class="info">年龄: {{ userInfo.age }}</div>
    <div class="info">身高: {{ userInfo.height }}</div>
    <button @click="add">长大</button>
  </div>
</template>

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
