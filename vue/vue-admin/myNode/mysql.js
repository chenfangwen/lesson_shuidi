var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '190308',
  database : 'nodemysql'
});
 
connection.connect();

module.exports = connection