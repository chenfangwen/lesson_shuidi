- 首先必须要说的是，this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象


call,apply,bind 
作用:   改变this指向
1. 代码复用 ,将js的api借来使用
2. 判断类型 object.prototype.toString.call()
3. 数组的最大值 
var max = Math.max.apply(null,arr);
4. 继承