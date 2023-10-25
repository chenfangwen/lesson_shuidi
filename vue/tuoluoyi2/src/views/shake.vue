<template>
  <div class="masonry" :class="isShake ? 'shake' : ''">
    {{text}}
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      text: '摇一摇',
      timeId: '',
      isShake: false
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
  destroyed() {
    window.removeEventListener('devicemotion', this.updateGravity);
  },
  methods: {
    init() {
        if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === 'function') {
            // IOS13以上
            
            DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    window.addEventListener('devicemotion', this.updateGravity, false);
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

            window.addEventListener('devicemotion', () => { clearTimeout(timer);}, {once: true});

            window.addEventListener('devicemotion', this.updateGravity, false);
        }
    },
    permission() {
        window.addEventListener('touchend', ()=>{
            DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') { 
                    window.addEventListener('devicemotion', this.updateGravity);
                }
            })
        },{once: true})
    },
    updateGravity(event){
      //处理event.acceleration
      //x y z 方向移动加速度值
      //event.accelerationIncludingGravity
      //考虑重力加速度后设备在x y z 的值
      //event.rotationRate
      //alpha beta gamma 设备绕x y z 旋转的角度
      //摇一摇示例
      var speed = 30;
      // var x = y =z = lastX = lastY = lastZ = 0;
      const lastX = 0;
      const lastY = 0;
      const lastZ = 0;
      // function deviceMotionHandler(event){
          var acceleration = event.accelerationIncludingGravity;
          let x = acceleration.x;
          let y = acceleration.y;
          let z = acceleration.z;
          if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed ||Math.abs(z-lastZ) > speed ){
              //触发摇一摇
              // if(confirm("摇到我了，返回首页吗")){
              //   this.$router.push({
              //       path:`/`
              //   });
              // }
              // else{
              //   return;
              // }
              clearTimeout(this.timeId);
              this.isShake = true;
              this.text = '有点晕了'
              this.timeId = setTimeout(() => {
                this.isShake = false;
                this.text = '摇一摇'
                clearTimeout(this.timeId);
              }, 2000);
          }
      // }
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

  font-size: 24px
  .shake {
    color: red;
    font-weight: 600;
    animation: shake .5s infinite linear;
  }
}

@keyframes shake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(+2px, 0, 0); }
    30%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(+4px, 0, 0); }
    50% { transform: translate3d(-4px, 0, 0); }
}
</style>