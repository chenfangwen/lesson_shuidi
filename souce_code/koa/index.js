const Koa = require('./lib/application');

let app = new Koa();

app.use((ctx,next) => {
    console.log(ctx.req.url)
    console.log(ctx.request.req.url)
    console.log(ctx.response.req.url)
    console.log(ctx.request.url)
    console.log(ctx.request.path)
    console.log(ctx.url)
    console.log(ctx.path)
    ctx.body = 'hello, body';
})

app.listen(3000)
