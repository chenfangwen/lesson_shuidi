- 数据可视化
  实现js动画最好的是requestAnimationFrame
    function animation() {
        requestAnimationFrame(function(){
            box.style.left = ++dis +'px';
            if(dis<500)
            animation(); //递归
        })
    }

- canvas 是画布
绘制的一个API   画布大小  

    // canvas.style.width = 50 + 'vw';       
    // canvas.width = '50';    不接受单位 ，只接受数值，默认单位为px

    var ctx = canvas.getContext('2d');  画笔
    ctx.fillStyle = 'red'; 画笔颜色
    ctx.fillText(1/2/3/...,160,75);  画内容 1/2/3/...
    ctx.clearRect(0,0,300,150);



    C:\Users\陈方闻\AppData\Local\Yarn\Data\global\node_modules\.bin