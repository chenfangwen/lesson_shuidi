- koa 是最流行的轻量级框架
  egg.js 基于koa 的二次开发
- koa new -> app -> listen
  /bin/www
  www 文件就是网站项目的启动文件
  http.createServer(app.callBack());
  - 模板
    views
    koa-views
    app.use()  请用views中间件
    模板在哪里 使用了哪种引擎 pug
  - 路由
    koa-router   routes/index.js
    .get post
    index.routes()
    app.use()
  - logger
    koa-logger  use
  - 出错模块
  - https://www.zhipin.com/job
    https://img.bosszhipin.com     静态资源
    dns 解析 网络供应商 列表 、
    公司会在网络供应商机房里装一些cdn机器 本地没有，就会去中央服务器里请求一次 缓存到本地
    post head url
    body.length + body


    ## node发布
      docker  容器化

      node 项目 写完后 测试工程师 (环境？)
      让项目在不同机器里，享用相同的环境 跑起来 
      只要装一个docker
      
      
