## 启动
1. npm run dev
2. cd mock-server && nodemon index.js

## SPA + SSR
1. / 页面渲染生成的
2. 点击 Link（/login）  去到 login 页面，js history api 达到 SPA体验, 这一步并没有和后端有任何交互，这一步用户看到的页面是 js 构造出来的
3. 在当前这个 /login 页面，刷新一下页面（发出 /login 请求）, 又成了服务端渲染
同一个页面，既可以是 SSR， 也可以SPA，用户行为。




**搭建步骤**

## 前后端组件衔接起来
1. 客户端代码(不用ReactDom.render全部组件，ReactDom.hydrate()) -> webpack -> static
2. express 启动 static 静态资源的映射 
3. react 组件在服务端生成了 html
4. express 返回html文件，也要前端打包完的 资源通过 script 返回回去了，前端打包完的代码执行，完成事件绑定等业务

## 同构路由
落地页：第一次打开(或者刷新)的页面，SSR
之后用户操作：变成了 SPA
路由 既可以在前端

前端： **BrowserRouter** 控制组件 
地址栏发生变化，地址栏里面的 url 是不会发送，不会像后端发起请求,一般只是组件切换

后端：**StaticRouter** 直接控制后端返回的html

localhost:3000/login 
- js切换 login组件
- /login 访问后端 后端也应该返回 login 对应的组件的html

## store 数据展示方面
redux：
```js
function reducer() {
  return {
    hotCars: [
      {}
    ]
  }
}
// 找一个 既可以在服务端发请求（xhr，fetch），也可以在客户端发请求的库（http.get）
axios().then(() => {
  // redux update
  dispatch()
})
```
- SPA
1. 用户一进来，用户看不到内容，正在加载中...
2. axios 3s, 用户才会看到内容
3. redux 有数据，页面才构造出来

- SSR
用户一进来，页面加载完毕，它就应该有，热门车型内容
- 兼顾html生成
- 兼顾请求发送，请求完毕是不是拿到一堆 JSON 数据，服务端会把 JSON 数据告诉前端，为什么要告诉前端，因为这个请求我在服务端已经请求完毕了，你可以不用请求，直接用数据了，



## 页面上的数据问题 
ajax 请求回来的，
现在：静态jsx，变成html，
依赖于 ajax 结果的那部分内容仍需靠 js前端构成生成出来

目标：认为落地的页面内容（包括依赖ajax 结果的那部分内容），应该由后端直接生成返回（直接带有数据的页面）


生成 renderToString，没有li，我们 render 的时候，commentList = [], 

renderToString 之前 commentList 有数据
commentList 的数据哪里来：前端请求回来，之后更新了 redux 里面的数据。

所以为了落地页直接展示数据
请求放到后端，后端请求完之后，再renderToString()

1. 请求发生后端
2. 请求回来了，保证后端的store commentList 有数据，然后再renderToString()


怎么请求发生后端：要请求，我们只要 dispatch (loadData) 一下 就行了，在哪里 dispatch呢（约定）
约定：当前页面依赖的请求，我会放到 一个 静态属性上面
Home.loadData = (dispatch) => {
  // 后端发起 dispatch，dispatch 完了之后，请求发出去了，reducer store
  return dispatch(getCommentList()) // 得到一个 Promise
}
loadData 里面放置我们当前组件依赖的 ajax 数据
组件很多的，要把所有的组件依赖的数据都请求？当前访问的页面的组件
import { renderRoutes, matchRoutes } from 'react-router-config';
const matchedRouters = matchRoutes(Routes, req.path); 

这样我们就能在后端生成有数据的用户直接要看到的html了

## 两个不同store 导致重复请求   水合，就是让前端也用到后端请求后的数据，不用再发请求
 
```js
const clientStore = createStore()
const serverStore = createStore()

```
1. localhost:3000/
2. loadData -> ajax -> store(更新的是服务端的 store)
3. 当我们看到落地页的时候，后端 store 已经更新（也是能够渲染动态页面的保证），渲染出来是一个完整的 html，
   ```html
   <li>0</li>
   <li>1</li>
   <li>2</li>
   ```
4. 但是在 客户端的 store 看来，依然默认数据，这部分页面依然是空的
5. 以客户端为准，客户端发送的覆盖，（先看到有内容，突然空白了，）
6. didMount 又发起了前端的 dispatch
7. 数据请求回来
8. 前端又渲染了一次 , 加上服务端渲染，两次渲染
 
所以我们想办法 让 两个 store ，同步

## 同步两个 store
1. 后端的store 已经最新
2. 后端里面 store 的数据，传给前端
3. 放到 script 标签里面  
<script>
  window.appData = ${JSON.stringify(store.getState())}
</script>
<script src="/index.js"></script>
4. 前端这个时候拿到最新的 store，当我们前端创建 store的时候，把从后端store，取到数据当做默认值（前端创建出来的store 和 后端同步的）

```js
let defaultState = {};
if (typeof window === 'object' && window.appData) {
  defaultState = window.appData
}
return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientRequest)))
```