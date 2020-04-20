var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var webpack = require("webpack");
var path = require("path");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: ["@babel/polyfill", "./index.tsx"],
  output: {
    path: path.join(basePath, "dist"),
    filename: "bundle.js"
  },
  devtool: "source-map",    //源码映射 .styl .ts
  devServer: {
    contentBase: "./dist", // Content base
    inline: true, // Enable watch and live reload
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader","css-loader?sourceMap"]
        // use: [
        //   // 动态的， 不同的项目， 需求不一样
        //   // loader不一样 
        //   'style-loader',
        //   {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       publicPath: '../',
        //       hmr: process.env.NODE_ENV === 'development',
        //       reloadAll: true
        //     }
        //   },
        //   'css-loader'
        // ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
    ]
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    //css 优化压缩
    new OptimizeCssAssetsPlugin()
  ]
};
