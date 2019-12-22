- this 是有原则的
1. 普通函数被调用 this 指向window/global
2.方法作为对象执行时 this指向 对象
'use strict' 严格模式下为undefined
- call 手动指顶函数运行时的this 并将函数运行
bar.call(foo)
- bar.call
函数是对象 可以点
手写一个call