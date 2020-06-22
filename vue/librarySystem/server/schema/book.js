const mongoose = require('../db')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    title: String, // 图书名称
    image: String, // 封面
    rating: Number, // 评分
    author: String, // 作者
    author_intro: String, // 作者简介
    pages: String, // 页数
    summary: String, // 图书简介
    pubdate: String, // 出版时间
    publisher: String, // 出版社
    record_date: String, // 上架时间
    borrowCount: Number, // 被借阅次数
    status: Number // 0 = 所有，1 = 在架，2 = 借出
})

module.exports = mongoose.model('Book', BookSchema)

// db.books.insert({
//     "title": "数据结构与算法分析 : Java语言描述",
//     "image": "https://img3.doubanio.com/view/subject/m/public/s28318872.jpg",
//     "rating": 4,
//     "publisher":"机械工业出版社",
//     "author": "韦斯 (Mark Allen Weiss) / 冯舜玺 ",
//     "pages": "35123",
//     "summary": "学习必备好书",
//     "pubdate": "2009-1-1 ",
//     "borrowCount": 0,
//     "status":2,
// })