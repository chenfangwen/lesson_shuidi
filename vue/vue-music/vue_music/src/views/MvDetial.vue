<template>
    <div class="mvDetial">
        <div class="header">
            <img @click="back" src="../assets/back.png" alt="">
            <div class="name">{{mvInfo.name}}</div>
        </div>
        <div class="mv">
            <video :src="mvUrl" controls autoplay></video>
        </div>
    </div>
</template>

<script>
import mv from '../api/mv.js'
export default {
    name:'MvDetial',
    data() {
        return {
            mvInfo:'',
            mvUrl:''
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
    },
    mounted(){
        let id = this.$route.params.id
        // console.log(id)
        mv.geMvDetial(id).then(res => {
            if(res.data.data){
                console.log(res.data)
                this.mvInfo = res.data.data
                this.mvUrl = res.data.data.brs[1080]
            }
        })
    }
}
</script>

<style lang="stylus" scoped>
.mvDetial{
    position absolute
    width 100%
    height 100%
    z-index 100
    background-color #fff
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
    .mv{
        margin-top 50px
        width 100%
        video{
            width 100vw
        }
    }
}
</style>