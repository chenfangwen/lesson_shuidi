const rimraf = require('rimraf')    //删除文件的包
const path = require('path')
const ora = require('ora')  //加载指示器
const chalk = require('chalk')  
// webpack 最基本的 entry output mode
// webpack-chain 编程
// console.log(process.cwd(),__dirname) 项目的根目录下 webpack-build

const config = require('./base')()     //拿到base.js 输出函数的返回值config
// console.log(config)
const webpack = require('webpack')

rimraf.sync(path.join(process.cwd(),'dist'))  //打包之前删除原文件

const spiner = ora('开始构建项目...')       //打包过程提示
spiner.start()

webpack(config.toConfig(),  //webpack 打包
    function(err,status){     //打包完成
        spiner.stop()       //取消打包提示
        if(err) throw err       //错误处理
        process.stdout.write(
            status.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n'  
        )
        console.log(chalk.cyan('build 完成\n'))
    })