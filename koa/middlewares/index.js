// 中间件是什么？ middlewares koa express 
// 服务是通过 middlewares 来提供的
// 洋葱图
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser'); // 中间件服务 函数
const logger = async(ctx,next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    await next()
}
app.use(logger)
// 返回hello 给用户
// 向用户响应hello , web 服务 
// const sayHelloCN = async (ctx) => {
//   ctx.body = '你好世界';
// }

// const sayHello = async (ctx) => {
//   ctx.body = 'hello, world';
// }
// // Vue.use()
// app.use(sayHelloCN)
// app.use(sayHello) // 启用一个中间件服务
// req, ctx.req  下面的中间件函数就会提供服务

// 发送表单的处理 /  req   middlewares(bodyParser ) 收集用户post
// 过来的数据 on('data') on('end')
// session 
// 数据库
// ......
app.use(bodyParser());  // 内部的代码 await    next

// 响应
app.use(async (ctx) => {
  // context 上下文 跳转， 报错， 
  // 得到表单传过来的数据
  // res  向发出请求的用户返回他在请求时form 里的数据
  // 没有拿到 ? 
  // 表单数据到达， 异步的 on('data')
  // on('end')
  //   bodyParser 
  ctx.body = ctx.request.body  // ctx.request req
})



app.listen(3000);