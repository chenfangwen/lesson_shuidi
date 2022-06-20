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

// 获取搜索历史
router.get('/getSearchHistory', function(req, res, next) {
  let sql = `SELECT * FROM searchHistory where userId='${req.query.userId}'`;
  connection.query(sql, (err,result) => {
      if(err){
          console.log('[SELECT ERROR]:',err.message);
      }
      console.log(result);  //数据库查询结果返回到result中
      res.send({
        msg: 'success',
        data: result
      });
  });
});

// 新增，修改搜索历史
router.post('/addSearchHistory', function(req, res, next) {
  console.log(req.body, 'req');
  connection.query(`SELECT * FROM searchHistory where userId = '${req.body.userId}'`, (err, result) => {
    // console.log(result, 'result')
    if(result.length > 0) {
        let sql = `update searchHistory set lastSearch='${req.body.lastSearch}' where userId='${req.body.userId}'`;
        connection.query(sql, (err,result2) => {
            if(err){
                console.log('[SELECT ERROR]:',err.message);
            }
            res.send({
              msg: 'success'
            });
        });
    }
    else {
      let sql = 'insert into searchHistory(userId,lastSearch) values (?,?)';
      connection.query(sql, [req.body.userId, req.body.lastSearch], (err,result2) => {
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
