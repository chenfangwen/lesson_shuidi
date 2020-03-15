const http = require('http');
const fork = require('child_process').fork;



http.createServer((req,res) => {
    const compute = fork('./fork_compute.js');
    // const sum = longComputation();
    compute.send('开启新的进程');
    compute.on('message', sum => {
        res.end(`和为${sum}`);
    })
    
}).listen(1315,() => {
    console.log(process.pid);
});