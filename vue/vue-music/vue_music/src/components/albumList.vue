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
                <div class="singers" @click="showConfirm">
                    <div class="text">歌手:</div>
                    <div class="singer" v-for="(singer,index) in albumSingers" :key="index">
                        <div class="singername">{{ singer.name }}</div> <div class="null" v-if="index<albumSingers.length-1">/</div>
                    </div>
                    <div class="text">></div>
                </div>
            </div>
        </div>
        <singer-confirm ref="singerConfirm" :singers="albumSingers" />
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
                        <div class="singername">{{ singer.name }}</div> <div class="null" v-if="index<item.ar.length-1">/</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import SingerConfirm from './common/singerConfirm.vue'
export default {
    components:{
        SingerConfirm
    },
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
        albumSingers(){
            if(this.albumMusic[0]){return this.albumMusic[0].ar}
            else{return []}
        }
    },
    methods:{
        ...mapActions(['getCur_music','getCurIndex','getCurList']),
        showConfirm(){
            if(this.albumSingers.length>1){
                this.$refs.singerConfirm.show()
            } else {
                this.$router.push({
                    path:`/singer/${this.albumSingers[0].id}`
                })
            }
        },
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
                text-align left
                .name{
                    color white
                    font-weight 600
                    margin  5px 0
                }
                .singers{
                    margin  5px 0
                    font-size 12px
                    color: #c7c7c7; 
                    height 30px
                    line-height 30px
                    display flex
                    overflow: hidden;
                    text-overflow:ellipsis;//文本溢出显示省略号
                    // display: -webkit-box;
                    -webkit-line-clamp: 1; //控制文字行数
                    .text{
                        color: #c7c7c7; 
                    }
                    .singer{
                        display flex
                        text-align left
                        .singername{
                        }
                        .null{
                            width 10px
                            text-align center
                            height 30px
                            line-height 30px
                        }
                    }
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
                .singers{
                    display flex
                    font-size 11px
                    color: #757575;
                    height 13px
                    overflow: hidden;
                    text-overflow:ellipsis;//文本溢出显示省略号
                    // display: -webkit-box;
                    -webkit-line-clamp: 1; //控制文字行数
                    font-weight 500
                    padding-top 2px
                    padding-bottom 2px
                    .singer{
                        display flex
                        text-align left
                        .singername{
                        }
                        .null{
                            width 10px
                            text-align center
                            line-height 15px
                        }
                    }
                }
            }
        }
    }
}
</style>