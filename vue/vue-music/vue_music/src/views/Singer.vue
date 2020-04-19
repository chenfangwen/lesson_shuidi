<template>
    <div class="" id="singer">
        <div class="header">
            <img @click="back" src="../assets/back.png" alt="">
            <div class="name">{{singerInfo.name}}</div>
        </div>
        <div class="bgimg">
            <img :src="singerInfo.picUrl" alt="">
        </div>
        <div class="content" >
            <van-tabs id="list" v-model="active" sticky animated swipeable>
                <van-tab title="主页">
                    <div class="info">
                        <div class="someHot">
                            <div class="hot">近期热门</div>
                            <div @click="getCur_music_m(item,index)" class="song" v-for="(item,index) in someHot" :key="index">
                                <div class="index" v-show="curIndex!=index||curIndex===''||curList!=hotSongs">
                                    <img :src="item.al.picUrl" alt="">
                                </div>
                                <div class="index" v-show="curIndex==index&&curIndex!==''&&curList==hotSongs">
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
                            <div class="Text">
                                <div class="text1">基本信息</div>
                                <div class="text2">更多信息</div>
                            </div>
                            <div class="briefDesc">
                                <div class="dis_flex"><div class="boxL">昵称:</div><div class="boxR">{{singerInfo.name}}</div></div>
                                <div class="dis_flex"><div class="boxL">性别:</div><div class="boxR">男</div></div>
                                <div class="dis_flex"><div class="boxL"><div class="">简</div>介:</div><div class="boxR">{{singerInfo.briefDesc}}</div></div>
                            </div>
                        </div>
                        <div class="influence">
                            <div class="text">影响力</div>
                            <div class="detial" @click="toSingerTopList">
                                <div class="">歌手热度</div><div class="num">{{hotScore}}</div>
                                <div class="">歌手榜华语地区</div><div class="num">NO.{{NO}}</div> 
                                <div class="num">></div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="歌曲">
                    <div class="hotSongs">
                        <div class="list">
                            <div @click="getCur_music_m(item,index)" class="song" v-for="(item,index) in hotSongs" :key="index">
                                <div class="index" v-show="curIndex!=index||curIndex===''||curList!=hotSongs">{{index+1}}</div>
                                <div class="index" v-show="curIndex==index&&curIndex!==''&&curList==hotSongs">
                                    <img src="../assets/laba.png" alt="">
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <div class="name1">{{item.name}}</div>
                                        <div class="name2" v-if="item.alia!=''">({{item.alia[0]}})</div>
                                    </div>
                                    <!-- <div class="singer">{{item.ar[0].name}}-{{item.al.name}}</div> -->
                                    <div class="singers">
                                        <div class="singer" v-for="(singer,index) in item.ar" :key="index">
                                            <div class="singername" >{{singer.name}}</div><div v-if="index<item.ar.length-1" class="null">/</div>
                                        </div>
                                        <div class="singer">-{{ item.al.name }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab :title="albumText">
                    <div class="albumsLists">
                        <div class="sort">当前为按发行时间排序</div>
                        <div class="lists">
                            <div class="album" @click="toAlbum(item.id)" v-for="(item,index) in albums " :key="index">
                                <div class="image">
                                    <img :src="item.picUrl" alt="">
                                </div>
                                <div class="info">
                                    <div class="name">
                                        <div class="name1">{{item.name}}</div>
                                        <div class="name2" v-if="item.alias!=''">({{item.alias[0]}})</div>
                                    </div>
                                    <div class="time_num">
                                        <div class="time">{{item.publishTime|time}}</div>
                                        <div class="num">歌曲{{item.size}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
                <van-tab title="视频">
                    <div class="mvs">
                        <div class="text"><div class="text1">全部</div><div class="text2">(共{{mvs.length}}个)</div></div>
                        <div class="mvsList">
                            <div class="mvitem" @click="toMv(mv)" v-for="(mv,index) in mvs" :key="index">
                                <div class="pic"><img :src="mv.imgurl" alt=""></div>
                                <div class="info">
                                    <div class="name">{{mv.name}}</div>
                                    <div class="time">{{mv.publishTime}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <!-- <div class="test">sfs</div> -->
    </div>
</template>

<script>
import singer from '../api/singer.js'
import {mapActions,mapState} from 'vuex'
export default {
    name:'Singer',
    data() {
        return {
            singerInfo:{},
            hotSongs:[],
            active:0,
            someHot:[],
            hotScore:0,
            NO:0,
            albums:[],
            mvs:[]
        }
    },
    computed:{
        ...mapState(['curIndex','curList','cur_music']),
        albumText(){
            if(this.albums){
                return '专辑 '+ this.albums.length
            }
            else{
                return ''
            }
        }
    },
    filters: {
        time(value) {
        // console.log(value);
        const date = new Date(value);
        // console.log(date)
        return  `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
        }
    },
    watch:{
        cur_music(value){
            if(value!==''){
                console.log(value.name)
                let list = document.getElementById('list')
                // console.log(list,'----')
                list.style.paddingBottom = 60 + 'px'
                // console.log('success')
            }
        },
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
        toMv(item){
            this.$router.push({
                path:`/mvdetial/${id}`
            })
        },
        search(){
            window.scrollTo(0,0)
            console.log(this.$route.params)
            const id = this.$route.params.id;
            singer.getSingerTopList().then(res=>{
                console.log(res.data);
                let list = res.data.list.artists
                for(let i = 0; i<list.length;i++){
                    if(list[i].id==id){
                        this.hotScore = list[i].score
                        console.log(list[i].score,i+1)
                        this.NO = i+1
                        break;
                    }else{
                        this.hotScore = '未知'
                        this.NO = '暂未上榜'
                    }
                }
            })
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
            
            singer.getSingerAlbum(id)
            .then(res=>{
                console.log(res.data)
                this.albums = res.data.hotAlbums
            })
            singer.getSingerMv(id)
            .then(res => {
                console.log(res.data)
                this.mvs = res.data.mvs
            })
        },
        back(){
            this.$router.go(-1)
        },
        toAlbum(id){
            this.$router.push({
                path:`/banner/${id}&10`
            })
        },
        toSingerTopList(){
            this.$router.push({
                path:'/singerTopList'
            })
        }
    },
    mounted(){
        if(this.cur_music!==''){
            console.log(this.cur_music.name)
            let list = document.getElementById('list')
            // console.log(list,'----')
            list.style.paddingBottom = 60 + 'px'
            console.log('success')
        }
        this.search()
        // console.log(this.curIndex ,'------')
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
                            overflow hidden
                            text-overflow ellipsis;//文本溢出显示省略号
                            display  -webkit-box;
                            -webkit-line-clamp  1; //控制文字行数
                            .name1{
                            }
                            .name2{
                                color #757575; 
                                margin-left 5px
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
                .Text{
                    display flex
                    height 40px
                    .text1{
                        height 40px
                        color #2E3030;
                        font-weight 600
                        font-size 17px
                        line-height 40px
                        text-align left
                    }
                    .text2{
                        position absolute
                        right 0
                        height 20px
                        top 10px
                        border-radius 10px
                        padding 0 10px 0 10px
                        color #2E3030;
                        // font-weight 600
                        border 0.5px solid #c7c7c7;
                        font-size 12px
                        line-height 20px
                        text-align center
                    }
                }
                .briefDesc{
                    .dis_flex{
                        margin-top 5px
                        display flex
                        font-size 12px
                        .boxL{
                            color #757575; 
                            display flex
                        }
                        .boxR{
                            margin-left  10px
                            color #2E3030;
                            text-align left
                            overflow: hidden;
                            text-overflow:ellipsis;//文本溢出显示省略号
                            display: -webkit-box;
                            -webkit-line-clamp: 4; //控制文字行数
                            -webkit-box-orient: vertical; //子元素数值排列
                        }
                    }
                }
            }
            .influence{
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
                .detial{
                    font-size 13px
                    display flex
                    .num{
                        margin 0px 10px
                        color #2E3030;
                    }
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
                            overflow hidden
                            text-overflow ellipsis;//文本溢出显示省略号
                            display  -webkit-box;
                            -webkit-line-clamp  1; //控制文字行数
                            .name1{
                                display flex
                            }
                            .name2{
                                color #757575; 
                                margin-left 5px
                            }
                        }
                        // .singer{
                        //     font-size 12px
                        //     height 20px
                        //     line-height 20px
                        //     color #757575; 
                        //     overflow hidden
                        //     text-overflow ellipsis;//文本溢出显示省略号
                        //     display  -webkit-box;
                        //     -webkit-line-clamp  1; //控制文字行数
                        // }
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
                            // -webkit-box-orient: vertical; //子元素数值排列
                            .singer{
                                display flex
                                line-height 18px
                                .singername{

                                }
                                .null{
                                    width 10px
                                    text-align center
                                    line-height 18px
                                }
                            }
                        }
                    }
                }
            }
        }
        .albumsLists{
            width 100vw
            .sort{

            }
            .lists {
                position relative
                margin-left 3%
                width 94
                .album{
                    display flex
                    position relative
                    width 100%
                    height 70px
                    .image{
                        
                        img{
                            height 50px
                            width 50px
                            margin-top 10px
                            border-radius 5px
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
                            overflow hidden
                            text-overflow ellipsis;//文本溢出显示省略号
                            display  -webkit-box;
                            -webkit-line-clamp  1; //控制文字行数
                            .name1{
                            }
                            .name2{
                                color #757575; 
                                margin-left 5px
                            }
                        }
                        .time_num{
                            display flex
                            font-size 12px
                            height 20px
                            line-height 20px
                            color #757575; 
                            overflow hidden
                            text-overflow ellipsis;//文本溢出显示省略号
                            display  -webkit-box;
                            -webkit-line-clamp  1; //控制文字行数
                            .time{

                            }
                            .num{

                            }
                        }
                    }
                }
            }
        }
        .mvs{
            width 100vw
            .text{
                margin-left 3%
                display flex
                margin-top 5px
                height 30px
                line-height 30px
                .text1{
                    font-weight 600
                    font-size 15px
                }
                .text2{
                    font-size 12px
                    color #757575
                }
            }
            .mvsList{
                position relative
                margin-left 3%
                width 94%
                .mvitem{
                    display flex
                    height 100px
                    .pic{
                        img{
                            margin 0
                            height 80px
                            width 125px
                            margin-top 10px
                        }
                    }
                    .info{
                        flex 1
                        margin-top 10px
                        height 80px
                        margin-left 10px
                        display flex
                        flex-direction column
                        justify-content center
                        text-align left
                        .name{
                            font-weight 16px
                            overflow hidden
                            text-overflow ellipsis;//文本溢出显示省略号
                            display  -webkit-box;
                            -webkit-line-clamp  2; //控制文字行数
                            -webkit-box-orient: vertical;
                        }
                        .time{
                            color #757575
                            font-size 12px
                            margin-top 12px
                        }
                    }
                }
            }
        }
    }
}
</style>