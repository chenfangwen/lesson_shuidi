- 游戏框架 引擎 可以帮助我们快速开发游戏
- 精灵 Sprite



- es6 语法点
  es5 js 定义变量 var
  es6 let 定义变量  
      const 定义常量
      如果是简单数据类型，
      const值不能改变。
      如果是复杂数据类型，{}[],值可以改变，不能整体重新赋值


      let 定义的变量有块级作用域 {let a=1;} 
      - 变量类型由值决定， let a=1;
      - 变量一定有作用域，全局，块级作用域，局部作用域 function fuc(){let a=1;}
     
- 2D游戏开发，网易大厂h5s
  网页2D游戏 canva
  - Game 对象，总管
  new Phaser.Game(参数)  
  Phaser {}     回调的方式设置 :
  - preload 预加载资源 
  - creat 创建场景
  - update 更新 每秒60帧