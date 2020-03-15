'use strict'
var foo = {
    value:1,
    bar:function(){
        console.log(this.value)
    }
}

const a = foo.bar;
a(); // 普通函数运行，所以this 又指向全局对象global .value 没找到
     // 严格模式下 this 指向 undefined 不能点操作 会报错