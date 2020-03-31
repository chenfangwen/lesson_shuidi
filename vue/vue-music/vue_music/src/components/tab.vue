<template>
  <div class="tab">
    <router-link  v-for="(item,index) in tabs" :key="index" class=" tab-item"  :to="item.to">
      <span>{{item.content}}</span>
    </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tabs:[
        {
          id:1,
          content:'推荐',
          to:'/recommend'
        },
        {
          id:1,
          content:'排行',
          to:'/rank'
        },
        {
          id:1,
          content:'歌手',
          to:'/singer'
        }
      ]
    }
  },
  methods:{
  }
}
</script>
<style lang="stylus" scoped>
.tab{
    position: fixed;
    z-index 1
    top 43px
    height: 44px;
    width: 100%;
    display flex
    font-size:13px;
    background: rgb(212, 68, 57);
    .tab-item{
      width 33.3%
      text-align center
      height 44px
      line-height 44px
      color: #e4e4e4;
      span{
        padding-bottom: 3px
      }
      &.router-link-active {
        span {
          font-weight: bold;
          color: #f1f1f1;
          border-bottom: 2px solid #f1f1f1; 
        }
      }
    }
    
}
</style>