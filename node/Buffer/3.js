const http = require('http'); 
// tcp 传输的是二进制
// 优化的空间？ 
let hello = '';
for (var i = 0; i < 10240; i++) {
  hello += "a"; // 10KB 的字符串？  一次TCP  二进制处理 
}
// 没有用buffer 啊 
// console.log(`Hello：${hello.length}`);

//转为buffer在传输性能更好
hello = Buffer.from(hello)

http.createServer((req, res) => {
  res.writeHead(200);
  res.end(hello);
}).listen(8001);