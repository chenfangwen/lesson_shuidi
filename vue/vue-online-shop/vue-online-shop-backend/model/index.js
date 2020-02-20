// const manufacturer
// 1. Schema 设计数据库 模型
const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose)
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
    id:ObjectId,  //mongodb数据类型  hash值 唯一标识
    name:String,
    image:String,
    price:Number, 
    description:String,
    manufacturer:{ type:ObjectId, ref:'ManuFacturer' }
})

const manufacturerSchema = Schema({
    id:ObjectId,  //mongodb数据类型  hash值 唯一标识
    name:String
})

const Product = model('Product',productSchema)
const Manufacturer =  model('Manufacturer',manufacturerSchema)