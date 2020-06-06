# 懂车帝前端实习生一二面

## 一面

**怎么学习**

看视频，看官方文档，写项目，小demo，看书，逛社区看文章，写文章。

**最近印象最深的文章**

我说一篇介绍ES6到ES10新特性的文章(对这一块比较熟悉，就有了下面的追问)
**跨域**
- JSONP
- CORS 
  简单请求     
    GET、HEAD、POST 请求&&
    Content-Type 为(form 标签可以请求的类型)：
    text/plain 纯文本
    multipart/form-data form表单文件
    application/x-www-form-urlencoded <form encType=””>中默认的encType
  复杂请求跨域在正式通信前会先发送一个 OPTIONS 请求 --- "预检"请求

  服务端设置 Access-Control-Allow-Origin 就可以开启 CORS
  Access-Control-Allow-Origin 设置哪个源可以访问我 * http://www.baidu.com
  Access-Control-Allow-Headers 允许携带哪个自定义头访问我
  Access-Control-Allow-Methods 允许哪个方法访问我
  Access-Control-Allow-Credentials 允许携带 cookie
  Access-Control-Max-Age 预检的存活时间
  Access-Control-Expose-Headers 允许返回的头，把响应头暴露出去给前端
 
- postMessage
- websocket
- node中间件代理(两次跨域)
- Nginx 反向代理
  即所有客户端的请求都必须先经过 nginx 的处理，nginx 作为代理服务器再讲请求转发给 node 或者 java 服务，这样就规避了同源策略
- document.domain + iframe
  该方式只能用于二级域名相同的情况下，比如 a.test.com 和 b.test.com，只需要给页面添加 document.domain ='test.com' 表示二级域名都相同就可以实现跨域，两个页面都通过 js 强制设置 document.domain 为基础主域，就实现了同域
- location.hash + iframe
  原理就是改变URL的hash部分来进行双向通信
  a.html 要和 c.html 跨域相互通信，通过中间页 b.html 来实现。 三个页面，不同域之间利用 iframe 的 location.hash 传值，相同域之间直接 js 访问来通信
  缺点：
  数据直接暴露在了url中，数据容量和类型都有限等
- window.name + iframe
  window 对象有 name 属性，该属性有个特征：即在一个窗口(window)的生命周期内，窗口载入的所有的页面都是共享一个 window.name，每个页面对 window.name 都有读写的权限，window.name 是持久存在一个窗口载入过的所有页面中的，在不同的页面（甚至不同域名）加载后依旧存在，并且可以支持非常长的 name 值，可以利用这个特点进行跨域

**ES6的新特性**
字符串扩展 ``
解构表达式  
  数组解构 1. let [a,b,c,] = [1,2,3,]  2. [ one, ...others ] = [1,2,3]; other[0]->2 other[1]->3
  对象解构 const { name, age } = User 2. user{name:'',age:''}  show( { name, age } = User );
函数优化 
  函数参数默认值 function add(a , b = 1) {
                    return a + b;
                }
  箭头函数  
  对象的函数属性简写 a() {}
  箭头函数结合解构表达式 ({name}) =>  console.log("hello," + name);
数组新增方法 map和reduce 
  map  
  reduce  
promise    Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方
          法进行处理。
set和map 数据类型
  Map结构的key可以是任意对象
  Set，本质与数组类似。不同在于Set中只能保存不同元素，如果元素相同会被忽略
  const map = new Map([
    ['key1','value1'],
    ['key2','value2'],
  ])
  const set = new Set([
      ['key1','value1'],
      ['key2','value2'],
  ])

模块化
  什么是模块化？    模块化就是把代码进行拆分，方便重复利用
  export 
  export default
  import .. from ('..')
对象扩展

数组扩展
 

**箭头函数**

**let&const**

**以下题目分别输出什么，为什么**

```javascript
let i = 1
for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)//0 1 2 3 ...10
  }, 0);
}

let i = 1
for (var i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i)  //Identifier 'i' has already been declared
  }, 0);
}

var i = 1
for (let i = 0; i <= 10; i++) {
  setTimeout(() => {
    console.log(i) //0 1 2 3 4 5...10
  }, 0);
}
```

