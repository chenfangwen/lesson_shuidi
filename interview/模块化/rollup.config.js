//rollup.config.js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
export default {
    entry: './2.js',  //入口
    format: 'umd',   //umd兼容AMD和CommonJS
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'  //排除node_modules
        })
    ],
    dest: 'build/bundle.js'  //打包目录
}
