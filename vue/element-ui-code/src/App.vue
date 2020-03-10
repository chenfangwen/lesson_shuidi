<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <el-alert
      type="success"
      title="成功提示"
      :showIcon="true"
      description="这是成功的一个提示"
    >
    </el-alert> -->
    <carousel>
    <carousel-item v-for="item in 4" :key="item"><div class="">{{item}}</div></carousel-item>
    </carousel>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ElAlert from './components/ElAlert.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ElAlert
  }
}
</script>

<style>
*{
  background-color: green;
}
</style>
