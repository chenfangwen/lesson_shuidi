- startwars 灵魂
 多种解法 重构 -> 不同的解法得分不一样
 1. 字符串拼接
 2. 数组的操作
 splice 看文档 start len  dir 返回子数组，同时原数组改变为删除子数组后的数组
 slice star end 不包括end  返回数组的子数组，不对原数组改变
 array 对他的修改
 3. 链式调用 chain
 返回值是数组

#CSS 动画
-前端就是代码的导演
1.用先进的开发流程和工具 加快开发
Vs code 内置了emmet
！+tab 
使用css选择器+tab 快速完成结构开发
div可以省略
选择器 CSS Selector
>父子选择器
+兄弟

前端是代码的导演
后端的制片人
transfrom:translate(-50%,-50%);变形属性
transform:scare(1.5);
transform:translateZ(-40em);
transform-style:preserve-3d;启动3D
animation: star 10s ease-out infinite;(animation-name,animation-duration,animationtimingFunction,animation-repeatCont)

界面的宏观视角

结构>组件(可以复用)   (cell) 
组件： 界面构成的基础,拼积木一样搭界面
结构的套路
.weui-cell 开启一个组件
    .weui-cell__hd
    .weui-cell__bd
    .weui-cell__ft
hd + bd + ft
"__"  BEM Block Element Modifier

- 研究微信官方前端框架weui源码
- BEM 挺好的，类名取名的依据
- .hd+.bd+.ft   少跟业务相关，多一些抽象
- 弹性布局 align-items: center; flex:1

- mongodb nosql 数据库
- docker 集装箱 一家公司的开发环境迅速上线的核武器
 
 终端命令
 1. docker --version
 2. docker pull daocloud.io/library/mongo:2.7.6  拉取镜像
 3. 查看镜像 docker images 
 4. docker run -p 27017:27017 --name mongo -d (imageid) 返回的是线程ID
            -p 端口        --name 运行容器的名字 


5. docker ps -a 查看正在运行的容器
6. docker exec -it mongo mongo  进入mongo操作
               -it 命令行的交互 第一个mongo镜像 二是交互的脚本，简版的Linux
