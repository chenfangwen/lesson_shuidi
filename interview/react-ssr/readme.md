## 前后端组件衔接起来
1. 前端代码 -> webpack -> static
2. express 启动 static 静态资源的映射
3. react 组件在服务端生成了 html
4. express 返回html文件，也要前端打包完的 资源通过 script 返回回去了，前端打包完的代码执行，完成事件绑定

同于一个页面，可以是SPA ，也可以是 SSR

落地页：第一次打开（或者刷新）的页面 都是SSR
其他基本是SPA