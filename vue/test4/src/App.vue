<template>
  <div id="nav">
    {{name}}, {{names}}
  </div>
</template>

<script>
import { reactive, toRefs, computed, watch} from 'vue'
export default {
  setup() {
    // data
    let state = reactive({
      name: 'cfw'
    })
    let names = computed(() => {
      return state.name + 's'
    })
    watch(() => state.name, (newval) => {
      console.log(newval)
    })
    setTimeout(() => {
      state.name = 'lzy'
    }, 1000)
    return {
      ...toRefs(state),  //将data处理为响应式并解构
      names
    }
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
}

#nav {
  padding: 30px;
}
</style>
