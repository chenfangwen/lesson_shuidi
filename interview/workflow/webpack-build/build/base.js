const { findSync } = require('../lib')
const Config = require('webpack-chain');
const config = new Config();    //webpack-chain配置实例
const path = require('path')
const resolve = (src) => {
    return path.join(process.cwd(),src)     //定位项目下文件
}
const  files = findSync('config');      //遍历src/config webpack配置的所有文件
console.log(files,"++++")

module.exports = () => {
    const map = new Map()   //es6 Map key不限类型
    files.map(file => {        //遍历config下的文件
        const name = file.split('/').pop().replace('.js','')  //获得文件路径(去掉后缀)
        // console.log(name,'---')
        return map.set(name,require(file)(config,resolve))      //将文件输出的函数拿到，并传递参数，作为值放进map里
    })
    // console.log(map,'map-----')
    map.forEach(v => {      //遍历map的值，即三个配置函数，
        v()         //执行，配置config
    })
    return config       //返回配置好了的config
}