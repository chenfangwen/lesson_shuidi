const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type: String,
        required: true  //必填
    },
    pwd: String
})

module.exports = mongoose.model('User', UserSchema)
