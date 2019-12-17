// bar 运行 内部this指向foo
// bar.call 函数即对象
// bar.call(foo);
'use strict';
var foo = {
    value:1
}
Function.prototype.call2 = function(a) {
    // 1.把原来函数执行
    // 2.把内部的this指针指向a
    a.fn = this;
    a.fn();    //运行时this指向了a
    // this()
}

function bar(){
    // console.log('asfd')
    console.log(this.value);
}
bar.call2(foo);