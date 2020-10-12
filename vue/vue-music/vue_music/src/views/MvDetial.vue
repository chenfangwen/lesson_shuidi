<template>
    <div class="mvDetial">
        <div class="header">
            <img @click="back" src="../assets/back.png" alt="">
            <div class="name">{{mvInfo.name}}</div>
        </div>
        <div class="mv" @click.stop="showControl">
            <div class="time">
                <span>{{format(currentTime)}}/</span>
                <span>{{format(duration)}}</span>
            </div>
            <div v-if="ifShow" class="ifPlay" @click.stop="stopOrPlay" >
                <!-- <img v-if="ifPlay"  src="../assets/stop.png" alt=""> -->
                <img  src="../assets/play.png" alt="">
            </div>
            <video  :src="mvUrl" ref="video" autoplay @timeupdate="updateTime"></video>
            <div class="progressBar">
                <progress-bar ref="progressBar" :percent="percent" @percentChangeEnd="percentChangeEnd" @percentChange="percentChange" />
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
            ifShow:false,
            ifPlay:true
        }
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        updateTime (e) {
            // if (this.move) {
            //   return
            // }
            // console.log(e.target.currentTime)
            this.currentTime = e.target.currentTime
        },
        format (interval) {
            interval = interval | 0
            let minute = interval / 60 | 0
            let second = interval % 60
            if (second < 10) {
                second = '0' + second
            }
            return minute + ':' + second
        },
        percentChangeEnd(percent){
            console.log(this.$refs.video.currentTime)
            this.$refs.video.play()
            this.ifShow = false
            const currentTime = this.duration* percent
            this.currentTime = currentTime
            this.$refs.video.currentTime = currentTime
            this.$refs.progressBar.changeBtn(false)
        },
        percentChange (percent) {
            const currentTime = this.duration * percent
            this.currentTime = currentTime
        },
        showControl(){
            console.log('changed1')
            this.ifShow = !this.ifShow
            this.ifShow ?  this.$refs.video.pause():this.$refs.video.play() 
            this.$refs.progressBar.changeBtn(this.ifShow)
        }
    },
    watch:{
        currentTime (val) {
            // console.log(val)
            this.percent = val / this.duration
            // if(val == this.duration){
            //     this.percent = 0
            //     this.currentTime = 0
            // }
        }
    },
    mounted(){
        let id = this.$route.params.id
        // console.log(id)
        mv.geMvDetial(id).then(res => {
            if(res.data.data){
                console.log(res.data)
                this.mvInfo = res.data.data
                this.duration = res.data.data.duration/1000
            }
        })
        mv.getMvUrl(id).then(res => {
            if(res.data.data){
                this.mvUrl = res.data.data.url;
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
    z-index 200
    background-color #fff
    .header{
        position absolute
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
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
    .mv{
        margin-top 50px
        width 100%
        position fixed
        .time{
            position absolute
            margin-left 10px
            height: 0;
            padding: 48% 0;
            span:nth-child(1){
                color #fff
            }
            span:nth-child(2){
                color #c7c7c7 
            }
        }
        .ifPlay{
            position absolute
            margin-left 50vw
            transform translateX(-50%) 
            /* padding 百分比 相对于自己的 宽度来计算的 */
            height: 0;
            padding: 22% 0;
            img{
                z-index 100
            }
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