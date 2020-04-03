<template>
    <div class="" id="singer">
        <div class="header">
            <img @click="back" src="../assets/back.png" alt="">
            <div class="name">{{singerInfo.name}}</div>
        </div>
        <div class="bgimg">
            <img :src="singerInfo.picUrl" alt="">
        </div>
        <div class="content">
            <van-tabs v-model="active" sticky animated swipeable>
                <van-tab title="主页">
                    <div class="info">
                        <div class="someHot">
                            <div class="hot">近期热门</div>
                            <div @click="getCur_music_m(item,index)" class="song" v-for="(item,index) in someHot" :key="index">
                                <div class="index" v-show="curIndex!=index">
                                    <img :src="item.al.picUrl" alt="">
                                </div>
                                <div class="index" v-show="curIndex===index">
                                    <img class="laba" src="../assets/laba.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <div class="name1">{{item.name}}</div>
                                        <div class="name2" v-if="item.alia!=''">({{item.alia[0]}})</div>
                                    </div>
                                    <div class="singer">{{item.ar[0].name}}-{{item.al.name}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="baseInfo">
                            <div class="text">基本信息</div>
                            <div class="content">

                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="歌曲">
                    <div class="hotSongs">
                        <div class="list">
                            <div @click="getCur_music_m(item,index)" class="song" v-for="(item,index) in hotSongs" :key="index">
                                <div class="index" v-show="curIndex!=index">{{index+1}}</div>
                                <div class="index" v-show="curIndex==index">
                                    <img src="../assets/laba.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <div class="name1">{{item.name}}</div>
                                        <div class="name2" v-if="item.alia!=''">({{item.alia[0]}})</div>
                                    </div>
                                    <div class="singer">{{item.ar[0].name}}-{{item.al.name}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="专辑">内容 3</van-tab>
                <van-tab title="视频">暂无视频</van-tab>
            </van-tabs>
        </div>
        <!-- <div class="test">sfs</div> -->
    </div>
</template>

<script>
import singer from '../api/singer.js'
import {mapActions,mapState} from 'vuex'
export default {
    data() {
        return {
            singerInfo:{},
            hotSongs:[],
            active:1,
            someHot:[]
        }
    },
    computed:{
        ...mapState(['curIndex'])
    },
    watch:{
        '$route':function(to,from){
            // document.body.scrollTop = 0
            this.search()
        }
    },
    methods:{
        ...mapActions(['getCur_music','getCurIndex','getCurList']),
        getCur_music_m(item,index){
            console.log(this.curIndex)
            this.getCur_music(item)
            this.getCurIndex(index),
            this.getCurList(this.hotSongs)
        },
        search(){
            window.scrollTo(0,0)
            console.log(this.$route.params)
            const id = this.$route.params.id;
            singer.getSingerSongs(id)
            .then(res => {
                console.log(res.data);
                if(res.data.artist){
                    this.singerInfo = res.data.artist
                    // this.singerPic = this.singerInfo.picUrl
                    this.hotSongs = res.data.hotSongs
                    this.someHot = res.data.hotSongs.slice(0,3)
                }
            })
        },
        back(){
            this.$router.go(-1)
        }
    },
    created(){
        this.search()
    }
}
</script>

<style lang="stylus" scoped>
#singer{
    position absolute
    width 100%
    height 100%
    z-index 100
    background-color #fff
    overflow scoll
    .header{
        position fixed
        display flex
        top 0
        width 100%
        height 50px
        background-color  rgb(212, 68, 57);
        text-align left
        z-index 2
        img{
            height 30px
            width 30px
            margin-left 10px
            margin-top 10px
        }
        .name{
            color #fff
            font-size 18px
            font-weight 600
            line-height 50px
        }
    }
    .bgimg{
        position absolute
        top 20px
        height 43%
        width 100%
        background-size cover
        img{
            position relative
            display inline-block
            width 100%
            height auto
        }
    }
    .content{
        position relative
        margin-top 70%
        z-index 1
        height 100%
        border-radius 15px 15px 0 0
        background-color #fff
        width 100%
        .info{
            width 100vw
            margin-top 5px
            .someHot{
                position relative
                margin-left 3%
                width 94%
                .hot{
                    height 40px
                    color #2E3030;
                    font-weight 600
                    font-size 17px
                    line-height 40px
                    text-align left
                }
                .song{
                    display flex
                    position relative
                    width 100%
                    height 70px
                    .index{
                        margin-top 10px
                        width 50px
                        height 50px
                        img{
                            border-radius 5px
                            width 50px
                            height 50px
                        }
                        .laba{
                            margin 16px
                            width 18px
                            height 18px
                        }
                    }
                    .info{
                        text-align left
                        margin-left 10px
                        margin-top 10px
                        height 50px
                        width 70%
                        .name{
                            display flex
                            font-size 15px
                            width 100%
                            height 30px
                            line-height 30px
                            .name1{
                                overflow: hidden;
                                text-overflow:ellipsis;//文本溢出显示省略号
                                display: -webkit-box;
                                -webkit-line-clamp: 1; //控制文字行数
                                -webkit-box-orient: vertical; //子元素数值排列
                            }
                            .name2{
                                color #757575; 
                                margin-left 5px
                                overflow: hidden;
                                text-overflow:ellipsis;//文本溢出显示省略号
                                display: -webkit-box;
                                -webkit-line-clamp: 1; //控制文字行数
                                -webkit-box-orient: vertical; //子元素数值排列
                            }
                        }
                        .singer{
                            font-size 12px
                            height 20px
                            line-height 20px
                            color #757575; 
                        }
                    }
                }
            }
            .baseInfo{
                position relative
                margin-left 3%
                width 94%
                .text{
                    height 40px
                    color #2E3030;
                    font-weight 600
                    font-size 17px
                    line-height 40px
                    text-align left
                }
            }
        }
        .hotSongs {
            width 100vw
            .list {
                position relative
                margin-left 3%
                width 94%
                .song{
                    display flex
                    position relative
                    width 100%
                    height 70px
                    .index{
                        width 50px
                        height 50px
                        text-align center
                        line-height 50px
                        margin-top 10px
                        color #757575;
                        img{
                            margin 16px
                            width 18px
                            height 18px
                        }
                    }
                    .info{
                        text-align left
                        margin-left 10px
                        margin-top 10px
                        height 50px
                        width 70%
                        .name{
                            display flex
                            font-size 15px
                            width 100%
                            height 30px
                            line-height 30px
                            .name1{
                                overflow: hidden;
                                text-overflow:ellipsis;//文本溢出显示省略号
                                display: -webkit-box;
                                -webkit-line-clamp: 1; //控制文字行数
                                -webkit-box-orient: vertical; //子元素数值排列
                            }
                            .name2{
                                color #757575; 
                                margin-left 5px
                                overflow: hidden;
                                text-overflow:ellipsis;//文本溢出显示省略号
                                display: -webkit-box;
                                -webkit-line-clamp: 1; //控制文字行数
                                -webkit-box-orient: vertical; //子元素数值排列
                            }
                        }
                        .singer{
                            font-size 12px
                            height 20px
                            line-height 20px
                            color #757575; 
                        }
                    }
                }
            }
        }
    }
    .test{
        margin-top 1000px
        height 20px
        width 20px
        background-color red
    }
}
</style>