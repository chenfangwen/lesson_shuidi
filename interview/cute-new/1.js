// var _new = function() {
//     let constructor = Array.prototype.shift.call(arguments)
//     let args = arguments
//     const obj = new Object()
//     obj.__proto__ = constructor.prototype
//     constructor.call(obj, ...args)
//     return obj
// }

function newOperator(ctor){
    if(typeof ctor !== 'function'){
      throw 'newOperator function the first param must be a function';
    }
    newOperator.target = ctor;
    var newObj = Object.create(ctor.prototype);
    var argsArr = [].slice.call(arguments, 1);
    var ctorReturnResult = ctor.apply(newObj, argsArr);
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction){
        return ctorReturnResult;
    }
    return newObj;
}

function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);      //obj.__proto__ = fn.prototype
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}

function A() {
    this.name = 'cfw';
}
A.prototype.print = function () {
    console.log('i m ' + this.name)
}


let a = _new(A)
a.print()
console.log(a)

let b = newOperator(A)
// b.print()
// console.log(b)
