const express = require('express');
// import es6 模块化 es5 require
const app = express();
// require('./db/db')(app);
app.use('/',express.static(__dirname+'/web'))  //静态服务


app.listen('3001',async(req,res) => {
    console.log('http://localhost:3001')
})

// 1. vue 