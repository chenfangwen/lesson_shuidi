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
    var context = a || window;
    var args = [];
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    // console.log(args)

    context.fn = this;
    // context.fn();    
    console.log('context.fn(' + args + ')')
    const result = eval('context.fn(' + args + ')');//运行时this指向了a
    delete context.fn;
    return result;
}

function bar(name, age){
    // console.log('asfd')
    console.log(this.value + name + age);
}
bar.call2(foo, 'hhhh', 2);

Function.prototype.apply2 = function(a, arr) {
    var context = a || window;
    var context = a || window;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for(var i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return result;
}

bar.apply2(foo, ['sdasdas'])

const newBar = bar.bind(foo, 'jjjj');
newBar('llll');

function Person(name){
    this.name = name;
    this.say = function(){
      setTimeout(function(){
        console.log("hello " + this.name);
      }.bind(this),1000)
    }
}
var person = new Person("axuebin");
person.say(); //hello undefined


function curry(fn) {
    const arg = [].slice.call(arguments, 1);
    return function() {
        const newArg = arg.concat([].slice.call(arguments));
        return fn.apply(this, newArg);
    }
}
function add(a, b) {
    return a + b;
}
const addCurry = curry(add, 1);
console.log(addCurry(2));