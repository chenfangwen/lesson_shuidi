<template>
    <div class="albumLists">
        <div class="back">
            <img @click="back" class="back_img" src="../assets/back2.png" alt="">
            <div class="type">歌单</div>
        </div>
        <div class="album">
            <img class="image" :src="playList.coverImgUrl" alt="">
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
                <div class="music_item_box">
                <div class="song">{{ item.name }}</div>
                <div class="singer">{{item.ar[0].name}}-{{ item.al.name }}</div>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            playList:(state) => state.playList,
            curIndex:(state) => state.curIndex
        }),
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
        background-color: #f2f3f4;
        /* margin-top: 50px; */
        .back{
            text-align left
            height 25px
            display flex
            margin-top  10px
            line-height 25px
            .back_img{
                width 25px
                height 25px
                margin-left 10px
            }
            .type{
                font-size 19px
                margin-left 15px
            }
        }
        .album{
            width 97%
            margin-top 20px
            height 200px
            margin-left 1.5%
            display flex
            background-color: #f2f3f4;
            .image{
                height 150px
                width 150px
            }
            .info{
                margin-left 20px
                text-align-last left
                .name{
                    color white
                    font-weight 600
                    margin  5px 0
                }
                .singer{
                    margin  10px 0
                    font-size 12px
                    width 92%
                    color: #757575;
                    // overflow hidden
                    // white-space nowrap
                    // text-overflow ellipsis
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
            // background-color: white;
            .m-head{
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
                width: 100vw;
                height: 47px;
                padding 1% 
                // margin-left 1.5%
                text-align left 
                // 
                .music_item_box{
                    position: relative;
                    margin-top  10px
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
                        -webkit-line-clamp: 3; //控制文字行数
                        -webkit-box-orient: vertical; //子元素数值排列
                    }
                    .singer{
                        font-size 11px
                        color: #757575;
                        height 18px
                        font-weight 500
                        padding-top 2px
                        padding-bottom 2px
                        overflow: hidden;
                        text-overflow:ellipsis;//文本溢出显示省略号
                        display: -webkit-box;
                        -webkit-line-clamp: 3; //控制文字行数
                        -webkit-box-orient: vertical; //子元素数值排列
                    }
                }
            }
        }
        
    }
</style>