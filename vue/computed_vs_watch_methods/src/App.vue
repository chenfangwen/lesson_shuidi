<template>
  <div id="app">
    <div class="">computed:</div>
    <input type="text" :value="num1" >
    <input type="text" :value="num2" >
    <input type="text" :value="addnum" >
    <hr/>
    <div class="">methods:</div>
    <input type="text" v-model="num5" >
    <input type="text" v-model="num6" >
    <input type="text" :value="add()" >
    <hr/>
    <div class="">watch:</div>
    <input type="text" v-model="num3" >
    <input type="text" v-model="num4" >
    <input type="text" :value="addnum2" >
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      num1:10,
      num2:20,
      num3:20,
      num4:20,
      addnum2:40,
      num5:22,
      num6:33
    }
  },
  computed:{
    addnum:function(){
      return parseInt(this.num1)+parseInt(this.num2)
    }
  },
  watch:{
    num3:function(newvalue){
      this.num3 = newvalue;
      this.later_add();
    },
    num4:function(newvalue){
      this.num4 = newvalue;
      this.later_add();
    }
  },
  methods:{
    later_add(){
      setTimeout(() => {
        this.addnum2 = parseInt(this.num3) + parseInt(this.num4)
      }, 2000);
    },
    add(){
      return parseInt(this.num5)+parseInt(this.num6)
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
  margin-top: 60px;
}
</style>