7. show dbs
8. use tutorial;   
    db.users.insert({username:'chenfangwen'});
    show collections;  显示集合的文件
    db.users.find({});
    db.users.inser({username:'liuziyi'});
    db.users.count();
    db.users.find({username:'liuziyi'});

    db.users.find({
        _id:'ObjectId("...")
        });
    
    db.users.find({   //且条件
        $and:[
           { _id:'ObjectId("...")},
           {username:'liuziyi'}
        ]
        });
    db.users.find({   //或条件
        $or:[
           { _id:'ObjectId("...")},
           {username:'liuziyi'}
        ]
        });
    db.users.update(   //覆盖更新
        {"username":"liuziyi"}, //被替换
        {"country":"canada"}
    )
    db.users.find().pretty();
    db.users.update(   //追加更新
        {"country":"canada"},
        {
            $set:
                {username:"liuziyi"}
        }
    )
    db.users.update(   
        {"country":"canada"},
        {
            $unset:
                {country:1}
        }
    )
    for (i = 0; i < 2000; i++){
        db.numbers.save({num:i});
    }
    db.numders.find({num:500});
    db.numders.find({
        num:{
        "$gt":19995
        }});
    db.numders.find({
        num:{
        "$gt":1995
        }}).explain("executionStats");   查看运行状态
    db.numbers.creatrIndex({num:1});  升序索引
    db.numbers.getIndexes();
    exit 退出与mongo容器的交互
    
    docker exec -it mongo mongo
    db.users.update({username:'liuziyi'},
    {
        $set:
        {favorites:{cities:["chicago","cheyenne"],movies:["xiaoshengkedejiushi","",""]}}
    })
    db.users.find({"favorites.movies":""})

    - egg-init 
  初始化一个项目
  egg-init blog --type=simple  

  - npm init -y 项目的初始化
    java 一样来做后端 企业级开发框架
    npm init egg 

- app 
    node 应用程序 主要代码 
- config  配置文件夹
- test  测试目录

- egg 架构
    脚手架快速构建项目结构
    web http协议
    router.js 配置了路由
    ->constroller (ctx.request.body)
    ->model

- npm i sequelize-cli -D
    sql
    

    sequelize 命令集锦
    sequelize init 初始化mysq的工作目录
    - config.json
    sequelize db:create
    创建一个；表
    
- JS 主动获取数据 ajax 或最新的fetch 
  then 等到数据到达后 再执行相应操作
  到达的是流
  toJSON();
  fields  ...
  map  新的数组 html 
  join 数组变字符串 

- box-sizing: border-box; 
    设置padding不会撑大盒子设置好了的宽高


- 页面先写结构‘
类名语义化 .key>.sound 一个盒子
结构要从外到内，
良好的结构是页面的基础
- 写结构时不用考虑样式
- 样式
    - 块级元素block 占据一整行
      变成行内元素？
    - 弹性布局
      display:flex;
      所有子元素的块级能力被干掉
      min-height:100vh;
      justify-content:center;水平居中
      alifn-items:center;垂直居中
    - html 默认的字体大小是16px
      rem vh 都是相对单位
      rem 是相对于html的字体大小
      0.4rem=16px*0.4=6.398px
      在手机端px 不准确 适配所有手机
    - 盒子模型
      margin + border + padding + content

- 工作流
script 强化我们的开发
dev 启化我们的http服务
styl 编译为css
json-server 商家信息

dom api 是过去式 
MVVM 数据驱动 {{}}   js data:
历史 切图在 php/java + html/css 10年前 <%message%> 前端不需要了解后端数据
js 8年前 Web 2.0 fetch /ajax js 主动请求数据 前端分庭抗礼 dom/api
4年前 vue/react + node + flutter + go + docker MVVM 数据驱动  前端也处理数据  

小程序 和 VUE 都是一样的 
MVVM 优秀在于简单
- 天生集成数据驱动 data {{}} :属性 
- 页面数据是响应式的 界面随数据变化 
- inline-block 考点来了
    inline 没有设置宽高的能力 兄弟们相安无事
    block 兄弟间会换行
    两列是式布局 inline-block 副作用兄弟间会产生间隙

- stylus 向css提供了函数功能
    利用返回值的叫函数
    要复用css 代码 完成css模块化

- 图片 手机的屏幕像素不一样
  @media 条件(-webket-min-device-pixel-ration:3)
  图片的命名  ...@2x.png ...@3x.png

- npm: node package management (node包管理器)
npm install -g live-server
- live-server http服务 网站的本质
  http://localhosst:8080
  在lol目录下运行，lol目录就是一个网站
  自动刷新



- 单选按钮很丑，样式很丑，不用单选按钮，仿照一个
- css有兼容性问题，搞定所有用户 用的设备和浏览器是不一样的
  IE有些低版本的还在网吧， 拼多多里
- 在调试css或布局时，用背景色来调试

- 页面特效+动作特效是一个特牛的领域
  gasp.min.js 
  TweenMax.to(id,time:1执行时间,{
      delay:1,//推迟1秒
      ease:Back.easeOuts
  })

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

    - this 是有原则的
1. 普通函数被调用 this 指向window/global
2.方法作为对象执行时 this指向 对象
'use strict' 严格模式下为undefined
- call 手动指顶函数运行时的this 并将函数运行
bar.call(foo)
- bar.call
函数是对象 可以点
手写一个call

- talk in js
泡一杯咖啡？
编程时有规则的
结果？
类 对象 
new Coffee()
- js 中构建一个类 不用class 关键字(es5)
  function Coffee(){    //首字母大写的函数就是类

  }
  new 将我们的显示思维和代码规则结合 将情商发挥出来
- 把水煮沸   动作    （类）上下文之中  方法 
- 用沸水冲咖啡
- 把咖啡倒进杯子
- 加糖和牛奶

类 是抽象概念 不是用来运行的 对象是内存变量，new 出来的 调用方法 
构造函数 constructor
function Coffee(){    
    //构造函数
  }
  Coffee.prototype.addSugarAndMilk = function(){}

- 每次调用咖啡是时候，都要对类的步骤很清楚，加大了类的使用难度
- 面对对象
  类的设计者架构师 和类的使用者不一样

- 茶的类设计
  - 把水煮沸 boilWater
  - 用沸水浸泡茶叶  speedTeaBag
  - 把茶水倒进杯子  pourInCup
  - 加柠檬  addLemon

咖啡 茶 饮料 继承
祖先类，父类 ？

    共同点      不同点
    boilWater   
    用沸水      茶叶 咖啡
    方法        重写


- js的继承关系不具备血缘关系
    Coffee.prototype = new Beverage(); //原型关系

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

  - 泡泡堂游戏的主业务逻辑抽象
    面向对象的核心思想： 抽象(函数) 封装 继承 多态
    把实现细节抽像出来 创业
    CEO 做梦(来旅梦，去名企，需求，2020， 执行团队)
    抽象 招员工实现 （前端，后端，美工，函数） 封装
    
- 事件监听 执行逻辑
  浏览器 chrome 进程
  js 是chrome里的语言编译器来执行
  html + css ＤＯＭ树 数据结构
  js 执行脚本
  事件是异步的
  
  - 注册事件  micro event 回调函数
  - 事件发生 是怎么执行的
  js  单线程语言 onload
  轮播注册时间内的地方

订阅 发布者模式
房 楼盘-》发布者（有房卖的信息）
   买房者 订阅者
   建模
- listen 加订阅者
  saleOffice.clientList.push(fn);
- saleOffice 发布者
  trigger 有事件通知 触发器

  - 网页性能优化
登录 异步的方式加载 少加载一些login html代码
- 第一次用的时候加载一次
- style.display='none'
- 之前创建过 style.display='block'
- 模态框 Modal
- 状态
- 单例模式 让我们的面向对象系统里 单例类只实例化一次
保存对实例的引用 JS中用闭包来实现
- 优秀的代码是一般代码的 100价值
DOM的流程化 ->用产品杜绝（disabled+absolute 100%)
->选用单例设计模式

- js的数据类型
  number 数值型 1
  string 字符串 '1'
  bool 布尔值 true
  undefine 声名但还未定义
  null  空类型
        ---以上都是原子类型，简单数据类型
  object： 对象类型 复杂类型
    数组 a[]    可以被迭代的对象
    函数  可以被运行的对象
    JSON {} 对象字面量 可以被 key:value 的对象


- typeof null   返回'object' ?


- 变量名 name 值value
  let func; //内存中申请分配 地址
  undefine 类型未定义
  js 是弱类型语言 有别于java c++等静态类型语言
  js 的变量的类型是有由来决定的

  comment create table

id
name 用户名称
content 
moment 评论时间
postid 文章ID
avatar  用户头像

- mvc 
    routers  一个模块就是一个文件
    h

    - [1,1,2,2,3,3]
  [1,1,2,3] 平均分为两半，最大种类数是多少


- 种类数大于长度一半    .length/2
- 种类数小于长度一半    种类数

# leetcode 在线学习算法的最好平台
- 30 道算法题  
- leetcode 跟github一样记录算法学习过程
- 875 爱吃香蕉的可可
N 堆香蕉 每把香蕉有piles[i]只香蕉
- 选择了一个合适的数据结构 数组[，，，，]
- H小时回来
- 每小时吃多少只，吃完
每小时选择一堆香蕉，吃其中K根，一小时最多吃一把
求H小时内吃掉香蕉的最小速度
[3,6,,7,11] H = 8 
- 通过例子找到规律
Math.max(....[,,,,])/(...数组名)   返回数组最大元素值


- 二分查找法 执行效率较高
 传统查找 O(n)
 二分查找 O(log2N)

 - 数组的操作
1. push('')顶部添加成员 
   pop()顶部出栈，返回成员值
1. unshift('')底部添加成员
   shift()底部出栈，返回成员值

   FIFO
   CPU 的底层
   写代码，放音乐，聊天
   进程，正在执行的程序，   分时分片 
   CPU计算 同一时刻只有一个程序运行，运行时钟。
   
程序是怎么运行的？为什么程序会崩溃？
代码文本 保存在文件系统中fs 
index.c 编译器 ->index.o
文件 内存 I/O
CPU 分配空间 成为独立的进程 
365？ 
 运行先后，排队
 空间不够
 进程的三个状态：
 运行 就绪 阻塞
 代码（程序）是顺序执行
 CPU 分时分片，切换操作
 tomcat 独立的进程
 进程切换消耗很大
 线程 可以独立执行
 web 
 tomcat 多线程
 分布式

 - 冯诺依曼原理
 代码 文件 -> compile编译 -> 可执行文件 文件系统
 - cpu分时分片
    执行可执行文件
    进程 由操作系统负责调度 
    并行 多个进程在由CPU切换
 - 进程切换消耗大 
    线程 
    *.java *.javac
    创建线程 启动多线程
 - tomcat 
    为每个访问者创建线程
    每个线程有独立的资源，内存
    占据越来越多的内存空间 不释放 处于阻塞状态：
        - 分配线程数量到达上限 
        - 线程为了就绪，分配的内存，达到服务器的物理上限时，也会阻塞
 - 分布式的概念
    动态扩容 nginx
    加服务器  负载均衡 

- const 一定要给值，确定类型
- 函数表达式
- live-server stylus nodemon
  npm 包 node package management
  yarn 更加优秀 npm的替代品 由facebook维护


- 算法执行时间复杂度 for循环
  空间复杂度 notZeroArr = []  zeroArr = [] 
  2n 2可以忽略  API 花费资源较多


  index 指针

  - WEB 跟桌面 
localhost:1234  n 上限
并发请求、
分配给每个用户一个线程 fs  读取一个文件 index.html
I/O 300个左右并发请求 物理
ngnix (负载均衡) 那些机器空闲 把用户送到这台机器的IP地址
 如何充分发挥每台机器的性能  多核
 1234-> node进程 (一个进程) -》 一个CPU 
 把CPU都用上

 - 前端领域 最佳DOM实践
最佳的时机　DomContentload事件
数据驱动界面
es6 字符串模板符号 `li`
一句代码搞定 有点Python风
ul.innerHTML = friends->htmlArr->join('')
- 后端领域
提供数据 mysql docker mongodb 云数据库
Mysql database name='test' table='students'
node 查数据
提供 Web服务器 访问
- 查看ip ipconfig
ip就像一个门牌号，找到你
mac地址就像身份证
- 数据通信是要发送数据包
mysql 在局域网中
192.168.31.128  3306 


- app.get('/',function(req,res){

})  // get是请求首页，请求完就结束,

    req+res =  一次用户请求的响应
    express http server
    websocket

- url 显示餐馆的详情 
    /restaurant/:restaurant_id           //let restaurant_id = req.params.restaurant_id; 
    http://www.meituan.com/path/restaurant/params?a=1&b=2
    查询字符串
    - http 协议
    - domain
    - path /restaurant/:id        :id-参数
        let id = req.params.id


        新加餐馆的URL
        form 
        /restaurant
        post        将表单保存        
        get 参观列表 /reataurant?page=1

- NOSQL
  MYSQL 关系型数据库

  NOSQL不需要写SQL语句
  JSON object {} ,save()
  
  适合碎片化的，结构不是很良好的数据存储

  Mongodb 云开发数据库就是线上版的
  db.表名.find({}) 查询表

- MYSQL          MONGODB
  关系型数据库    NOSQL 文档型
   show database  use dbs
           use db
   tables         collections
   sql           js 语法的面向对象api

   - 数据库 后端开发框架
   express node,后端就是app
   app.get('/',(resq,res) => res.send('hello word!'))
    app.listen(3000,()=>{
        console.log('Example app listening on port 3000!');
    })

浏览器 上网代理

- 发出http请求 request_promise
  request + promise 等得到请求完后
  分析得到的html
  抠字出来



  通过爬虫分析豆瓣结构美，


- http 协议是web的基础
发送完，立马断开的
websocket协议   长连接，可以实时通讯


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

  - Mysql 关系型
mongodb nosql
redis 内存 KV
解决数据库的压力
MYSQL /post I/O 
redis key:value 保存在redis


key-value
get set 内存中

- 设计API有限次使用

- 组件化思维
    一方面一个页面由好多组件组成、
    页面开发可以划分任务
    催生的式大量的团队开发
    每个组件要解耦，不影响别人的组件
    soped  
    #app[data-v-12121]


three.js canvas -geometry 
快递网络
cdn -> Content Delivery Network 内容分发网络
 输入一个src 请求响应
 url 解析成ip地址
 京东 苹果11 
 www.jd.com/js/a.js   localhost 发布申请域名
 www.jd.com 主站点 后端业务 任务很重 css js image
 所以把静态资源独立出来 通过cdn 网络分发
 cdn.bootcss.com 给你一个IP地址

透视投影照相机
 THREE.PerspectiveCamera(fov, aspect, near, far) 
　　　- fov 可视角度 
　　　- aspect 实际窗口的纵横比 
　　　- near 近处的裁面的距离
　　　- far 远处的裁面的距离 

- canvas + camera + scene > group > mesh>geometry+meterial

    renderer 渲染
- webgl 3d编程 以相机视角构建的真实世界


- js的数据类型
  number 数值型 1
  string 字符串 '1'
  bool 布尔值 true
  undefine 声名但还未定义
  null  空类型
        ---以上都是原子类型，简单数据类型
  object： 对象类型 复杂类型
    数组 a[]    可以被迭代的对象
    函数  可以被运行的对象
    JSON {} 对象字面量 可以被 key:value 的对象


- typeof null   返回'object' ?


- 变量名 name 值value
  let func; //内存中申请分配 地址
  undefine 类型未定义
  js 是弱类型语言 有别于java c++等静态类型语言
  js 的变量的类型是有由来决定的

  - 云时代的开发方式
  未来的服务器 在云端 docker,不用买或租硬件。
  计算能力 云服务商提供给我们,不需要知道服务器在哪里，数据库在哪里，文件存储怎么做
  云开发能力像水和电一样，一插就有
  更专注于业务
- 用了有赞,
  index.json 中申明一下 

