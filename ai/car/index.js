//fileSystem 内置模块
const fs=require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;

// console.log('hello node');
const image=fs.readFileSync("car.jpg").toString("base64");      //更好的传到云端处理
// console.log(image); 
//client 本地AI代理
const client = new AipImageClassifyClient('17711746','903hsbN2wnEIi2FpSEikNmeD','ECjY0e4VWqXx0BgsAchgYT0GWNcWG0VE');
client
.carDetect(image)
.then(function(result){
    console.log(result);
});

// AipImageClassifyClient
//回调函数function()
// 文件在哪？磁盘里
// js 在哪里运行，内存 I/O操作
// fs.readFile('./tedsadxt.txt',function(err,data){
//     if(err){
//         return console.error(err);
//     }
//     console.log(data.toString());
// })