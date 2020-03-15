// const express = require('express'); //一个node开发框架 
// //异步无阻塞 node 可以支持更高的并发
// const app = express();  //启动一个webapp app
// app.get('/',(resq,res) => res.send('hello word!'))
// app.listen(3000,()=>{
//     console.log('Example app listening on port 3000!');
// })


const express = require('express');
const ejs = require('ejs');  //模板引擎
const app = express();

var MongoCLient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.31.128:27017/runoob';//mongodb 连接使用Mongodb://协议 27017端口  mysql 3306
var dbbase;
MongoCLient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        throw err;
    }
    console.log('数据库以创建');
    dbbase = db.db('runoob'); 
});

app.get('/',(req,res) =>{
    dbbase.collection('cfw_site').find({"name":"陈方闻"}).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        // db.close();
        ejs.renderFile('view/index.html',{
            title:'hello',
            items:result
        },function(err,data){
            res.end(data);
        })
    })
   
})
app.listen(3000);
