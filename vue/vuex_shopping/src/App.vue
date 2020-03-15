<template>
  <div id="app">
      <div class="header">
                <router-link to="/list"
                             class="header-title">电商网站首页</router-link>
                <div class="header-menu">
                    <router-link to="/cart"
                                 class="header-menu-cart">
                        购物车
                        <span v-if="cartList.length">{{cartList.length}}</span>
                    </router-link>
                </div>
                <div class="header-menu">
                        {{user}}
                </div>
                <div class="header-menu">
                    <router-link to="/login/logout"
                                 class="header-menu-cart">
                        退出登录
                    </router-link>
                </div>
            </div>
            <!-- <img src="./images/airPods.jpg"/> -->
            <!-- <list/> -->
    <router-view />
  </div>
</template>
<script>
    // import list from "./views/list.vue"
    export default {
        name: 'App',
        components: {
            // list
        },
        data(){
            return {
                user: this.$store.state.username
            }
        },
        computed: {
            cartList(){
                return this.$store.state.cartList;
            },
            show(){
                return this.$store.state.loginStatus;
            }
        },
        mounted(){
            console.log(window.localStorage.getItem('username'),this.user,this.$store.state.username)
        }
    }
</script>

<style scoped>

</style>