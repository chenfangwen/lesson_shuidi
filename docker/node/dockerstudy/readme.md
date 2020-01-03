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
    