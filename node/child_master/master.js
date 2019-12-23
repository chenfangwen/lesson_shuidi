const cp = require('child_process');  //创建子线程
const child_process = cp.fork(__dirname+'/child.js');  //启动子线程
child_process.send('hah');  //处理耗时的任务
child_process.on('message',str => {
    console.log('parent',str);
})
