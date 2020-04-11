<template>
  <div class="search-box">
    <!-- <i class="icon-search"></i> -->
     <input id="search_123" :placeholder="placeholder" @click.stop="searchSuggest" @keyup.enter="search" v-model="query" type="text" class="box">
      <img @click="clear" v-show="query!=''" class="search_img" src="../assets/delete.png" alt="">
    <!-- <img @click="search" class="search_img" src="../assets/search.png" alt=""> -->
    <!-- <span class="search" >{{clickInfo}}</span> -->
  </div>
</template>

<script>
// import { emit } from 'cluster'
// import {debounce} from 'common/js/utl'
export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入关键词'
    }
  },
  watch:{
    query(value){
      this.searchSuggest()
    }
  },
  data () {
    return {
      query: '',
      clickInfo: '搜索'
    }
  },
  methods: {
    clear () {
      this.query = ''
    },
    searchSuggest(){
      this.$emit('searchSuggest',this.query)
    },
    search(){
        this.$emit('search',this.query)
    },
    setQuery () {
      console.log(this.query)
    }
  },
  mounted(){
    document.getElementById('search_123').focus()
  }
}
</script>

<style scoped lang="stylus">
.search-box {
//   position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 90%;
//   margin-left 2%
//   margin-top 20px;
  height: 40px;
  border-bottom: 1px solid rgb(235, 235, 235);
  background-color #d44439
  
  .search_img{
    width 30px
    height 30px
    margin 0
    padding 0
  }
  .box {
    flex: 1;
    line-height: 25px;
    // width 699px
    background: rgb(212, 68, 57);
    padding 0 20px 0 5px
    color: #fff;
    font-size:14px;
    border: none;
    outline: medium;
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  .icon-delete {
    position: absolute;
    right: 12px;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    border: none;
  }
  .search {
    padding: 0 5px;
    font-size: 14px;
    color:#2E3030;
  }
}
</style>