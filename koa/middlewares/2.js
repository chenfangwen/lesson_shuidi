const Koa = require('koa')
const app = new Koa()


const one = async (ctx,next) => {
    console.log('>> 1')
     next();
    console.log('<< 1')
}


const two = async (ctx,next) => {
    console.log('>> 2')
    // ctx.body = 'hello,world'
     next();
    console.log('<< 2')
}


const three = async (ctx,next) => {
    console.log('>> 3')
     next();
    console.log('<< 3')
}

app.use(one)
app.use(two)
app.use(three)

app.listen(3000)