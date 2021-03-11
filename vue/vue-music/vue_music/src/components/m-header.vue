<template>
  <div class="header">
    <h1 class="text">VUE 音乐</h1>
    <div class="mine" @click="showUser">
     <div>
       <img  class="mine_img" src="../assets/mine.png" alt="">
     </div>
    </div>
    <router-link to="/search" class="search" tag="div">
      <div class="">
        <img  class="search_img" src="../assets/search.png" alt="">
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    showUser() {
      this.$emit('showuser');
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  position fixed;
  z-index 1
  top 0
  height: 44px;
  width: 100%;
  text-align: center;
  background: rgb(212, 68, 57);
  .text {
    line-height: 44px;
    font-weight: bold;
    font-size  14px
    color: rgb(241, 241, 241);
    letter-spacing: 3px;
  }
  .mine {
    position: absolute;
    line-height 44px
    top: -1.5px;
    left: 10px;
    .mine_img{
      position: relative;
      /* margin-right: 0; */
      margin-top 11px;
      height: 20px;
      width: 20px;
    }
  }
  .search {
    position: absolute;
    top: 0;
    right: 10px;
    .search_img{
      position: relative;
      /* margin-right: 0; */
      margin-top 11px;
      height: 20px;
      width: 20px;
    }
  }
}
</style>