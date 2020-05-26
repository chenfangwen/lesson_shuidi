// let o1 = {a: 'hello'}
// let o2 = Object.create(o1); // koa 源码中， 哪个对象会使用这个呢？


// o2.b = 'world';


// console.log('o1:', o1.b); // 
// console.log('o2:', o2.a); //
// console.log(o2.__proto__ == o1)

const Koa = require('koa');
const app = new Koa();

app.use((ctx,next) => {
    ctx.body = 'hello, body';
})

app.listen(8000)