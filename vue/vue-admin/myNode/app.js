const express = require('express');
const app = express();
const Home = require('./route/home.js')

//获取POST数据:需要body-parser中间件
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //设置哪个源可以访问我
    res.header('Access-Control-Allow-Headers', 'Content-Type'); //允许携带哪个头访问我
    res.header('Access-Control-Allow-Methods', '*');    //允许哪个方法访问我
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