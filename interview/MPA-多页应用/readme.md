## MPA multiple-page-application
多个html 整个应用有多个入口

ERP
后台管理系统

每个html 天然解耦 每个入口书写可以用不同的框架

## SPA
一个html
都在html app 里
都由js 渲染
路由变化 ，页面部分组件刷新



## SSR 

一请求服务端就第一时间返回有意义的内容
一开始就能拿到用户可交互的页面内容

缺点： 切换页面，造成整个页面重新刷新


## 同构 （vue react赋予了SSR新的意义）
SPA + SSR
第一次访问(首页)： SSR 服务端构造 html 返回
之后用户的交互： 通过 SPA *-Router 来进行页面导航

react SSR
懂车帝 美团

vue SSR
掘金