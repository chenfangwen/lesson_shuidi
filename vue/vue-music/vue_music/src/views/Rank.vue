<template>
    <div class="" id="rank">
        <div :class="['list', cur_music ? 'list-padding' : '']" id="list" >
            <div v-if="TopList" class="playlist"  @click="toPlayList(playList.id)" v-for="(playList,index1) in TopList" :key="index1">
                <img :src="playList.coverImgUrl" alt="">
                <div class="songs">
                    <div class="song" v-for="(song,index2) in playList.someSongs" :key="index2">
                        <div class="name">{{index2+1}}.{{song.name}}</div>
                        <div class="null">-</div>
                        <div class="singers">
                            <div class="singer" v-for="(singer,index3) in song.ar" :key="index3">
                                <div class="singername" >{{singer.name}}</div><div v-if="index3<song.ar.length-1" class="null">/</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import API from '../api/rank.js'
import API2 from '../api/recommend.js'
import {mapActions,mapState} from 'vuex'
export default {
    name:'Rank',
    data () {
        return {
            TopList: ''
        }
    },
    computed:{
        ...mapState(['cur_music','cur_music_pic'])
    },
    watch: {
        '$route':function(to,from){
          // document.body.scrollTop = 0
        }
    },
    methods: {
        toPlayList(id){
            this.$router.push({
                path:`/banner/${id}&0`
            })
        }
    },
    mounted() {
        if(this.cur_music!==''){
            // console.log('++++')
            let list = document.getElementById('list')
            console.log(list,'----')
            list.style.paddingBottom = 60 + 'px'
        }
        let n_List = []
        API.getTopList()
        .then(res => {
            console.log(res.data)
            let arr = []
            n_List = res.data.list
            let PromiseList = [];
            for( let i = 0; i < n_List.length; i++){
                let promise = API2.getRecommendListDetail(n_List[i].id)
                .then(res2=>{
                    // console.log(res.data,'+++')
                    if(res2.data.playlist){
                        n_List[i].someSongs = res2.data.playlist.tracks.slice(0,3)
                    }
                });
                PromiseList.push(promise);
            }
            Promise.all(PromiseList).then(res => {
                this.TopList = n_List;
            });
        })
        // setTimeout(() => {
        //     this.TopList = n_List
        // },3000)

    }
}
</script>

<style lang="stylus" scoped>
#rank{
    margin: 0;
    padding: 0;
    position: absolute;
    width 100vw
    // background-color #fff
    .list-padding {
      padding-bottom 60px
    }
    .list{
        position absolute
        top 85px
        width: 98%;
        margin: 0 1%;
        
        .playlist{
            height 100px
            text-align left
            margin 10px
            display flex
            overflow: hidden;
            text-overflow:ellipsis;//文本溢出显示省略号
            display: -webkit-box;
            -webkit-line-clamp: 1; //控制文字行数
            img{
                width 100px
                height 100px
                border-radius 5px
                margin-left 0
            }
            .songs{
                .song{
                    display flex
                    font-size 11px
                    height 18px
                    margin 11px 5px
                    line-height 18px
                    overflow: hidden;
                    text-overflow:ellipsis;//文本溢出显示省略号
                    display: -webkit-box;
                    -webkit-line-clamp: 1; //控制文字行数
                    .name{
                    }
                    .null{
                        width 10px
                        text-align center
                        
                    }
                    .singers{
                        position relative
                        display flex
                        font-size 11px
                        // width 100%
                        color: #757575;
                        height 18px
                        font-weight 500
                        padding-top 1px
                        // padding-bottom 1px
                        // overflow: hidden;
                        // text-overflow:ellipsis;//文本溢出显示省略号
                        // display: -webkit-box;
                        // -webkit-line-clamp: 1; //控制文字行数
                        .singer{
                            display flex
                            height 18px
                            line-height 18px
                            .singername{

                            }
                            .null{
                                width 10px
                                text-align center
                                height 18px
                                line-height 18px
                            }
                        }
                    }
                    //
                }
            }
        }
    }
}
</style>

