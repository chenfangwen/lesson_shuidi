<template>
    <div class="albumList">
         <div class="back">
            <img @click="back" class="back_img" src="../assets/back2.png" alt="">
            <div class="type">专辑</div>
        </div>
        <div class="album">
            <div id="bgimg" class="blur">
                <img :src="albumPic" width="100%" height="100%">
            </div>
            <div class="img"><img class="image" :src="albumPic" alt=""></div>
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
                <div class="singers">
                    <div class="singer" v-for="(singer,index) in item.ar" :key="index">
                        {{ singer.name }}
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
        ...mapActions(['getCur_music','getCurIndex','getCurList']),
        getCur_music_m(item,index){
            this.getCur_music(item)
            this.getCurIndex(index),
            this.getCurList(this.albumMusic)
        },
         back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
.albumList{
        position: absolute;
        top 0
        // background-color: #f2f3f4;
        /* margin-top: 50px; */
        .back{
            position fixed
            background-color rgb(212, 68, 57);
            width 100vw
            color #fff
            text-align left
            height 50px
            display flex
            z-index 2
            line-height 25px
            .back_img{
                width 25px
                height 25px
                margin-top 12px
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
            display flex
            // .bgimg {
            //     position: absolute;
            //     left: -50%;
            //     top: -50%;
            //     width: 300%;
            //     height: 100%;
            //     z-index: -1;
            //     filter: blur(30px);
            //     .filter {
            //         position: absolute;
            //         width: 100%;
            //         height: 100%;
            //         background: black;
            //         opacity: 0.6;
            //     }
            // }
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
                filter blur(30px)
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
                height 150px
                width 150px
                .image{
                    height 150px
                    width 150px
                }
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
                    color: #c7c7c7; 
                }
            }
        }
        .list{
            // border-radius 5px
            border-radius 15px 15px 0 0
            background-color: white;
            margin-top 250px
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
                text-align left 
                // border-bottom: 1px solid #e4e4e4;
                .music_item_box{
                position: relative;
                margin-top  10px
                height 40px
                width 96%
                margin-left 2%
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