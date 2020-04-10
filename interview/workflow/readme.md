## 前端工作流

- webpack 架构
    1. 源头package.json
    webpack 不直接出场 架构 dev build
    cross-env 服务器无差别环境变量配置  node 一个npm包
    两个环境并行考虑工作流架构
    build目录负责编译工作 开发架构的一项 
    rimraf  yarn add rimraf -D

    3. base.js 同时服务 dev.js build.js

    4. module 和插件处理
        config.js

    5. lib 把module 放在congig 目录 把一个文件一件事
    findSync 所有js 文件组成数组输出

    6. 可拔插的webpack 插件
    - babel
    - postcss
    - htmltemplate

    webpack 通过module 