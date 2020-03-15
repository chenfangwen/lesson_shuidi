- NOSQL
  MYSQL 关系型数据库

  NOSQL不需要写SQL语句
  JSON object {} ,save()
  
  适合碎片化的，结构不是很良好的数据存储

  Mongodb 云开发数据库就是线上版的
  db.表名.find({}) 查询表

- MYSQL          MONGODB
  关系型数据库    NOSQL 文档型
   show database  use dbs
           use db
   tables         collections
   sql           js 语法的面向对象api

   - 数据库 后端开发框架
   express node,后端就是app
   app.get('/',(resq,res) => res.send('hello word!'))
    app.listen(3000,()=>{
        console.log('Example app listening on port 3000!');
    })