**ES6异步解决方案**  1.promise
 co+Generator
es7 async/await 


**promise和async，await的区别**
1. Promise的出现解决了传统callback函数导致的“地域回调”问题，但它的语法导致了它向纵向发展行成了一个回调链，遇到复杂的业务场景，这样的语法显然也是不美观的。而async await代码看起来会简洁些，使得异步代码看起来像同步代码，
await的本质是可以提供等同于”同步效果“的等待异步返回能力的语法糖，只有这一句代码执行完，才会执行下一句。

2. async await与Promise一样，是非阻塞的。

3. async await是基于Promise实现的，可以说是改良版的Promise，它不能用于普通的回调函数。

简单来看，这两者除了语法糖不一样外，他们解决的问题、达到的效果是大同小异的，我们可以在不同的应用场景，根据自己的喜好来选择使用。


**promise有哪些方法**
then resolve reject all finally race

**下面代码输出什么**

```javascript
let p1 = Promise.resolve(1);
let p2 = Promise.reject(2);

Promise.all([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
Promise.race([p1, p2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

  // 2 1
```



**写一个promise限流函数**

```javascript
class PromisePool {
  constructor(max, fn) {
    this.max = max; // 最大并发数
    this.fn = fn; // 自定义的请求函数
    this.pool = []; // 并发池
    this.tasks = []; // 剩余的请求地址
  }

  start(tasks) {
    this.tasks = tasks;
    // 先循环把并发池塞满
    while (this.pool.length < this.max) {
      let task = this.tasks.shift();
      this.setTask(task);
    }
    // 利用Promise.race 方法来获得并发池中某任务完成的信号
    let race = Promise.race(this.pool);
    return this.run(race);
  }

  run(race) {
    race.then((res) => {
      console.log(res);
      // 每当并发池跑完一个任务，就再塞入一个任务
      let task = this.tasks.shift();
      this.setTask(task);
      return this.run(Promise.race(this.pool));
    });
  }
  setTask(task) {
    if (!task) return;
    let task = this.fn(task);
    this.pool.push(task); // 将该任务推入pool并发池中
    console.log(`任务 ${task} 开始，当前并发数：${this.pool.length}`);
    task.then((res) => {
      // 请求结束后将该Promise任务从并发池中移除
      this.pool.splice(this.pool.indexOf(task), 1);
      console.log(`任务 ${task} 结束，当前并发数：${this.pool.length}`);
    });
  }
}
```



**前端路由原理**

hash模式和history模式原理

**Vue的生命周期**

**详细讲下每个钩子函数干了什么**

**keep-live原理** 缓存了虚拟dom

- 原理：在create钩子函数调用时将需要缓存的VNode节点保存在cache中，在 render（页面渲染） 时，如果 VNode 的 name 符合缓存条件（可以用 include 以及 exclude 控制），则会从 this.cache 中取出之前缓存的 VNode 实例进行渲染。

**使用**

1. 缓存所有页面

   ```vue
   <template>
     <div id="app">
     	<keep-alive>
         <router-view/>
       </keep-alive>
     </div>
   </template>
   ```

2. 根据条件缓存页面

   ```vue
   <template>
     <div id="app">
     	// 1. 将缓存 name 为 test 的组件
     	<keep-alive include='test'>
         <router-view/>
       </keep-alive>
   	
   	// 2. 将缓存 name 为 a 或者 b 的组件，结合动态组件使用
   	<keep-alive include='a,b'>
     	  <router-view/>
   	</keep-alive>
   	
   	// 3. 使用正则表达式，需使用 v-bind
   	<keep-alive :include='/a|b/'>
     	  <router-view/>
   	</keep-alive>	
   	
   	// 5.动态判断
   	<keep-alive :include='includedComponents'>
     	  <router-view/>
   	</keep-alive>
   	
   	// 5. 将不缓存 name 为 test 的组件
   	<keep-alive exclude='test'>
     	  <router-view/>
   	</keep-alive>
     </div>
   </template>
   ```

3. 结合Vue-Router的路由元信息，缓存组件

   - router目录的index.js

     ```javascript
     meta: {
        keepAlive: true
     }
     ```

   - App.vue文件

     ```vuevue
     <keep-alive> 
       <router-view v-if="$route.meta.keepAlive"></router-view>
     </keep-alive>
     ```

     

