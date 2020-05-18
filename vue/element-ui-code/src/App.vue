<template>
  <div class="video-box">
    <div class="video_playIcon" v-if="!initVideo.play" @click="playVideo"></div>
   	<!-- //video API相关获取与调用 -->
    <audio class="video" ref="video" :src="initVideo.url" @pause="handPlay(2,2)" @play="handPlay(2,1)"
           @loadedmetadata="getAudioLength(2)" @timeupdate="videoTimeUpdate" @click="playVideo">
        <!-- 该浏览器不支持video -->
    </audio>
    <div class="video_control">
        <div class="progress">
        	<!-- //进度条 -->
            <el-slider class="commonSlider" :show-tooltip="false" v-model="initVideo.currentTime"
                       :max="initVideo.videoLength" @change="changeVideoTime">
            </el-slider>
            <div class="time">
           		<!-- //videoLength 总时间，currentTime 当前时间，videoTime 自定义过滤器 -->
                <span>{{initVideo.currentTime | videoTime}}</span>
                <span>{{initVideo.videoLength | videoTime}}</span>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
        return {
            //视频
            initVideo: {
                play: false,//播放还是暂停 true播放中
                videoLength: 0,//时长
                url: "",//视频课件Url
                currentTime: 0,//当前播放时间
                lastTime: null,//标记时间戳
                name: "",
            },
            //音频
            initAudio: {
                play: false,//播放还是暂停 true播放中
                audioLength: 0,//audio时长
                url: "http://music.163.com/song/media/outer/url?id=347231.mp3",//音频课件url
                currentTime: 0,//当前播放时间
                lastTime: null,//标记时间戳
                name: "",
            },
        }
    },
    methods:{
		playVideo() {//播放视频
            if (this.initVideo.play) {
                this.$refs.video.pause();
            } else {
                Math.abs(this.initVideo.currentTime - this.$refs.video.currentTime) > 2 ? this.$refs.video.currentTime = this.initVideo.currentTime : '';
                this.$refs.video.play();
                this.$refs.video.muted = false
            }
        },
        videoTimeUpdate() {//更新视频时间。节流，每秒触发一次
            let nowTime = Date.now()
            let gapTime = 1000;
            if (!this.initVideo.lastTime || nowTime - this.initVideo.lastTime > gapTime) {
                if (this.$refs.video) {
                    let time = this.$refs.video.currentTime;
                    this.initVideo.currentTime = time;
                }
                this.initVideo.lastTime = nowTime
            }
        },
        changeVideoTime(val) {//改变视频时间
            console.log(val, 'video')
            if (this.$refs.video) {
                this.$refs.video.currentTime = val;
            }
        },
        getAudioLength(type) {//获取音视频时长 1音频 2视频
            if (type == 1) {
                this.initAudio.audioLength = this.$refs.audio.duration
                console.log('获取音频时长', this.$refs.audio.duration)
            }
            if (type == 2) {
                this.initVideo.videoLength = this.$refs.video.duration
                console.log('获取视频时长', this.$refs.video.duration)
            }
        },
        handPlay(type, status) {//音视频播放暂停 type:1 音频 2视频 status 1播放 2暂停
            if (type == 1) {
                status == 1 ? this.initAudio.play = true : this.initAudio.play = false;
            } else {
                status == 1 ? this.initVideo.play = true : this.initVideo.play = false;
            }
        }
    }
}
</script>