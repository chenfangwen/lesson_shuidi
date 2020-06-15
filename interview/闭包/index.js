
// function f1() {
//     let private = 999;
//     function getPrivate() {
//         return private;
//     }
//     return {
//         getPrivate
//     }
// }
// var result = f1();
// console.log(result.getPrivate())


var p1 = "ss";
var p2 = "jj";
function testSetTime(para1,para2){
    return function(){
        //内部变量
        console.log(para1 + "-" + para2);
    }
}
var test = testSetTime(p1, p2);
// 回调可以调用另一个函数来返回一个内部函数的调用，将那个内部函数对象的引用传递给setTimeout函数。
// 内部函数执行时需要的参数，在调用外部函数时传递给它。setTimeout在执行内部函数时无需传递参数，
// 因为内部函数仍然能够访问外部函数调用时提供的参数
setTimeout(test, 1000);

setTimeout(function(){
    console.log(p1 + "-" + p2)
},1000)

// 代码模块化
var singleton = function () {
    var privateVariable; //私有变量
    function privateFunction(x) {  //私有函数
        // ...privateVariable...
        console.log('私有函数')
    }
 
    return {
        firstMethod: function (a, b) {
            // ...privateVariable...
            return privateVariable
        },
        secondMethod: function (c) {
            // ...privateFunction()...
            return privateFunction
        }
    };
}();

//单例模式
var Singleton = (function () {
    var instance;
    function createInstance() {
        return new Object("I am the instance");
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
var instance1 = Singleton.getInstance();
var instance2 = Singleton.getInstance();

console.log("Same instance? " + (instance1 === instance2));  

// clear自身定时器
var id = setInterval(function () {//闭包
    if (s === 0) {
        console.log('结束定时器')
        clearInterval(id)
    }
}, 1000)


function bibao() {
    var a = 1;
    function set (v) {
        a = v;
    }
    function get () {
        console.log(a)
    }
    return {
        set,
        get
    }
}
let instance = bibao()
instance.set(2)
instance.get()
let instance2 = bibao()
instance2.set(2)
instance2.get()