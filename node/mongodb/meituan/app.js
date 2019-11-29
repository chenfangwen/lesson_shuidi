const express = require("express"); //node 的开发框架

const bodyParser = require('body-parser'); //解析表单 需要安装
//连接数据库
let dbo;
const path = require('path')
const ObjectID =require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;   //存储店铺信息
const url = 'mongodb://192.168.31.129:27017/meituan';
MongoClient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        console.log(err);
        return;
    }
    dbo = db;
    console.log('数据库连接成功');
})

const app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')
;app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json({}))

app.get('/',function(req,res){
    res.send({
        code:0,
        message: 'hello world'
    })
}) //
app.get('/restaurant/:restaurant_id',(req,res)=>{
    let restaurant_id = req.params.restaurant_id;
    let dbObject = dbo.db("meituan");
    dbObject
    .collection("restaurant").find({
        _id:ObjectID(restaurant_id)
    })
    .toArray((err,result)=>{
        // res.send({
        //     msg:'ok',
        //     data:result[0]
        // })
        res.render('index',{
            restaurant:result[0]
        })
    })
    // res.send({
    //     msg:'OK',
    //     id:restaurant_id
    // })
})

app.post('/restaurant',(req,res)=>{
    console.log(req.body);
    let dbObject = dbo.db("meituan");
    dbObject
    .collection("restaurant")
    .insertOne(req.body,(req,result)=>{
        console.log(result.insertedId);
    })
    //拿到用户填写的表单信息在req.body
    res.send({
        code:0,
        data: req.body
    })
})
app.listen(7000);