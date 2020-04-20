<template>
    <div class="mvDetial">
        <div class="header">
            <img @click="back" src="../assets/back.png" alt="">
            <div class="name">{{mvInfo.name}}</div>
        </div>
        <div class="mv">
            <div class="ifPlay">
                <img src="../assets/stop.png" alt="">
                <img src="" alt="">
            </div>
            <video :src="mvUrl" ref="video" autoplay></video>
            <div class="progressBar">
                <progress-bar :percent="percent" />
            </div>
        </div>
    </div>
</template>

<script>
import mv from '../api/mv.js'
import ProgressBar from '../components/progressBar'
export default {
    name:'MvDetial',
    components:{
        ProgressBar
    },
    data() {
        return {
            mvInfo:'',
            mvUrl:'',
            percent:0,
            duration:0,
            currentTime:0,
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
    },
    watch:{
        currentTime (val) {
            this.percent = val / this.duration
            if(val == this.duration){
                this.percent = 0
                this.currentTime = 0
                if(this.curList && this.playType == 1){
                if(this.curIndex<this.curList.length-1){   //顺序列表
                    this.getCur_music(this.curList[this.curIndex+1])
                    this.getCurIndex(this.curIndex+1)
                } else {
                    this.getCur_music(this.curList[0])
                    this.getCurIndex(0)
                }
                } else if(this.curList && this.playType == 2) { //随机
                let length =  this.curList.length
                let index =  parseInt(length*Math.random())
                this.getCur_music(this.curList[index])
                this.getCurIndex(index)
                } else {
                // this.getIfPlaying(false)  单曲循环
                this.getCur_music(this.cur_music)
                this.$refs.audio.play()
                }
            }
        }
    },
    mounted(){
        let id = this.$route.params.id
        // console.log(id)
        mv.geMvDetial(id).then(res => {
            if(res.data.data){
                console.log(res.data)
                this.mvInfo = res.data.data
                this.duration = res.data.data.duration
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
        height 300px
        .ifPlay{
            position absolute
            margin-left 50vw
            line-height 250px
            transform translateX(-50%) 
        }
        video{
            width 100vw
        }
        .progressBar{
            margin-top -20px
            width 100vw
        }
    }
}
</style>