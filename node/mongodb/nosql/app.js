//mongodb 数据库驱动 mysql
var MongoCLient = require('mongodb').MongoClient;
var url = 'mongodb://192.168.31.128:27017/runoob';//mongodb 连接使用Mongodb://协议 27017端口  mysql 3306
MongoCLient.connect(url,{
    useNewUrlParser:true
},function(err,db){
    if(err){
        throw err;
    }
    console.log('数据库以创建');
    var dbbase = db.db('runoob');   //选择数据库
    //查询数据库是不是异步的
    // dbbase.createCollection('cfw_site',function(err,res){   //回调  创建需要较长时间，会先执行后面的代码
    //     //先处理错误
    //     if(err){
    //         throw err;
    //     }
    //     console.log('创建了集合');
    //     db.close();
    // })       创建好了不需要了
   //db.close();

//    var myObj = {name:'陈方闻',url:'wwww.runoob'};
//    dbbase.collection("cfw_site").insertOne(myObj,function(err,res){
//        if(err){
//            throw err;
//        }
//        console.log('文档插入成功！');
//    });
    dbbase.collection('cfw_site').find({"name":"陈方闻"}).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        db.close();
    })
})