function Person(name,age){
    this.name = name;
    this.age = age;
}
//覆盖率原有的toString方法
Person.prototype.toString = function(){
    return 'I am a Person,my name is' + this.name;
}
    
function Man(name,age){
    console.log(arguments,'-----');  //arguments 是参数
    Person.apply(this,arguments);   //Person 构造函数 把父类构造函数继承一下
}
Man.prototype = Object.create(Person.prototype)   //方法继承
Man.prototype.toString = function(){
    return 'my name is '+ this.name; 
}
var cxc =new Man('陈初心',19);
console.log(cxc + "");
// console.log(cxc.name);

var person = new Person('黄梅',19);
console.log(person + ""); //person转化为字符串，自动调用toString方法

// const arr = ['陈初心','无敌']
// console.log(Object.prototype.toString.call(arr))