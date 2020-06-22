const express = require('express')
const router = express.Router()
const UserSchema = require('../schema/user')
const mongoose = require('../db')
// 设置跨域
router.all('*', function (req, res, next) {
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
    UserSchema.find({name,pwd}, (err, data) => {
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
                    msg: '用户不存在或密码错误'
                })
            }
        }
    })
})

// 注册
router.post('/regist', (req, res) => {
    const { name, pwd } = req.body
    UserSchema.find({name,pwd}).exec((err, concats) => {
        console.log(concats)
        if(concats.length){
            res.json({
                result: false,
                msg: '用户已存在'
            });
        } else {
            var user = new UserSchema({
                "name" : name,
                "pwd": pwd
            })
            user.save(function (err, user) {
                if (err) return console.error(err);
            });
            res.json({
                result: true,
                msg: '注册成功'
            })
        }
    })
})

// 用户列表
router.get('/list', (req, res) => {
    const {name} = req.query
    console.log(name)
    if(name) {
        UserSchema.find({name}, (err, data) => {
            if (err) {
                res.json({
                    result: false,
                    msg: err
                })
            } else {
                res.json({
                    result: true,
                    msg: '查询成功',
                    data: data
                })
            }
        })
    } else {
        UserSchema.find({}, (err, data) => {
            if (err) {
                res.json({
                    result: false,
                    msg: err
                })
            } else {
                res.json({
                    result: true,
                    msg: '查询成功',
                    data: data
                })
            }
        })
    }
   
})

// 新增用户
router.post('/add', (req, res) => {
    const { name, pwd } = req.body
    if (name !== '' && pwd !== '') {
        const user = new UserSchema({
            name,
            pwd
        })
        UserSchema.find({ name }, (err, data) => {
            if (err) {
                res.json({
                    result: false,
                    msg: err
                })
            } else {
                if (data.length !== 0) {
                    res.json({
                        result: false,
                        msg: '该用户已存在'
                    })
                } else {
                    user.save((err, data) => {
                        if (err) {
                            res.json({
                                result: false,
                                msg: err
                            })
                        } else {
                            res.json({
                                result: true,
                                msg: '新增成功'
                            })
                        }
                    })
                }
            }
        })
    } else {
        res.json({
            result: false,
            msg: '用户名或密码不能为空'
        })
    }
})

// 删除用户
router.post('/del', (req, res) => {
    const { name } = req.body
    UserSchema.remove({ name }, (err, data) => {
        if (err) {
            res.json({
                result: false,
                msg: err
            })
        } else {
            res.json({
                result: true,
                msg: '删除成功'
            })
        }
    })
})

// 修改用户
router.post('/update', (req, res) => {
    const { oldname, name, pwd } = req.body

    UserSchema.findOneAndUpdate({ 'name':oldname },{
        name,
        pwd
    })
    .exec((err, result)=> {
        // console.log(err,result)
        res.send({
            code: 200,
            message: '用户修改成功'
        })
    })
})
module.exports = router
