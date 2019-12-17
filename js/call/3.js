function Person(name) {
    this.name = name;
}
Person.prototype.getName = function() {
    console.log(this.name)
}
//未创建对象之前 this 指向全局global / window
const qin = new Person('琴'); 
console.log(qin.getName());
console.log(Person.prototype.constructor)    //构造函数
console.log(qin.__proto__,Person.prototype,qin.__proto__===Person.prototype);
