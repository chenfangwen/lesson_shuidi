<template>
    <div class="" id="singer">
        <div class="header">
            <img @click="back" src="../assets/back.png" alt="">
        </div>
        <div class="bgimg">
            <img :src="singerInfo.picUrl" alt="">
        </div>
        <div class="content">

        </div>
    </div>
</template>

<script>
import singer from '../api/singer.js'
export default {
    data() {
        return {
            singerInfo:{},
            hotSongs:[]
        }
    },
    watch:{
        '$route':function(to,from){
            // document.body.scrollTop = 0
            this.search()
        }
    },
    methods:{
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
    z-index 2
    background-color #fff
    .header{
        position absolute
        top 0
        width 100%
        height 30px
        text-align left
        z-index 2
        img{
            height 30px
            width 30px
            margin-left 10px
            margin-top 10px
        }
    }
    .bgimg{
        position absolute
        top 0
        height 43%
        width 100%
        background-size cover
        img{
            position relative
            display inline-block
            max-width 100%
            height auto
        }
    }
    .content{
        position absolute
        top 43%
        border-radius 15px 15px 0 0
        background-color #fff
        width 100%
        z-index 100
        height 500px
    }
}
</style>