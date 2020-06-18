- transform本身是没有过渡效果的,它只是对元素做大小,旋转,倾斜等各种变换,通过和transition或者animation相结合,可以让这一变换过程具有动画的效果,它通常只有一个到达态,中间态的过渡可以通过和transition或者animation相结合实现,也可以通过js设置定时器来实现.

- transition一般是定义单个或多个css属性发生变化时的过渡动画,比如width,opacity等.当定义的css属性发生变化的时候才会执行过渡动画,animation动画一旦定义,就会在页面加载完成后自动执行.

- transition定义的动画触发一次执行一次,想要再次执行想要再次触发.animation定义的动画可以指定播放次数或者无限循环播放.
transition: 需要用户操作,执行次数固定.

- transition定义的动画只有两个状态,开始态和结束态,animation可以定义多个动画中间态,且可以控制多个复杂动画的有序执行.