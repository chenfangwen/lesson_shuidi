const Config = require('webpack-chain');
const config = new Config();    //配置实例
const path = require('path')
const resolve = (src) => {
    return path.join(process.cwd(),src)
}

module.exports = () => {
    config
        .entry('app')
        .add(resolve('src/main.js'))
        .end()
        .set('mode',process.env.NODE_ENV)
        .output.path(resolve('dist'))
        .filename('[name].bundle.js');

    return config
}