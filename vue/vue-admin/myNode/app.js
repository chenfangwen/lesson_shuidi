const express = require('express');
const path = require('path')
const app = express();
const User = require('./route/banner.js')


app.get('/', (req, res) => {
    //服务器地址vueDream/dist/index.html
    console.log(__dirname);
    res.send({a:'123',b:'534534'})
})

app.use('/banner', User)

app.listen(3000,() => {
    console.log('listen 3000...')
})