// commonjs es
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
// client dom 
// 谁提供：虚拟 DOM
import { StaticRouter, } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { renderToString } from 'react-dom/server';
import Header from '../components/Header.jsx';
import Routes from '../Routes';
import { getClientStore } from '../store/index'


const app = express();
const store = getClientStore();
// static 目录做了静态资源的一个映射
// koa-static
app.use(express.static('static'))
// ejs jsp jade vue-template:  if for 
app.get('*', (req, res) => {
  console.log(req.url);
  const matchedRouters = matchRoutes(Routes, req.path);
  matchedRouters.forEach(mRouter => {
    // console.log()
    if (mRouter.route.component.loadData) {
      mRouter.route.component.loadData(store.dispatch).then(() => {
        // 
        // console.log('okokok')
        const App = (
          <Provider store={store}>
            <StaticRouter location={req.url}>
              { renderRoutes(Routes) }
            </StaticRouter>
          </Provider>
        );
        // jsx -> babel -> React.createElement()
        const htmlStr = renderToString(App);
        console.log(htmlStr);
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <div id="root">${htmlStr}</div>
          <script>
          window.appData = ${JSON.stringify(store.getState())}
          </script>
          <script src="/index.js"></script>
        </body>
        </html>`);
      })
    }
  })
  // promise.then
  console.log(matchedRouters);
  // 入口组件 jsx 
})

app.listen(3000, () => {
  console.log('server is running 3000 port');
})