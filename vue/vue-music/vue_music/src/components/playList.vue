<template>
    <div class="albumList">
        <div class="album">
            <img class="image" :src="playList.coverImgUrl" alt="">
            <div class="info">
                <div class="name">{{playList.name}}</div>
                <div class="singer">{{playList.description}}</div>
            </div>
        </div>
        <div @click="getCur_music(item)" class="music_item" v-for="(item, index) in playList.tracks" :key="index">
            <div class="music_item_box">
            <div class="song">{{ item.name }}</div>
            <div class="singer">{{item.ar[0].name}}-{{ item.al.name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            playList:(state) => state.playList
        })
    },
    methods:{
        ...mapActions(['getCur_music']),
    }
}
</script>

<style lang="stylus" scoped>
.albumList{
        position: relative;
        background-color: #f2f3f4;
        /* margin-top: 50px; */
        .album{
            width 97%
            margin-top 20px
            height 200px
            margin-left 1.5%
            display flex
            .image{
                height 150px
                width 150px
            }
            .info{
                margin-left 20px
                text-align-last left
                .name{
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
        .music_item{
            position: relative;
            // background-color: #f2f3f4;
            width: 97vw;
            height: 47px;
            margin-left 1.5%
            text-align left 
            border-bottom: 1px solid #e4e4e4;
            .music_item_box{
              position: relative;
              margin-top  10px
              height 40px
              margin-bottom 7px
              .song{
                font-size 14px;
                font-weight 500
                height 20px
                padding-top  2px
                padding-bottom 2px
              }
              .singer{
                font-size 11px
                color: #757575;
                height 18px
                font-weight 500
                padding-top 2px
                padding-bottom 2px
              }
            }
        }
    }
</style>