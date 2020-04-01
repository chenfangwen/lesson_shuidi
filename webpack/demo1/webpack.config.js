// console.log(process.env.NODE_ENV)
// 1. 开发的时候 vue-cli 内存中编译
// 2. 上线时 压缩 优化 代码分离
const path = require('path')
const rimraf = require('rimraf')
rimraf.sync('dist');    //删除已有的dist目录

module.exports = {
    entry: './src/main', //入口文件
    mode: process.env.NODE_ENV, //以什么模式进行编译 可以在package.js设置 development product
    output: {
        filename: 'bundle.js',  
        path: path.resolve(__dirname, 'dist')
    }
}