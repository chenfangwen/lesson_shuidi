<template>
  <div class="masonry">
    <!-- <img ref="moveHeader" src="https://search-operate.cdn.bcebos.com/a75047ff4e2c9336fd6c32f26bd419c9.jpg" alt=""> -->
    <div class="img-wrap">
      <img id="bg1" :src="img.bg1" alt="">
      <img id="time" :src="img.time" alt="">
      <img id="bg2" :src="img.bg2" alt="">
    </div>
    <div id="box">
      <div id="face"></div>
      <div id="eyeLeft"></div>
      <div id="eyeRight"></div>
      <div id="glass"></div>
      <div id="log"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      img: {
        time: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57193979ce7a465abd8a770ac6901dd0~tplv-k3u1fbpfcp-zoom-1.awebp',
        bg1: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c80096ea62994846b394032694b4d2e1~tplv-k3u1fbpfcp-zoom-1.awebp',
        bg2: 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b120da49dce474eb2997cf9c748960b~tplv-k3u1fbpfcp-zoom-1.awebp'
      },
      canChange: true
      // gamma: 0,
      // beta: 0,
      // canMove: true
    };
  },
  computed: {
  },
  mounted() {
    const width = window.innerWidth; 
    const moveWidth = width * 0.1;
    this.scale = moveWidth / 30;
    this.init();
  },
  methods: {
    init() {
        const eyeLeftPosition = {
          start: [70, 78],
          end: [100, 110]
        };

        const eyeRightPosition = {
          start: [150, 78],
          end: [190, 110]
        };

        this.eyeLeftCenterPosition = {
          x: (eyeLeftPosition.end[0] - eyeLeftPosition.start[0]) / 2 + eyeLeftPosition.start[0],
          y: (eyeLeftPosition.end[1] - eyeLeftPosition.start[1]) / 2 + eyeLeftPosition.start[1]
        };

        this.eyeRightCenterPosition = {
          x: (eyeRightPosition.end[0] - eyeRightPosition.start[0]) / 2 + eyeRightPosition.start[0],
          y: (eyeRightPosition.end[1] - eyeRightPosition.start[1]) / 2 + eyeRightPosition.start[1]
        };
        if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
            // IOS13以上
            
            DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', this.updateGravity, false);
                }
                else {
                    this.permission();
                }
            })
            .catch(() => {
                this.permission();
            });
        } else {
            // IOS 13以下 或者 安卓
            let timer = setTimeout(function(){ alert('未开启动作与方向权限')}, 1000);

            window.addEventListener('deviceorientation', () => { clearTimeout(timer);}, {once: true});

            window.addEventListener('deviceorientation', this.updateGravity, false);
        }
    },
    permission() {
        window.addEventListener('touchend', ()=>{
            DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') { 
                    window.addEventListener('deviceorientation', this.updateGravity);
                }
            })
        },{once: true})
    },
    updateGravity(event){
        // if (Math.abs(this.gamma - event.gamma) > 30 && !this.canMove) {
        //   this.canMove = true;
        //   return;
        // }
        const {beta, gamma, alpha} = event;
        // if (gamma === 0) {
        //   this.canChange = true;
        // }
        // if ((this.gamma > 0 && gamma < 0 && !this.canChange) || (this.gamma < 0 && gamma > 0 && !this.canChange)) {
        //   return;
        // }
        // if (Math.abs(gamma) >= 89 || Math.abs(gamma) <= -89) {
        //     // alert(1)
        //     this.canChange = false;
        // }
        // if (gamma === 0) {
        //   this.canChange = true;
        // }
        // this.canMove = false;
        // this.gamma = event.gamma;
        // this.beta = event.beta;
        const r = 20;

        const eyeLeft = document.querySelector('#eyeLeft');
        const eyeRight = document.querySelector('#eyeRight');
        eyeLeft.style.left = this.eyeLeftCenterPosition.x - gamma / 90 * r + 'px';
        eyeRight.style.left = this.eyeRightCenterPosition.x - gamma / 90 * r + 'px';
        eyeLeft.style.top = eyeRight.style.top 
                          = this.eyeLeftCenterPosition.y + beta / 120 * r + 'px';

        eyeRight.style.transform = eyeLeft.style.transform 
                            = eyeRight.style.WebkitTransform 
                            = eyeLeft.style.WebkitTransform 
                            = 'rotate(' + -alpha * 3 + 'deg)';
        if (Math.abs(gamma) > 30) {
          return;
        }
        // const dom = this.$refs.moveHeader;
        // dom.style.transform = `translateX(${gamma}px)`;
        const bg1 = document.querySelector('#bg1');
        const bg2 = document.querySelector('#bg2');
        const time = document.querySelector('#time');
        // bg1.style.transform = `translateX(${gamma * this.scale}px)`;
        // bg2.style.transform = `translateX(${-gamma * this.scale * 0.3}px)`;
        // time.style.transform = `translateX(${gamma * this.scale * 0.3}px)`;

        bg1.style.transform = `translate(${gamma * this.scale}px, ${-beta / 12}px)`;
        bg2.style.transform = `translate(${-gamma * this.scale * 0.3}px, ${beta / 12}px)`;
        time.style.transform = `translate(${gamma * this.scale * 0.3}px, ${-beta / 12}px)`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.masonry {
  display flex
  flex-direction: column
  justify-content center
  align-items: center
  .img-wrap {
    width 100%;
    height 60vw;
    overflow: hidden
    display flex
    position: relative;
    img {
      width 120%
      position: absolute
      left -10%
      top -15px
      // transform: translateX(-50%)
    }

  }

  #box{
    position: relative;
    margin-top 50px
    width: 300px;
  }

  #face{
    background-image: url(../assets/images/face.png);
    background-size: cover;
    width: 300px;
    height: 300px;
    position: absolute;
  }

  #eyeLeft{
    background-image: url(../assets/images/eye.png);
    background-size: cover;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 90px;
    left: 100px;
  }

  #eyeRight{
    background-image: url(../assets/images/eye.png);
    background-size: cover;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 90px;
    left: 190px;
  }

  #glass{
    background-image: url(../assets/images/glass.png);
    background-size: cover;
    width: 300px;
    height: 300px;
    position: absolute;
  }
}
</style>