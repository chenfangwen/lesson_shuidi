const express = require('express')
const router = express.Router()
const BorrowSchema = require('../schema/borrow')
const BookSchema = require('../schema/book')
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

router.post('/add', (req, res) => {
    const {title, name, borTime, lendTime, isLend,image} = req.body
    // console.log(title, name, borTime, lendTime, isLend)
    let book = new BorrowSchema({
        title, name, borTime, lendTime,isLend,image
    })
    BookSchema.find({title}).exec((err, result) => {
        console.log(result[0].count,'--')
        BookSchema.findOneAndUpdate({title},{
            count: result[0].count -1,
            status: 2
        }).exec()
    })
    book.save(function (err, user) {
        if (err) return console.error(err);
    });
    res.json({
        result: true,
        msg: '录入成功'
    })  
})

router.get('/list', (req, res) => {
    const {name,title} = req.query
    let filtter = {}
    if(name){
        filtter.name =name
    }
    if(title){
        filtter.title =title
    }
    // console.log(title)
    if(filtter) {
        BorrowSchema.find(filtter).exec((err, result) => {
            if(result) {
                res.json({
                    msg: '查询成功',
                    result
                })
            }
        })
    }else {
        BorrowSchema.find({}).exec((err, result) => {
            if(result) {
                res.json({
                    msg: '查询成功',
                    result
                })
            }
        })
    }
    
})

router.post('/lend', (req, res) => {
    const {id} = req.body
    console.log(id)
    BorrowSchema.findOneAndUpdate({ _id: id }, {
        isLend: 1
    }).exec((err, result)=> {
        // console.log(err,result)
        res.send({
            code: 200,
            message: '归还成功'
        })
    })
    
})
router.post('/callLend', (req, res) => {
    const {id} = req.body 
    console.log(id)
    BorrowSchema.findOneAndUpdate({ _id: id }, {
        isLend: 2
    }).exec((err, result)=> {
        // console.log(err,result)
        res.send({
            code: 200,
            message: '催还已发送'
        })
    })
})
module.exports = router