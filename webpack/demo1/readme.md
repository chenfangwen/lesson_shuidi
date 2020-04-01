

1. cross-env 可以屏蔽环境变量的差异

2. 最小执行单元
    {
        entry
        mode 
        output
    }


    打包过后 css -> [
                        [ './node_modules/css-loader/dist/cjs.js!./src/index.css',
                            'body {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-color: orange;\r\n  }',
                        '' ],
                        toString: [Function: toString],
                        i: [Function]
                    ]