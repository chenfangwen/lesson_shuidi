const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SanLoaderPlugin = require('san-loader/lib/plugin');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        host: "localhost",
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.san$/,
                use: [
                    {
                        loader: 'san-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                require.resolve('@babel/plugin-proposal-class-properties'),
                                require.resolve('san-hot-loader/lib/babel-plugin')
                            ],
                            presets: [
                                [
                                    require.resolve('@babel/preset-env'),
                                    {
                                        targets: {
                                            browsers: '> 1%, last 2 versions'
                                        },
                                        modules: false
                                    }
            
                                ],
                                // 下面配置 allExtensions
                                [require.resolve('@babel/preset-typescript'), {allExtensions: true}]
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]'
                            },
                            localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: [/amd_modules\/@baidu\/pmd/, /amd_modules\/@baidu\/iconfont/],
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            esModule: false,
                            minimize: false
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new SanLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}