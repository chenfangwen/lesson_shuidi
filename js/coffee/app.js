// 咖啡和茶的基类

function Beverge (){
    
}
Beverge.prototype.boilWater = function(){
    console.log('把水煮沸');
}
Beverge.prototype.brew = function(){
    //空着
}
Beverge.prototype.pourInCup = function(){}
Beverge.prototype.addCondiments = function(){}
Beverge.prototype.make = function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
}
var  Coffee = function() {}
Coffee.prototype = new Beverge();       //继承原型对象Beverge
Coffee.prototype.brew = function(){
    console.log('用沸水冲泡');
}
Coffee.prototype.pourInCup = function(){
    console.log('把咖啡倒入水杯');
}
Coffee.prototype.addCondiments = function(){
    console.log('加糖和牛奶');
}
var coffee = new Coffee();
coffee.make();
