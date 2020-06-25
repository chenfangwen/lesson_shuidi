# async await 的实现
## 一、前言
>我们经常会在编程时遇到异步的需求，`异步`，就是说一个任务不是可以连续完成，他需要被分成先后执行，先执行一部分，然后程序可以转执行别的任务，待执行完了前一部分，在回头执行后一部分，那么我们曾经使用的哪些方法实现过呢，这里我们介绍一下：

    1.回调函数
    2.Promise
    3.async await

## 1. 回调函数
举一个例子：我们对一个文件的读取和修改操作


```js
fs.readFile('./ziyi.text', (content) => {
  setTimeout(() => {
    content += '123';
    fs.append('./ziyi.text', content, (err) => {
        ......
    })
  }, 3000)
})

```
这里我们通过回调函数，可以在读取文件三秒后，进行文件内容的修改，在回调里面又有回调实现异步，但是这就陷入了`回调地狱`，所以我们后面异步的实现就出现了链式调用的`Promise`
## 2. Promise

```js
Promise('./ziyi.text')
.then(() => {
  content += '123';
})
.then(() => {
  fs.append('./ziyi.text')
})
.then()
......
```
这样链式调用看上去我们的代码就像串联一样，不再是多个回调函数嵌套时，Promise虽然跳出了异步嵌套的怪圈，用链式表达更加清晰，但是我们也发现如果有大量的异步请求的时候，流程复杂的情况下，会发现充满了屏幕的then，看起来非常吃力，而ES7的`Async/Await`的出现就是为了解决这种复杂的情况。。
## 3. async

```js
async () => {
  let c = await fs.readFile('./ziyi.text')
  c += '123';
  let res = await fs.append('./ziyi.text', c);
}

```
这样我们的代码阅读起来就很清晰了，每一步做的事都简介明了，其实，在Promise到async之前，作者`TJ`写了一的`Co`的库优化了Promise写法，这个优化使用了es6里`Generator`，大概的写法如下：`yield`表示暂停，看上去是不是和我们现在用的async await很像

```js
co(
  function * test() {
    let c = yield fs.readFile('./ziyi.text');
    c += '123';
    let res = yield fs.append('./ziyi.text', c);
  }
)

```

## 二、 Generator(生成器)
>`generator`（生成器）是ES6标准引入的新的数据类型。一个generator看上去像一个函数，但可以返回多次。

之前的Promise恢复了异步回调的可信任性，而generator正是以一种看似顺序、同步的方式实现了异步控制流程，增强了代码可读性。

generator和函数不同的是，generator由function*定义，并且，除了return语句，还可以用yield返回多次。它的执行由next()方法来一步一步执行

举个例子：
#### 1. 手动一步一步执行

```js
function foo() {
  // setTimeout(() => {
  //   console.log(1);
  // }, 2000)
  // return 'foo';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(123);
    }, 2000)
  })
}
function* test() {      //generator
      console.log('start');
      let a = yield foo();  // 赋值语句从右往左<——，所以执行到foo()会停止
      
      console.log('middle')
      let b = yield 2;
      
      console.log('end');
    }
    let g = test();
    console.log(g)
    console.log(g.next());  //执行第一部分，代码开始到第一个yield
```



![](https://user-gold-cdn.xitu.io/2020/4/8/1715702a2dd6f554?w=871&h=504&f=png&s=53637)
`let g = test();`
我们先把text()执行结果拿到，在它上面由next()方法执行generator里的代码

`g.next()`
通过第一次调用next，我们执行到了foo()，g.next()返回的对象key由value和done,value为yield 后面的内容，done表示是否还有next可以执行，这里done为false,则generator未执行完

```js
function* test() {
      console.log('start');
      let a = yield foo(); 
      console.log('a', a);
      let b = yield 2;
      console.log('b', b);
      console.log('end');
    }
    let g = test();
    console.log(g)
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
```



![](https://user-gold-cdn.xitu.io/2020/4/7/171543042657ad10?w=821&h=301&f=png&s=22770)同理，我们把后面两步也执行，这时我们的generator就执行完了。

但是我们的a,b 未被赋到值,generator规定在`next()`方法传参可以给上一个(注意是上一个)yield返回值，代码如下

```js
console.log(g.next());
console.log(g.next('A_value'));   
console.log(g.next('B_value'));   
```

![](https://user-gold-cdn.xitu.io/2020/4/7/1715435bb3d4eb1d?w=782&h=92&f=png&s=7888)
赋值成功,a、b虽然被赋值了，但是这样的赋值是不对的，我们应该将yield后面的foo()和2给a,b。
```js
console.log(g.next());
console.log(g.next(foo()));   
console.log(g.next(2));   
```

![](https://user-gold-cdn.xitu.io/2020/4/8/1715726b7c914fdb?w=802&h=144&f=png&s=11656)



#### 2. 实现一个方法来自动全部执行


```js

function generateAutoRun(gen) {
  let g = gen();
  function next(value) {
    let res = g.next(value);    //执行next()
    if (res.done) return;   //结束
    next(res.value);    //从第二个next开始，给上一个的yield返回值
  }
  next();
}
generateAutoRun(test);
```

![](https://user-gold-cdn.xitu.io/2020/4/7/171543b34fa1224e?w=821&h=150&f=png&s=10240)
在赋值时，我们把上一个上一个next()对象的`value`值给yield的返回，这样a就返回了foo()执行的结果，b就为2。

介绍完了generator，我们就可可以用它来实现一下我们async了

## 三、 用Generator实现async
我们定义两个异步的 `Promise`先后执行

```js
let p1 = new Promise((resolve) => {
  console.log('p1先');
  setTimeout(() => {
    console.log(1);
    resolve(1)
  }, 2000)
})
let p2 = new Promise((resolve) => {
  console.log('p2后');
  setTimeout(() => {
    console.log(2);
    resolve(2)
  }, 1000)
})

function* test() {
  let a = yield p1;
  console.log(a,'a---')
  let b = yield p2;
  console.log(b,('b---'));
}
```
这时我们就要实现p1，p2的先后执行了

```js
function asyncTogenerate(gen) {
  let g = gen();
  function step(value) {    //递归调用next
    // 处理 yield 返回值问题
    let info = g.next(value);  //一步一步执行p1,p2，并给a,b 赋值p1,p2
    if (info.done) {   //执行完return掉
      return;
    } else {
      // 把 yield 后面的东西(info.value) 直接 resolve，传给下一个step，给a,b赋值
      Promise.resolve(info.value).then((res) => {
        // 下一个 yield 下一个 递归
        step(res); 
      })
    }
  }
  step();  //递归开始
}
asyncTogenerate(test);
```
Promise的`then`方法，可以保证先后执行,所以我们上面代码给每一个yield返回的值进行Promise包装一下


```js
Promise.resolve(info.value).then((res) => {  //把value包装，使用它的then方法异步执行
```
看结果

![](https://user-gold-cdn.xitu.io/2020/4/8/171575767c305a1e?w=850&h=151&f=png&s=6849)

正如我们想要的一样，p1先执行，然后再是p2,输出结果也没问题，因为p1是1秒后执行，p2是2秒后执行，所以先输出2，再输出1。

a为p1返回的1，,b为p2返回的2,赋值也没有错误。

## 四、 总结
我们常说什么`async/await`的出现淘汰了`Promise`，可以说是大错特错，恰恰相反，上面的例子说明，正因为有了Promise，才有了改良版的async/await，两者是可以相辅相成的

所以我们想学好async/await，应该先去了解
[Promise](https://user-gold-cdn.xitu.io/2020/4/8/171576aa0eacc5d1)


