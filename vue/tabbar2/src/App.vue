<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="item-icon" src = "./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src = "./assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src = "./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src = "./assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="item-icon" src = "./assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src = "./assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src = "./assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src = "./assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> -->
    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o" to="/home">标签1</van-tabbar-item>
        <van-tabbar-item icon="search" to="/category">标签2</van-tabbar-item>
        <van-tabbar-item icon="freinds-o" to="/shopcart">标签3</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/profile">标签4</van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
  // import TabBar from './components/tabbar/TabBar'
  // import TabBarItem from './components/tabbar/TabBarItem'
export default {
    name: 'app',
    data(){
      return{
        tabbar:[
          {
            name:'首页'
          },{
            name:'首页'
          },{
            name:'首页'
          },{
            name:'首页'
          }
        ],
        active:0
      }
    },
    methods:{
      onChange(index){
          this.active = index;
      }
    },
    components: {
      // TabBar,
      // TabBarItem
    }
  }
</script>

<style>
@import "./assets/css/base.css"

</style>
