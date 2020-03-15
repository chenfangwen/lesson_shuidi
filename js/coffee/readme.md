- talk in js
泡一杯咖啡？
编程时有规则的
结果？
类 对象 
new Coffee()
- js 中构建一个类 不用class 关键字(es5)
  function Coffee(){    //首字母大写的函数就是类

  }
  new 将我们的显示思维和代码规则结合 将情商发挥出来
- 把水煮沸   动作    （类）上下文之中  方法 
- 用沸水冲咖啡
- 把咖啡倒进杯子
- 加糖和牛奶

类 是抽象概念 不是用来运行的 对象是内存变量，new 出来的 调用方法 
构造函数 constructor
function Coffee(){    
    //构造函数
  }
  Coffee.prototype.addSugarAndMilk = function(){}

- 每次调用咖啡是时候，都要对类的步骤很清楚，加大了类的使用难度
- 面对对象
  类的设计者架构师 和类的使用者不一样

- 茶的类设计
  - 把水煮沸 boilWater
  - 用沸水浸泡茶叶  speedTeaBag
  - 把茶水倒进杯子  pourInCup
  - 加柠檬  addLemon

咖啡 茶 饮料 继承
祖先类，父类 ？

    共同点      不同点
    boilWater   
    用沸水      茶叶 咖啡
    方法        重写


- js的继承关系不具备血缘关系
    Coffee.prototype = new Beverage(); //原型关系