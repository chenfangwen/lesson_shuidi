const express = require('express')
const router = express.Router()
const AdminerSchema = require('../schema/adminer')

// 设置跨域
router.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

    if (req.method === 'OPTIONS') {
        res.sendStatus(200) // 让options请求快速返回
    } else {
        next()
    }
})

// 登录
router.post('/login', (req, res) => {
    const { name, pwd } = req.body
    AdminerSchema.find({name,pwd}, (err, data) => {
        console.log(data,'--')
        if (err) {
            res.json({
                result: false,
                msg: err
            })
        } else {
            if (data.length !== 0) {
                res.json({
                    result: true,
                    msg: '登录成功'
                })
            } else {
                res.json({
                    result: false,
                    msg: '管理员不存在或密码错误'
                })
            }
        }
    })
})

// 注册
router.post('/regist', (req, res) => {
    const { name, pwd } = req.body
    AdminerSchema.find({name,pwd}).exec((err, concats) => {
        console.log(concats)
        if(concats.length){
            res.json({
                result: false,
                msg: '管理员已存在'
            });
        } else {
            var user = new AdminerSchema({
                "name" : name,
                "pwd": pwd
            })
            user.save(function (err, user) {
                if (err) return console.error(err);
            });
            res.json({
                result: true,
                msg: '管理员注册成功'
            })
        }
    })
})


module.exports = router

