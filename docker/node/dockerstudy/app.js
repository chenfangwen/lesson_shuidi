const Koa = require('koa');
const fs = require('fs');

const app = new Koa();
const index = require('./routes/index');
const onerror = require('koa-onerror');
//中间件式
const views = require('koa-views');    //分层
const logger = require('koa-logger');
onerror(app);
app.use(ctx=>{
    ctx.body = fs.createReadStream('cfw');
})
app.use(views(__dirname+'/views',{
    extension:'pug'
}));
app.use(logger());
app.use(index.routes(),index.allowedMethods());
// 模块化 COMMONJS
module.exports = app;