**Vue操作DOM**

$refs 

**模板编译在哪个生命周期**

mount阶段执行了compile方法将template里面的内容转化成真正的HTML代码

## 二面

**最喜欢大学的哪门课**

**千分位函数**

```javascript
function format(nums) {
  nums = nums + "";
  let temp = [],
    flag = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    temp.unshift(nums[i]);
    flag++;
    if (flag % 3 === 0 && i != 0) {
      temp.unshift(",");
    }
  }
  return temp.join("");
}
```



**URL解析函数**

```javascript
function parseURL(url) {
  url = decodeURI(url);
  let params = url.slice(url.indexOf("?") + 1).split("&");
  let res = {};
  for (const item of params) {
    let curParams = item.split("=");
    res[curParams[0]] = curParams[1];
  }
  return res;
}
```

**以下代码a，b分别是什么，为什么**

```javascript
var a = {k1: 1}
var b = a
a.k3 = a = {k2: 2}  
// a{k2:2} b{k1:1, k3:{k2:2}}
```

**flex布局**

**flex-grow属性**
flex-grow属性定义项目的放大比例，默认值为0，即如果存在剩余空间，也不放大
一个数字，规定项目将相对于其他灵活的项目进行扩展的量。

**CSS画九宫格**

**块级元素和行内元素，并列举一些**
块： div p h1-h6 ui li form table
行： img input a span label br

**去除inline-block元素间距**
  <a>1</a><a>1</a>
  margin-left:负值
  设置父元素font-size:0

1. **移除空格**

   ```html
   // 1
   <div>
     <a href="">
     链接1</a><a href="">
     链接2</a><a href="">
     链接3</a><a href="">
     链接4</a>
   </div>
   // 2
   <div>
     <a href="">链接1</a
     ><a href="">链接2</a
     ><a href="">链接3</a
     ><a href="">链接4</a>
   </div>
   // 3
   <div>
     <a href="">链接1</a><!--
     --><a href="">链接2</a><!--
     --><a href="">链接3</a><!--
     --><a href="">链接4</a>
   </div>
   ```

2. 设置父元素font-size:0

3. 使用letter-spacing

   ```html
   <style>
     div {
       letter-spacing: -5px;
     }
     a {
       letter-spacing: 0;
       background: pink;
     }
   </style>
   <div>
     <a href="">链接1</a>
     <a href="">链接2</a>
     <a href="">链接3</a>
     <a href="">链接4</a>
   </div>
   ```

   

**display的属性**
flex block inline-block

**PC端扫码登陆方案，并需要传递哪些信息**

**webSocket和轮询的比较**

**webSocket安全问题**
  - CSFR{跨站点请求伪造(Cross—Site Request Forgery)} 
    解决：1)http refere字段 2)链接地址带token 3)http头自定义属性携带token 

