// 数据库层分离
module.exports = app => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/myblog',{
        useNewUrlParser:true
    })
}