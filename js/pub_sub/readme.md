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