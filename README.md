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