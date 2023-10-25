const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    // Use env.<YOUR VARIABLE> here:
    console.log('Goal: ', env.goal); // 'local'
    console.log('Production: ', env.production); // true

    return {
        mode: "production",
        entry: {
            index: './src/index.js',
            // print: './src/print.js',
        },
        optimization: {
            usedExports: true,
        },
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'test'
            })
        ]
    };
};