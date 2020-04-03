function Animal(name, color) {
    this.name = name;
    this.color = color;
}
Animal.prototype.say = function () {
    return `I'm a ${this.color} ${this.name}`;
};

Function.prototype.myBind = function(thisObj, ...arg1) {
    // 1
    // 谁调用 bind，最终拼好的参数传给谁
    let fn = this;
    function foo(...arg2) {
      // 2
        const args = arg1.concat(arg2);
        // 调用了，考虑 this
        // fn 调用完了 有 结果返回，
        return fn.apply(thisObj, args);
    }
    return foo
}

const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
// cat 
if (cat.say() === 'I\'m a white cat' && cat instanceof Cat && cat instanceof Animal) {
    console.log('success');
}