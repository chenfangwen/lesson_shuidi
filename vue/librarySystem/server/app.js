const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/library'
mongoose.connect(DB_URL,{ useNewUrlParser: true, useUnifiedTopology: true  })

// 解析表单数据
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 引入 路由模块
var booksRouter = require('./routes/books')
var usersRouter = require('./routes/users')
var recordRouter = require('./routes/records')
var wishRouter = require('./routes/wishes')
var adminerRouter = require('./routes/adminers')
var borrowRouter = require('./routes/borrows')

app.use('/book', booksRouter)
app.use('/user', usersRouter)
app.use('/record', recordRouter)
app.use('/wish', wishRouter)
app.use('/adminer', adminerRouter)
app.use('/borrow', borrowRouter)

app.listen(8888, function () {
    console.log('server connect, listening at http://localhost:8888')
})
