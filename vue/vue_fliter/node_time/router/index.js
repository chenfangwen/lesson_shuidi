
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const moment = require('moment')
const Todo = require('../models/todo');

const ObjectId  = mongoose.Types.ObjectId;
// restful 
router.post('/', (req, res) => {
  // 存时间时， 给日期的字符串 html表单的提交 
  // console.log(req.body); //请求体
  Todo.create(req.body, (err, todo) => {
    if (err) {
      res.json(err)
    } else {
      res.json(todo)
    }
  }) //BSON doc
})
router.get('/:id',(req,res) => {
    const id = req.params.id;
    Todo.findOne({
        "_id":ObjectId(id)
    },(err,todo)=>{
        console.log(moment(todo.start).format('YYYY-MM-DD HH:mm:ss a'))
        res.json({
            todo
        })
    })

})
module.exports = router