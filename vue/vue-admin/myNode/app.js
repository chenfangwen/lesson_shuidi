const express = require('express');
const app = express();
const Home = require('./route/home.js')

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get('/', (req, res) => {
    //服务器地址vueDream/dist/index.html
    console.log(__dirname);
    res.send({a:'123',b:'534534'})
})

app.use('/home', Home)

app.listen(3000,() => {
    console.log('listen 3000...')
})