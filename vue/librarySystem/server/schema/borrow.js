const mongoose = require('../db')
const Schema = mongoose.Schema

const BorrowSchema = new Schema({
    title: String, // 图书名称
    name: String,
    borTime: String,
    lendTime: String,
    isLend: Number,
    image: String
})

module.exports = mongoose.model('borrow', BorrowSchema)