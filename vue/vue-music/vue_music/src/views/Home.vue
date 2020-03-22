<template>
  <div class="home">
    <div class="nav">
      <div class="search">
        <div class="input"><input @change="search"  type="search" v-model="searchValue"/></div>
        <img @click="search" class="search_img" src="../assets/search.png" alt="">
      </div>
    </div>
    <div class="music_list">
      <ol>
        <li @click="getCur_music(item)" class="music_item" v-for="(item, index) in musicsList" :key="index">
          <span style="font-weight: 600;">歌曲：</span>{{ item.name }} <br />
          <span style="font-weight: 600;">歌手：</span>{{ item.artists[0].name }}<br />
        </li>
      </ol>
    </div>
    <div class="info" v-show="ifShow">
      <div class="avator"><img class="vatoar" :src="cur_music_pic" alt=""></div>
      <div class="name">
        <div class="left" style="font-weight: 600;">歌曲：{{cur_music.name}}</div>
        <div class="left" style="font-weight: 600;">歌手：{{artistsNmae}}</div>
      </div>
      <audio class="audio" loop controls autoplay="autoplay" :src='"http://music.163.com/song/media/outer/url?id="+cur_music.id+".mp3"'></audio>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState,mapActions} from 'vuex'
export default {
  name: 'Home',
  data(){
    return {
      searchValue:'',
      musicsList:[]
    }
  },
  computed:{
    ...mapState({
        cur_music:(state) => state.cur_music,
        cur_music_pic:(state) => state.cur_music_pic
    }),
    ifShow(){
      return this.cur_music!=''?true:false;
    },
    artistsNmae(){
      if( this.cur_music.artists){
        return this.cur_music.artists[0].name;
      }
    }
  },
  components: {
    HelloWorld
  },
  methods:{
    ...mapActions(['getCur_music']),
    search: function() {
            //判断输入框输入的数据是否为非法的
            //如果不是，则发送HTTP的GET请求
            var that = this;
            if(that.searchValue != "" && that.searchValue != undefined){
              //更改提示文字
              //获取输入框输入的数据
              var url = "http://localhost:3000/search?keywords=" + that.searchValue;
              //实现XMLHttpRequest对象， 用来发送HTTP请求
              var request = new XMLHttpRequest()
              //需要打开的网址
              request.open('GET', url)
              //用来获取API返回的数据
              request.onreadystatechange = function() {
                //状态正确， 返回数据
                if(request.readyState === 4 && request.status === 200){
                  //获取响应的内容
                  var result = request.responseText
                  //将响应的内容转换为JSON对象
                  var response_result = JSON.parse(result)
                  //动态绑定数据到vue.musicsList
                  that.musicsList = response_result.result.songs;
                  console.log(that.musicsList)
                }
              }
              //最终发出请求
              request.send(null)
            } else {
              //如果是空字符串或者undefined，则输出
              this.message = "没有输入任何数据"
            }
          }
  }
}
</script>

<style  scoped>
.home{
  background-color: #f2f3f4;
  margin: 0;
  padding: 0;
}
.nav{
  position: relative;
  text-align: center;
  /* display: flex; */
  top: 0;
  width: 100vw;
  height: 40px;
}
.search{
  width: 50vw;
  margin-left: 50vw;
  /* text-align: right; */
  display: flex;
}
.input{
  position: relative;
  margin-left: 150px;
  margin-top: 10px;
  height: 20px;
}
.search_img{
  position: relative;
  /* margin-right: 0; */
  margin-top: 10px;
  height: 20px;
  width: 20px;
}
.music_list{
  position: relative;
  margin-top: 50px;
}
.music_item{
  position: relative;
  width: 100vw;
  height: 50px;
  margin-bottom: 50px;
}
.info{
  background-color: #fff;
  position: fixed;
  display: flex;
  bottom: 0;
  height: 50px;
}
.avator{
  width: 15vw;
}
.vatoar{
  width: 50px;
  height: 50px;
  border-radius: 25px;;
}
.name{
  width: 35vw;
  /* margin-left: 20px; */
}
.left{
  text-align: left;
}
.audio{
  /* background-color: #fff; */
  width: 48vw;
  /* margin-left: 20px; */
}
</style>
