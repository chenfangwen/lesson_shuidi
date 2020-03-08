<template>
  <div id="app">
    <div class="good_info">
      <div class="unit_price_num">
        <div class="unit_price">单价：{{unit_price}}</div>
        <div class="num">
          <div class="">数量：</div>
          <button @click="decrease">-</button>
          <div class="">{{num}}</div>
          <button @click="num++">+</button>
        </div>
      </div>
      <div class="price">合计：{{price}}</div>
    </div>
    
  </div>
</template>

<script>
// console.log(_.debounce);
export default {
  name: 'App',
  data() {
    return {
      num:0,
      unit_price:20
    }
  },
  computed: {
      price:function(){
        return this.unit_price*this.num;
      }
  },
  watch: {
  },
  methods: {
    decrease(){
      if(this.num>0){
        this.num--;
      }else{
        alert("数量不能小于0")
      }
    }
  },
  created: function() {
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
.num{
  margin-left: 45%;
  display: flex;
  text-align: center;
}
</style>
