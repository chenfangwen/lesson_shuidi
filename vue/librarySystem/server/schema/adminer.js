const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AdminerSchema = new Schema({
    name: {
        type: String,
        required: true  //必填
    },
    pwd: String
})

module.exports = mongoose.model('Adminer', AdminerSchema)
