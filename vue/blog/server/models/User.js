const mongoose = require('mongoose');
const bcrypt = require('bcrypt')  //加密

const schema = new mongoose.Schema({
    username: { type: String },
    password: { type: String, select: false, set(val){  //insert操作
        return bcrypt.hashSync(val,10)  //加密 不存原密码
    } } //select:false 使此字段不被取出 可以插入更新 不能取出
    
})

module.exports = mongoose.model('User',schema,'users');