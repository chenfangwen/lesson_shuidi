//一个 webpack 插件将你的 bundle 包裹在一个 System.register 调用中，
// 这使得 webpack bundle 完全可以被 SystemJS 使用。
const WebpackSystemRegister = require('webpack-system-register')
const path = require('path');
module.exports = {
  entry: {
    // Goods: path.join(__dirname, './Goods.jsx'),
    Pay: path.join(__dirname, './Pay.jsx')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new WebpackSystemRegister({

    })
  ]
};