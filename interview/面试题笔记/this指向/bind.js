Function.prototype.myBind = function (objThis, ...params) { // 先传一部分参数
    const thisFn = this; //  存储源函数的this
    let fToBind = function (...secondParams) { //  最后还是要执行的
        const isNew = this instanceof fToBind // new 调用 this指向实例, 函数调用this指向objThis
        const context = isNew ? this : Object(objThis); // this 覆盖为上下文对象
        return thisFn.call(context, ...params, ...secondParams); // 
    }
    if (thisFn.prototype) {
        fToBind.prototype = Object.create(thisFn.prototype);
    }

    return fToBind;
}

function foo(name) {
    this.name = name;
}
var obj = {};
var bar = foo.myBind(obj);
bar('Jack');
console.log(obj.name);  // Jack
var alice = new bar('Alice');
console.log(obj.name);  // Jack
console.log(alice.name);    // Alice