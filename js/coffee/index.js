// 1.构建一个kCoffee类
// js 面对对象比较特别
var Coffee = function(){//匿名 值是函数
    console.log("开始给您泡制咖啡，请等等");
};
Coffee.prototype.boilWater = function(){
    console.log('把水煮沸');
}
Coffee.prototype.brewCoffeeGriends = function(){
    console.log('用沸水冲泡咖啡');
}
Coffee.prototype.pourIncup = function(){
    console.log('把咖啡倒进杯子');
}
//在类的原型上添加方法
Coffee.prototype.addSugarAndMilk = function(){
    console.log('加糖和牛奶');
}
//抽象 隐去一些细节
Coffee.prototype.makeCoffee = function(){
    this.boilWater();
    this.brewCoffeeGriends();
    this.pourIncup();
    this.addSugarAndMilk();
    console.log('你的咖啡好了！\n');
}
var coffee = new Coffee();
coffee.makeCoffee();

// console.log(coffee);
// console.log(Coffee)
function Tea(type){
    //茶类
    this.type = type;
    console.log("开始给您泡茶，请等等");
} 
Tea.prototype.boilWater = function(){
    console.log('把水煮沸');
}
Tea.prototype.speedTeaBag = function(){
    console.log('用沸水浸泡茶叶');
}
Tea.prototype.pourInCup = function(){
    console.log('把茶水倒进杯子');
}
Tea.prototype.addLemon = function(){
    console.log('加柠檬');
}
Tea.prototype.makeTea = function(){
    //this 指向类实例化的对象
    this.boilWater();
    this.speedTeaBag();
    this.pourInCup();
    this.addLemon();
    console.log('你的茶好了！');
}
const tea = new Tea('观音');
tea.makeTea();
console.log(tea.type);
