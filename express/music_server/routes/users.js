var express = require('express');
var router = express.Router();
var mysql = require('mysql');     //引入mysql模块
 
var connection = mysql.createConnection({      //创建mysql实例
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'190308fw???',
    database:'vuemusic'
});

connection.connect();

/* GET users listing. */

// 登录
router.post('/login', function(req, res, next) {
  console.log(req.body, 'login')
  let sql = `SELECT * FROM user where userId='${req.body.userId}' and passward='${req.body.passward}'`;
  connection.query(sql, (err,result) => {
      if(err){
          console.log('[SELECT ERROR]:',err.message);
      }
      console.log(result);  //数据库查询结果返回到result中
      if(result.length > 0) {
        res.send({
          msg: 'success',
          data: result
        });
      }
      else {
        res.send({
          msg: '登录失败'
        }); 
      }
  });
});

// 新增用户
router.post('/addUser', function(req, res, next) {
  console.log(req.body, 'req');
  connection.query(`SELECT * FROM user where userId = '${req.body.userId}'`, (err, result) => {
    console.log(result, 'result')
    if(result.length > 0) {
      res.send({
        msg: '重复插入'
      })
    }
    else if(req.body.userId && req.body.passward){
      let sql = 'insert into user(userId,passward) values (?,?)';
      connection.query(sql, [req.body.userId, req.body.passward], (err,result2) => {
          if(err){
              console.log('[SELECT ERROR]:',err.message);
          }
          res.send({
            msg: 'success'
          });
      });
    }
  })
})

module.exports = router;
