<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-alert
      type="success"
      title="成功提示"
      :showIcon="true"
      description="这是成功的一个提示"
    >
    </el-alert>
     <el-alert
      type="error"
      title="错误提示"
      :showIcon="true"
      description="这是错误的一个提示"
    >
    </el-alert>
     <el-alert
      type="warn"
      title="警告提示"
      :showIcon="true"
      description="这是警告的一个提示"
    >
    </el-alert>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
