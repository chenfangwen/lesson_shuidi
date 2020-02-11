const http = require('http');
const numCPUS = require('os').cpus().length;
const cluster = require('cluster');
if(cluster.isMaster){
    for(let i = 0; i < numCPUS; i++){
        cluster.fork();
    }
}else{
    http.createServer((req,res) => {
        res.writeHead(200);
        res.end(`hello world ${process.pid}`);
    }).listen(8000)
}
