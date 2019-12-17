'use strict' //严格模式
var foo = {    
    value:1
}

function bar() {
    console.log(this);
    console.log(this.value);
}
bar.prototype.call=function(a){
    this=a;
}
//call() 指明函数this指向第一个参数
bar.call(foo);
bar(); //this跟函数运行函数相关
//普通函数下this 指向全局 global window
//严格模式下，普通函数下this undefined
