## Module模式    --闭包
在模块化规范形成之前，JS开发者使用Module设计模式来解决JS全局作用域的污染问题。Module模式最初被定义为一种在传统软件工程中为类提供私有和公有封装的方法。在JavaScript中，Module模式使用匿名函数自调用 (闭包)来封装，通过自定义暴露行为来区分私有成员和公有成员。

let myModule = (function (window) {
    let moduleName = 'module'  // private
    // public
    function setModuleName(name) {
      moduleName = name
    }
    // public
    function getModuleName() {
      return moduleName
    }
    return { setModuleName, getModuleName }  // 暴露行为
  })(window)
上面例子是Module模式的一种写法，它通过闭包的特性打开了一个新的作用域，缓解了全局作用域命名冲突和安全性的问题。但是，开发者并不能够用它来组织和拆分代码，于是乎便出现了以此为基石的模块化规范。

## 模块化规化
## CommonJS
CommonJS主要用在Node开发上，每个文件就是一个模块，没个文件都有自己的一个作用域。通过module.exports暴露public成员。例如：

// 文件名：x.js
let x = 1;
function add() {
  x += 1;
  return x;
}
module.exports.x = x;
module.exports.add = add;
此外，CommonJS通过require()引入模块依赖，require函数可以引入Node的内置模块、自定义模块和npm等第三方模块。

// 文件名：main.js
let xm = require('./x.js');
console.log(xm.x);  // 1
console.log(xm.add());  // 2
console.log(xm.x);   // 1
从上面代码我们可以看出，require函数同步加载了x.js，并且返回了module.exports输出字面量的拷贝值。可能有人会问module.exports.x = x;不是赋值吗，怎么肥事呢？我们说，Module模式是模块化规范的基石，CommonJS也是对Module模式的一种封装。我们完全可以用Module模式来实现上面的代码效果：

let xModule = (function (){
  let x = 1;
  function add() {
    x += 1;
    return x;
  }
  return { x, add };
})();
let xm = xModule;
console.log(xm.x);  // 1
console.log(xm.add());  // 2
console.log(xm.x);   // 1
通过Module模式模拟的CommonJS原理，我们就可以很好的解释CommonJS的特性了。因为CommonJS需要通过赋值的方式来获取匿名函数自调用的返回值，所以require函数在加载模块是同步的。然而CommonJS模块的加载机制局限了CommonJS在客户端上的使用，因为通过HTTP同步加载CommonJS模块是非常耗时的。

## AMD和CMD
1.  AMD
// 定义AMD规范的模块
define([function() {
  return 模块
})
区别于CommonJS，AMD规范的被依赖模块是异步加载的，而定义的模块是被当作回调函数来执行的，依赖于require.js模块管理工具库。当然，AMD规范不是采用匿名函数自调用的方式来封装，我们依然可以利用闭包的原理来实现模块的私有成员和公有成员：

define(['module1', 'module2'], function(m1, m2) {
  let x = 1;
  function add() {
    x += 1;
    return x;
  }
  return { add };
})
2.  CMD
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。AMD 推崇依赖前置，CMD 推崇依赖就近。

define(function(require, exports, module) {
  //  同步加载模块
  var a = require('./a');
  a.doSomething();
  // 异步加载一个模块，在加载完成时，执行回调
  require.async(['./b'], function(b) {
    b.doSomething();
  });
  // 对外暴露成员
  exports.doSomething = function() {};
});
// 使用模块
seajs.use('path');
CMD集成了CommonJS和AMD的的特点，支持同步和异步加载模块。CMD加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到require语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的。因此，在CMD中require函数同步加载模块时没有HTTP请求过程。

## ES6 module
ES6的模块化已经不是规范了，而是JS语言的特性。随着ES6的推出，AMD和CMD也随之成为了历史。ES6模块与模块化规范相比，有两大特点：

模块化规范输出的是一个值的拷贝，ES6 模块输出的是值的引用。
模块化规范是运行时加载，ES6 模块是编译时输出接口。
模块化规范输出的是一个对象，该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，ES6 module 是一个多对象输出，多对象加载的模型。从原理上来说，模块化规范是匿名函数自调用的封装，而ES6 module则是用匿名函数自调用去调用输出的成员。两者的区别可参考Babel and CommonJS modules。
