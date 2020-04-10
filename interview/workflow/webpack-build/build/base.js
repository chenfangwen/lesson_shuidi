const { findSync } = require('../lib')
const Config = require('webpack-chain');
const config = new Config();    //配置实例
const path = require('path')
const resolve = (src) => {
    return path.join(process.cwd(),src)
}
const  files = findSync('config');
console.log(files,"++++")

module.exports = () => {
    const map = new Map()   //es6 Map key不限类型
    files.map(file => {
        const name = file.split('/').pop().replace('.js','')
        // console.log(name,'---')
        return map.set(name,require(file)(config,resolve))
    })
    // console.log(map,'map-----')
    map.forEach(v => {
        v()
    })
    return config
}