1. 没有法规的认证
WebSocket 协议没有规定服务器在握手阶段应该如何认证客户端身份。服务器可以采用任何 HTTP 服务器的客户端身份认证机制，如 cookie认证，HTTP 基础认证，TLS 身份认证等。在WebSocket应用认证实现上面临的安全问题和传统的Web应用认证是相同的，如：CVE-2015-0201, Spring框架的Java SockJS客户端生成可预测的会话ID，攻击者可利用该漏洞向其他会话发送消息; CVE-2015-1482, Ansible Tower未对用户身份进行认证，远程攻击者通过websocket连接获取敏感信息。
2. 没有规定授权
同认证一样，WebSocket协议没有指定任何授权方式，应用程序中用户资源访问等的授权策略由服务端或开发者实现。WebSocket应用也会存在和传统Web应用相同的安全风险，如：垂直权限提升和水平权限提升。
3. 跨站web劫持 CSWSH (Cross Site WebSocket Hijacking)
没有校验HTTP头的Origin字段 谁都能建立Websocket连接
WebSocket使用基于源的安全模型，在发起WebSocket握手请求时，浏览器会在请求中添加一个名为Origin的HTTP头，检查Oringin字段表示发起请求的源，以此来防止未经授权的跨站点访问请求。
Origin 仍然是不够安全的，恶意网页可以伪造Origin头信息，绕过服务端对Origin头的检查，更完善的解决方案可以借鉴CSRF的解决方案-令牌机制。
4. 拒绝服务
(1). 客户端拒绝服务
WebSocket连接限制不同于HTTP连接限制，和HTTP相比，WebSocket有一个更高的连接限制，不同的浏览器有自己特定的最大连接数,如：火狐浏览器默认最大连接数为200。通过发送恶意内容，用尽允许的所有Websocket连接耗尽浏览器资源，引起拒绝服务
(2). 服务器端拒绝服务
WebSocket建立的是持久连接，只有客户端或服务端其中一发提出关闭连接的请求，WebSocket连接才关闭，因此攻击者可以向服务器发起大量的申请建立WebSocket连接的请求，建立持久连接，耗尽服务器资源，引发拒绝服务。针对这种攻，可以通过设置单IP可建立连接的最大连接数的方式防范。攻击者还可以通过发送一个单一的庞大的数据帧(如, 2^16)，或者发送一个长流的分片消息的小帧，来耗尽服务器的内存，引发拒绝服务攻击, 针对这种攻击，通过限制帧大小和多个帧重组后的总消息大小的方式防范。
5. 输入校验
WebSocket应用和传统Web应用一样，都需要对输入进行校验，来防范来客户端的XSS攻击，服务端的SQL注入，代码注入等攻击。

**web安全**
- XSS 执行恶意脚本(跨域或同域)，从而拿到用户的信息并进行操作
  1. 千万不要相信任何用户的输入,无论是在前端还是服务端，都要对用户的数据进行转码或者过滤
  2. 利用 CSP(浏览器内容安全策略)，核心思想是服务器决定浏览器加载渲染哪些内容,限制其他域下的资源加载,禁止向其他域提交数据,提供上报机制，及时发现 XSS 攻击
  3. 利用 HttpOnly,设置 Cookie 的 HttpOnly 之后，JS 无法读取 Cookie
- CFRS 诱导用户进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求，利用用户目前的登录状态发起跨站请求
- 点击劫持 
  点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。实际上是点击了目标网站的按钮
  ## 解决： 不允许展示ifram 
    1. http头 X-FRAME-OPTIONS:DENY 
    2. JavaScript防御 当通过 iframe 的方式加载页面时，攻击者的网页直接不显示所有内容了。
- URL跳转漏洞 看似安全连接，实则跳转到恶意网站
- SQL注入 
  SQL注入的本质:数据和代码未分离，即数据当做了代码来执行。
  ## 解决：
    1. 严格限制Web应用的数据库的操作权限，给此用户提供仅仅能够满足其工作的最低权限，从而最大限度的减少注入攻击对数据库的危害
    2. 后端代码检查输入的数据是否符合预期，严格限制变量的类型
    3. 对进入数据库的特殊字符（'，"，，<，>，&，*，; 等）进行转义处理，或编码转换。
    4. 所有的查询语句建议使用数据库提供的参数化查询接口，参数化的语句使用参数而不是将用户输入变量嵌入到 SQL 语句中，即不要直接拼接 SQL 语句
- OS命令注入攻击
  OS命令注入是针对操作系统的
  const exec = require('mz/child_process').exec;
  let params = {/* 用户输入的参数 */};
  exec(`git clone ${params.repo} /some/path`);
  ## 防御
    1. 后端对前端提交内容进行规则限制（比如正则表达式）。
    2. 在调用系统命令前对所有传入参数进行命令行参数转义过滤。
    3. 不要直接拼接命令语句，借助一些工具做拼接、转义预处理，例如 Node.js 的 shell-escape npm包

**项目亮点**

**自己的优点和缺点**



**个人感受及一些小建议**

面试官不会的会引导，然后自己也要引导面试官朝自己熟悉的方向引，不会的思考一下再说，回答任何问题的时候尽量结合自己的项目回答，类似于：这个东西，我之前做过相关的demo，里面用到了这个啥啥啥的，平时学习或者看面试题尽量深入一些，不能太浅，面试官会问到你不会为止。