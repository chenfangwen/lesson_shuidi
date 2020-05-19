<template>
  <div class="hello">
    <header>
      <h1>首页</h1>
    </header>
    <main>
      <section class="banner">
        <el-carousel :interval="4000" height="300px" type="card">
          <el-carousel-item v-for="(item,index) in banner" :key="index">
            <img :src="item.image_url" alt="">
          </el-carousel-item>
        </el-carousel>
      </section>
      <section>

      </section>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      banner:[]
    }
  },
  methods: {
    fetchData() {
      return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/banner/ad').then(res => {
          console.log(res)
          resolve(res.json())
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  async mounted() {
    let data = await this.fetchData();
    this.banner = data.data
    console.log(data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.hello{
  .banner{
    font-size 14px
  }
}

</style>
