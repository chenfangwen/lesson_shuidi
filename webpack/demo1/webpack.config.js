// // console.log(process.env.NODE_ENV)
// // 1. 开发的时候 vue-cli 内存中编译
// // 2. 上线时 压缩 优化 代码分离
// const path = require('path')
// const rimraf = require('rimraf')
// rimraf.sync('dist');    //删除已有的dist目录

// module.exports = {
//     entry: './src/main', //入口文件
//     mode: process.env.NODE_ENV, //以什么模式进行编译 可以在package.js设置 development product
//     output: {
//         filename: 'bundle.js',  
//         path: path.resolve(__dirname, 'dist')
//     }
// }

const path = require('path');
const rimraf = require('rimraf')
rimraf.sync('dist')
const Config = require('webpack-chain')     //写webpack的新方案,链式的配置
const config = new Config()     //实例化
const resolve = (src) => {
    return path.join(process.cwd(),src)
}

config
    .entry('src/main')
    .add(resolve('src/main.js'))
    .end()
    .set('mode',process.env.NODE_ENV)
    .output
        .path(resolve('dist'))
        .filename('[name].bundle.js')   //name = entry('src/main')  -> src/main.bundle.js

config.module
    .rule('css')
    .test('/\.css$/')
    .use('css')
    .loader('css-loader')
    
module.exports = config.toConfig();