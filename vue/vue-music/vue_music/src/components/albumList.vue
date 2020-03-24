<template>
    <div class="albumList">
        <div class="album">
            <img class="image" :src="albumPic" alt="">
            <div class="info">
                <div class="name">{{albumName}}</div>
                <div class="singer">歌手:{{albumSinger}}></div>
            </div>
        </div>
        <div @click="getCur_music(item)" class="music_item" v-for="(item, index) in albumMusic" :key="index">
            <div class="music_item_box">
            <div class="song">{{ item.name }}</div>
            <div class="singer">{{ item.ar[0].name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            albumMusic:(state) => state.albumMusic
        }),
        albumName(){
            return this.albumMusic[0].al.name
        },
        albumPic(){
            return this.albumMusic[0].al.picUrl
        },
        albumSinger(){
            return this.albumMusic[0].ar[0].name
        }
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
                    margin  5px 0
                    font-size 12px
                    color: #757575;
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