//process node进程全局对象
process.on('message',(str) => {
    console.log('child '+str); //子进程 把活干了 偷偷的跑到另外一个CPU 挂在一个进程 把多和能力运用起来
    process.send('hehe');
})
