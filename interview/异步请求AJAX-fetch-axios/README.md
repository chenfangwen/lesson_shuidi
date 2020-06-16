                                    Ajax
## Ajax的核心是JavaScript对象XmlHttpRequest (ie7,8 是ActiveXObject)。
XmlHttpRequest 在Internet Explorer 5中首次引入，
它是一种支持异步请求的技术**因为请求交给了网络进程，js引擎继续工作**。简而言之，XmlHttpRequest使您可以使用JavaScript向服务器提出请求并处理响应，而不阻塞用户。通过XMLHttpRequest对象，Web开发人员可以在页面加载以后进行页面的**局部更新**

- 一次ajax请求, **并非所有的部分都是异步的**, 至少"readyState==1"的 onreadystatechange 回调以及 onloadstart 回调就是同步执行的.

- XmlHttpRequest 方法
1. open()：该方法创建http请求
    第一个参数是指定提交方式(post、get)
    第二个参数是指定要提交的地址是哪
    第三个参数是指定是异步还是同步(true表示异步，false表示同步)
    第四和第五参数在http认证的时候会用到。是可选的
2. setRequestHeader(String header,String value)：设置消息头（使用post方式才会使用到，get方法并不需要调用该方法）
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");

3. send(content)：发送请求给服务器
如果是get方式，并不需要填写参数，或填写null
如果是post方式，把要提交的参数写上去

- 属性
onreadystatechange：请求状态改变的事件触发器（readyState变化时会调用此方法），一般用于指定回调函数
readyState：请求状态readyState一改变，回调函数被调用，它有5个状态
    0：未初始化
    1：open方法成功调用以后
    2：服务器已经应答客户端的请求
    3：交互中。Http头信息已经接收，响应数据尚未接收。
    4：完成。数据接收完成
responseText：服务器返回的文本内容
responseXML：服务器返回的兼容DOM的XML内容
status：服务器返回的状态码(200 - 299成功、404等) 
statusText：服务器返回状态码的文本信息

## AJAX实现流程
(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象.
(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息.
(3)设置响应HTTP请求状态变化的函数.
(4)发送HTTP请求.
(5)获取异步调用返回的数据.
(6)使用JavaScript和DOM实现局部刷新.

## 优缺点
优点：

1、最大的一点是页面局部刷新，用户的体验非常好。
2、使用异步方式与服务器通信，具有更加迅速的响应能力。
3、可以把以前一些服务器负担的工作转嫁到客户端，利用客户端闲置的能力来处理，减轻服务器和带宽的负担，节约空间和宽带租用成本。并且减轻服务器的负担，ajax的原则是“按需取数据”，可以最大程度的减少冗余请求，和响应对服务器造成的负担。
4、基于标准化的并被广泛支持的技术，不需要下载插件或者小程序。

缺点：

1、ajax不支持浏览器back按钮。
2、安全问题 AJAX暴露了与服务器交互的细节。
3、对搜索引擎的支持比较弱。
4、破坏了程序的异常机制。
5、不容易调试。

## jquery 封装jquery ajax
// 原生XHR
var xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)   // 从服务器获取数据
    }
}
xhr.send()

//jquery
$.ajax({
    type: 'POST',
    url: url,
    data: data,
    dataType: dataType,
    success: function() {},
    error: function() {}
})

                                fetch
- fetch的API是基于Promise设计的，旧版本的浏览器不支持Promise，需要使用polyfill(垫片) es6-promis
  fetch不是ajax的进一步封装，而是原生js。
fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json();// == JSON.parse()
        }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))

- 即使该 HTTP 响应的状态码是 404 或 500,不reject。它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ）， 仅当网络故障时或请求被阻止时，才会标记为 reject。

- fetch 搭配上async/await将会让我们的异步代码更加优雅：
async function test() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
}
但是async/await是ES7的API，目前还在试验阶段，还需要我们使用babel进行转译成ES5代码。

- 由于fetch是比较底层的API，所以需要我们手动将参数拼接成'name=test'的格式，而jquery ajax已经封装好了。所以fetch并不是开箱即用的。
fetch(url, {
    method: 'POST',
    body: Object.keys({name: 'test'}).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
    }).join('&')
})

- fetch还不支持超时控制。 
**不太好用**

                                    axios
- 也是对XHR的封装
    可以在node.js中使用
    提供了并发请求的接口
    支持Promise API

// 简单使用
axios({
    method: 'GET',
    url: url,
})
.then(res => {console.log(res)})
.catch(err => {console.log(err)})
// 多个请求并发
function getUserAccount() {
  return axios.get('/a/12345');
}

function getUserPermissions() {
  return axios.get('/a/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread((acct, perms) => {
    // Both requests are now complete
  }))