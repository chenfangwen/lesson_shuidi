
module.exports = (config,resolve) => {
    // ts -> js -> evn js
    
    const baseRule = config.module.rule('js').test(/.js|.ts$/);  //匹配 js ts
    const babelPath = resolve('babel.js')
    const babelConf = require(babelPath);   // src/babel.js
    // console.log(babelConf,'----------')
    const version = require(resolve('node_modules/@babel/core/package.json')).version // version:'7.9.0'
    // console.log(version,"++++++")
    return () => {
        // 使用moudle 生产模块单元
        baseRule
            .use('babel')
            .loader(require.resolve('babel-loader'))
            .options(babelConf({version}))  // 将src/babel.js里的函数运行
                                    //{'presets': [
                                    //         [
                                    //             '@babel/preset-env',
                                    //             {
                                    //                 targets: {
                                    //                     chrome: 59,
                                    //                     edge: 13,
                                    //                     firefox: 50,
                                    //                     safari: 8
                                    //                 }
                                    //             }
                                    //         ]
                                    //     ]
                                    // }
    }
}