const rimraf = require('rimraf')
const path = require('path')
const ora = require('ora')  //加载指示器
const chalk = require('chalk')
// webpack 最基本的 entry output mode
// webpack-chain 编程
// console.log(process.cwd(),__dirname) 项目的根目录下 webpack-build

const config = require('./base')()
// console.log(config)
const webpack = require('webpack')

rimraf.sync(path.join(process.cwd(),'dist'))

const spiner = ora('开始构建项目...')
spiner.start()

webpack(config.toConfig(),function(err,status){
    spiner.stop()
    if(err) throw err
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