<template>
    <div class="albumLists">
        <div class="back">
            <img @click="back" class="back_img" src="../assets/back2.png" alt="">
            <div class="type">歌单</div>
        </div>
        <div class="album">
            <div id="bgimg" class="blur">
                <!-- <div class="filter"></div> -->
                <img :src="playList.coverImgUrl" width="100%" height="100%">
            </div>
            <div class="img">
                <img class="image" :src="playList.coverImgUrl" alt="">
            </div>
            <div class="info">
                <div class="name">{{playList.name}}</div>
                <div class="singer">{{playList.description}}</div>
            </div>
        </div>
        <div class="list">
            <div class="m-head">
                <div class="all">播放全部</div>
                <div class="num">(共{{length}}首)</div>
            </div>
            <div @click="getCur_music_m(item,index)" class="music_item" v-for="(item, index) in playList.tracks" :key="index">
                <div class="index" v-show="curIndex!=index||curIndex===''||curList!=playList.tracks">{{index+1}}</div>
                <div class="index" v-show="curIndex==index&&curIndex!==''&&curList==playList.tracks">
                    <img src="../assets/laba.png" alt="">
                </div>
                <div class="music_item_box">
                    <div class="song">{{ item.name }}</div>
                    <div class="singers">
                        <div class="singer" v-for="(singer,index) in item.ar" :key="index">
                            <div class="singername" >{{singer.name}}</div><div v-if="index<item.ar.length-1" class="null">/</div>
                        </div>
                        <div class="singer">
                            <div class="null">-</div><div class="singername" >{{ item.al.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['curList','curIndex','playList']),
        length(){
            if(this.playList.tracks){
                return this.playList.tracks.length
            }
        }
    },
    methods:{
        ...mapActions(['getCur_music','getCurIndex','getCurList']),
        getCur_music_m(item,index){
            // console.log(index)
            this.getCur_music(item)
            this.getCurIndex(index)
            this.getCurList(this.playList.tracks)
            // console.log(this.curIndex)
        },
        back(){
        this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>

.albumLists{
        position: absolute;
        top 0
        width 100vw
        background-color: rgba(0, 0, 0, 0.3);
        /* margin-top: 50px; */
        .back{
            position fixed
            background-color rgb(212, 68, 57);
            text-align left
            height 50px
            color white
            width 100vw
            display flex
            z-index 2
            // margin-top  10px
            line-height 25px
            .back_img{
                margin-top 12px
                width 25px
                height 25px
                margin-left 10px
            }
            .type{
                margin-top 12px
                font-size 19px
                margin-left 15px
            }
        }
        .album{
            position absolute
            margin-top 55px
            height 200px
            width 100vw

            // position: fixed;
            // left: 0;
            // right: 0;
            // top: 44px;
            // bottom: 0;

            display flex
            // background-color: #f2f3f4;
            #bgimg{
                width 100vw
                height 500px
                position relative
            }
            #bgimg.blur{
                position absolute
                top -300px
                left 0px
                // width 80%
                // background-size cover
                filter blur(100px)
                z-index -1
            }
            #bgimg:before{
                position absolute
                width 100%
                height 100%
                top 0
                left 0
                bottom 0
                right 0
                filter blur(7px)
                z-index -1
            }
            .img{
                margin-left 5px
                height 150px
                width 150px
                .image{
                    height 150px
                    width 150px
                }
            }
            .info{
                margin-left 20px
                text-align left
                .name{
                    color white
                    font-weight 600
                    margin  5px 0
                }
                .singer{
                    margin  10px 0
                    font-size 12px
                    width 92%
                    color: #c7c7c7; 
                    overflow: hidden;
                    text-overflow:ellipsis;//文本溢出显示省略号
                    display: -webkit-box;
                    -webkit-line-clamp: 3; //控制文字行数
                    -webkit-box-orient: vertical; //子元素数值排列
                }
            }
        }
        .list{
            // border-radius 5px
            border-radius 15px 15px 0 0
            background-color: white;
            margin-top 250px
            .m-head{
                position sticky
                top 0
                height 30px
                widows 100%
                display flex
                border-radius 15px 15px 0 0
                background-color: white;
                text-align left
                font-size 15px
                padding 15px 10px 0px 10px
                // border-bottom: 1px solid #e4e4e4;
                .num{
                    margin-top 2px
                    font-size 12px
                    color: #757575;
                }
            }
            .music_item{
                position: relative;
                background-color: white;
                display flex
                width: 100vw;
                height: 47px;
                // padding 1% 
                // margin-left 1.5%
                text-align left 
                // 
                .index{
                    width 50px
                    height 50px
                    text-align center
                    line-height 50px
                    margin-top 10px
                    color #757575;
                    img{
                        margin 12px
                        width 18px
                        height 18px
                    }
                }
                .music_item_box{
                    position: relative;
                    margin-top  10px
                    width 96%
                    margin-left 2%
                    height 40px
                    margin-bottom 7px
                    .song{
                        font-size 14px;
                        font-weight 500
                        height 18px
                        padding-top  2px
                        padding-bottom 2px
                        overflow: hidden;
                        text-overflow:ellipsis;//文本溢出显示省略号
                        display: -webkit-box;
                        -webkit-line-clamp: 1; //控制文字行数
                        -webkit-box-orient: vertical; //子元素数值排列
                    }
                    .singers{
                        position relative
                        display flex
                        font-size 11px
                        width 100%
                        color: #757575;
                        height 18px
                        font-weight 500
                        padding-top 2px
                        padding-bottom 2px
                        overflow: hidden;
                        text-overflow:ellipsis;//文本溢出显示省略号
                        display: -webkit-box;
                        -webkit-line-clamp: 1; //控制文字行数
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
                }
            }
        }
        
    }
</style>