const http = require('http');
const path = require('path');
const multiparty = require('multiparty');
const server = http.createServer();
server.on("request",async(req,res)=>{
    
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    // res.end("hello");
    if(req.url == '/'){
        
    }
});

server.listen(3000,()=>console.log('正在聆听3000端口'))