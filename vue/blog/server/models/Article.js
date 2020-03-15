// 建表 collection
// 1. Schema  表设计
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    uid:{
        type: mongoose.SchemaTypes.ObjectId,
        ref:'User'
    },
    title:{ type:String },
    isTop:{ type:Boolean }, //是否置顶
    summary:{ type:String }, //介绍
    body:{ type:String },
    categories:[{type:mongoose.SchemaTypes.ObjectId,
                ref:'Category'}]   //外键关系
})

module.exports = mongoose.model('Article',schema,'articles')  // new对象 {} 表名