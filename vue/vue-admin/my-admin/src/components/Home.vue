<template>
  <div class="hello">
    <h1>首页</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async fetchData() {
      return await new Promise((resolve, reject) => {
        fetch('http://localhost:3000/banner/ad',{
          method: 'GET', 
          headers: {'Content-Type': 'application/json'},
          mode: 'no-cors'
        }).then(res => {
          console.log(res)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  mounted() {
    // fetch('http://localhost:3000/banner/ad',{
    //   method: 'GET', 
    //   headers: {'Content-Type': 'application/json'},
    //   mode: 'no-cors'
    // })
    // .then(res => {
    //   console.log(res,'----')
    //   return res.json()
    // })
    // .then(data => {
    //   console.log(data,'++++')
    // })
    let data = this.fetchData();
    console.log(data)
    // .catch(function(e) {
    //   console.log(e);
    // });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
