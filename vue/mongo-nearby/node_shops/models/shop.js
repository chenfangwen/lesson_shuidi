const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  //必填
    },
    location: {   // 经纬度
        type: [Number],    //数组 经纬度
        index: '2d',    //2D 索引 
        sparse: true
    }
})

const Shop = mongoose.model('Shop',shopSchema);
module.exports = Shop;