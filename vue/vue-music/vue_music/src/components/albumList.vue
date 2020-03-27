<template>
    <div class="albumList">
        <div class="album">
            <img class="image" :src="albumPic" alt="">
            <div class="info">
                <div class="name">{{albumName}}</div>
                <div class="singer">歌手:{{albumSinger}}></div>
            </div>
        </div>
        <div class="list">
            <div class="m-head">
                <div class="all">播放全部</div>
                <div class="num">(共{{albumMusic.length}}首)</div>
            </div>
            <div @click="getCur_music_m(item,index)" class="music_item" v-for="(item, index) in albumMusic" :key="index">
                <div class="music_item_box">
                <div class="song">{{ item.name }}</div>
                <div class="singer">{{ item.ar[0].name }}</div>
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
            albumMusic:(state) => state.albumMusic
        }),
        albumName(){
            if(this.albumMusic[0]){return this.albumMusic[0].al.name}
            
        },
        albumPic(){
            if(this.albumMusic[0]){return this.albumMusic[0].al.picUrl}
            
        },
        albumSinger(){
            if(this.albumMusic[0]){return this.albumMusic[0].ar[0].name}
            
        }
    },
    methods:{
        ...mapActions(['getCur_music','getCurIndex']),
        getCur_music_m(item,index){
            this.getCur_music(item)
            this.getCurIndex(index)
        }
    }
}
</script>

<style lang="stylus" scoped>
.albumList{
        position: absolute;
        top 0
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
                text-align left 
                // border-bottom: 1px solid #e4e4e4;
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
    }
</style>