<template>
    <div>
       <div class="goods">
           <div class="menu-wrapper" ref="menuWrapper">
               <ul>
                   <li v-for="(item,index) in goods" class="menu-item" :key="index">
                       <span class="text border-1px">
                           <span class="icon"></span>{{item.name}}
                       </span>
                   </li>
               </ul>
           </div>
           <div class="food-wrapper" ref="foodWrapper">
               <ul>
                   <li v-for="item in goods" class="foodlist" :key="item.id">
                       <h1 class="title">{{item.name}} </h1>
                       <ul>
                           <li v-for="food in item.foods" class="food-item border-1px" :key="food.id">
                               <div class="icon"><img :src="food.icon" alt="" width="57" height="57"></div>
                               <div class="content">
                                   <h2 class="name">{{food.name}}</h2>
                                   <p class="desc">{{food.discription}}</p>
                               </div>
                           </li>
                       </ul>
                       
                   </li>
               </ul>
           </div>
       </div>
       
    </div>

</template>
<script>
//组件化
import BScroll from 'better-scroll'
import shopcart from '../components/shopcart/shopcart'
import cartcontrol from '../components/cartcontral/cartcontral'
import food from '../components/food/food'
const response = require('../common/data/good.json')
export default {
    data() {
        return{
            goods:[],
            selectedFood:{}
        }
    },
    components:{
        shopcart,cartcontrol,food
    } ,
    created() {
        this.goods = response.data;
        this.$nextTick(()=>{
            this._initScroll();
        })
    },
    methods:{
        _initScroll(){
            this.foodScroll=new BScroll(this.$refs.foodWrapper,{
                click:true
            })
            this.menuScroll=new BScroll(this.$refs.menuWrapper,{
                click:true
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    // background-color green
    .menu-wrapper
        flex 0 0 80px
        width 80px
        background-color #f3f5f7
        .menu-item
            display table
            height 54px
            width 56px
            padding 0 12px
            line-height 14px
            z-index 10
            margin-top -1px
            background-color #ffffff
            font-weight 700
        .text
            display table-cell
            width 56px
            vertical-align midddle 
            font-size 12px
</style>