# 从输入URL到页面展示， 这中间发生了什么？ 越细越好
1. 多进程架构
2. IPC（Inter-Process Communication，进程间通信）

1. 注重细节， 
2. 从想当然到理所应当 v8 引擎及浏览器架构
3. 全面考察前端是否具有完整计算机本科学习能力的代表提， 
   web开发  网络   操作系统 
4. 如何规范的回答这道题， 分水岭
  有条理， 进程 是主脉络 

动手实操
1. 浏览器 proxy 通过浏览器来代理我们访问网页
  可以当搜索框来用  默认的搜索引擎
  url 
  juejin.im  补全为 https://juejin.im/   用户体验做的很好 补全协议
2. 浏览器中 操作系统里的进程
  细节， 像代码架构分层， 流程细化
  web 访问 浏览器chrome  多进程的架构模式, 最流畅， 用更多的内存 比IE优秀
  打开一个页面 至少有4个进程  
  <!-- 主进程 管家 chrome 浏览器， 
  子进程
  GPU 进程 渲染进程   GPU 加速   3d 渲染  canvas three.js  css transform 3d 
  NetWork Service -->
  chrome 多进程架构带来现代浏览器的快速访问体验， chrome 就是代表
  - 浏览器主进程  并发
  启动浏览器  提供的交互(输入url) 子进程管理(进程间通信 IPC)
  文件存储功能 文件缓存 cookie  localstorage...   BOM Browser Object Model
  - 网络进程 提供下载功能
  - 渲染进程 html, css, js  图片 可交互的页面


 执行过程
  访问过程 问题回答清楚 执行流程 进程间的流程
  1. 浏览器进程就收到用户输入的URL 请求时  在主进程, IPC 将url 交给
   网络进程
  2. 网络进程中发起真正的URL请求 url 请求是由 c++模块 node -> c++
    2.1 request  

    2.2 response 
  3. 网络进程响应头数据，(头 +   body) 通知 渲染进程开始准备干活
    text/html  test/json image/jpg 提前通知渲染？ 
    浏览器进程 提交导航消息（CommitNavigation）消息到渲染进程
  4. 渲染进程收到提交导航信息后， 开始准备接受html 直接和网络进程
  建立数据通道
  5. 渲染进程会向浏览器进程发送“确认提交”，准备好接受和解析页面数据
  6.  if/else 移除之前的页面 body 到了  渲染进程渲染。页面的重绘
  和重排 提交 确定文档消息




  标签页
2. 发出请求？ 






根正苗红
1. 简历  BATJTMD 
2. 

1. leetcode 题 
2. 怎么复习? 学习效率， 看 要看， 没太大用 
  看掘金面试相关技能点文章的列表 
  问自己问题， 回答， 搜， 学习
  学不出来 思考
3. 写文章的方式来学习


1. 浏览器 proxy 通过浏览器代理我们访问网页
    可以当搜索框来用， 默认的搜索引擎
    ## url
        输入juejin.im 补全为 https://juejin.im/timeline 用户体验会做的很好 补全协议
        浏览器中，操作系统里的进程
        chrome 多进程的架构模式，高并发 最流畅 用更多的内存 比IE优秀 
        打开一个页面，至少4个进程 :     
            1.主进程chroem 
            启动浏览器 提供了url输入的交互 子进程管理(进程之间的通信 IPC) 并发
            文件存储功能 静态文件缓存 cookie localstorage
            2.GPU进程 渲染进程 GPU加速: dmo树渲染 3D渲染 three.js  css(transform 3d)
            html css js 图片 可交互的页面
            3.network service 网络进程 
            提供下载功能
            4.标签页 

    ## dns域名解析 