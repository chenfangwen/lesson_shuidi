                        ES6语法
1. ES5和ES6声明变量的方式对比
ES5中声明变量的方式：

//1.通过var声明
var num;

//2.函数方式声明
function fn(num){ return num; }
fn(10);
ES6中声明变量的方式：

//1.使用let声明
let a = 10;

//2.使用const声明
const name = "小红";
2. var ，let ， const 的区别：
不存在变量提升

var 命令会发生变量提升现象，即变量可以在声明之前使用，值为undefined。
let 和 const 则没有变量声明提升的功能，必须要先声明才能使用
不允许重复声明

var命令能重复声明，后者覆盖前者
let 和 const不允许在相同作用域内，重复声明同一个变量
作用域

var 的作用域是以函数为界限
let 和 const 的作用域是块作用域，块级作用域指 { } 内的范围
var 可以定义全局变量和局部变量，let 和 const 只能定义局部变量
const 的声明的常量不能被修改，但对于引用类型来说，堆内存中的值是可以被改变的。
变量作为全局属性

定义的变量会作为window对象的属性，let不会
常量定义的引用类型可以修改，如：

        //1.使用常量定义数组
        const arr = [100, 200, 300];
        console.log(arr);

        arr[0] = "hello";
        console.log(arr);   //['hello', 200, 300]

        //2.使用常量来定义对象
        const obj = {
            name: "Jack",
            age: 22,
            no: "001"
        }
        console.log(obj);

        obj.age = 100;
        console.log(obj);   //{name: "Jack", age: 100,  no: "001"}
3. 暂时性死区
定义：块级作用域内存在let命令时，所声明的变量就“绑定”这个区域，不再受外部的影响。

{
    //let a 之前的区域成为暂时性死区，调用a 会报错
    let a = "hello";
}
4. for循环中的作用域问题
//设置循环变量的部分是父级作用域，而循环体内部是一个单独的子作用域。
//ES6 中引用变量采用就近原则
5. 变量的解构
本质：模式匹配
   1. 完全解构：模式完全匹配
   2. 不完全解构：模式不完全匹配

   - 为解构变量设置默认值，不会出现 undefined 的现象
   - 解构成功时，解构变量的默认值会被覆盖
   - 解构不成功时，解构变量的值为默认值
   
  对象的解构注意：
    1.对象在解构时，变量名要与属性名一致
    2.对象解构的解构变量不考虑顺序
    3.对象在解构时，为对象属性重命名，可以方便程序的编写。注：重命名不会更改对象的属性
    4.和解构数组一样，解析对象时可以设置默认值 outLookURL:url = 111
6. 函数添加参数的默认值
1.利用解构传参，参数设置默认值   //show({ name = 'lucy', age = 22 } = {})  
                                 //show([a = 0, b = 0])
2.ES6 直接为参数添加默认值     //show(a = 0, b = 0)
7. rest参数
rest 参数： 接收不定参
--
1.rest 参数是一种方式(形参)，rest参数可以重命名为其他参数 ...a
2.rest 参数只能作为最后一个参数
8. ES5 中的两种函数定义方法:
1.函数式       //var fn = function(){}
2.声明式       //function show(){}
9. ES6 中箭头函数
ES6 中函数式声明方式被箭头函数 => 取代
箭头函数：使用 => 定义函数

当函数没有参数时，（）不能省略
当函数只有一个参数，且函数体是一句代码，且是返回语句
参数的（）可省略、函数体 {} 可省略、return 可省略、
中间使用 => 连接
若函数体只有一句，且不是return 语句， 不能省略 {}
若函数体有多条语句，不能省略 {}
若函数有多个参数，不能省略()
若函数的返回值为对象，此时不能省略return
使用箭头函数注意

箭头函数不适用于声明函数
箭头函数不适用于DOM事件
箭头函数不能作为构造函数（迭代器）
箭头函数内不能使用arguments
不能使用yield命令
10. 箭头函数this指向
箭头函数没有this，this是父级的
定义时候绑定，就是this是继承自父执行上下文！！中的this
ES5中，this指调用者，ES6中，this指定义时候绑定
11. 字符串遍历
    let str = "hello";
    //1.for遍历
    for (let i = 0; i < str.length; i++) {
        console.log(i, str[i]);     //i 索引    数值类型
    }
    
    //2.数组->for->for in
    let arr = [1, 2, 3];
    for (let i in arr) {
        console.log(i, arr[i]);     //i 索引    字符串类型
    }
    
    //3.for... of
    for(let i of str){
        console.log(i);     //数据
    }
    
    //4.解构
    let [a, b, c, d ,e] = str;
    console.log(a, b, c, d ,e);
    
12. ES6 新增字符串方法
//字符串新增方法：
方法                返回值          作用
includes('str')     boolean         判断字符串中包含子串
endWith('str')      boolean         判断字符串以"str"结尾
startWith('str')    boolean         判断字符串以"str"开头
repeat(n)           重复拼接自身     重复n次输出字符串 repeat + repeat

//不全方法: 补全字符串长度
padStart(length, s);        字符串开头补全
endStart(length, s);        字符串末尾补全
13. ES6模板字符串
模板字符串 反引号 ``

1.支持换行 //空白会打印出来
2.模板中传变量 ${变量}

    let obj = {
        name: 'jack',
        age: 20
    };
    console.log(`名称：${obj.name},年龄：${obj.age}`);  //名称：jack,年龄：20
14. ES6 对于对象的扩展
对象扩展：

    //1.对象的属性简写: 当对象的属性名和属性值（变量）名称一致，可省略赋值
    //2.对象的方法简写：
    let name = "jack";
    let age = 22;

    let obj = {
        name,
        age,
        walk: function () {
            console.log(this.name + " is walk");
        },
        say() {
            console.log(this.name + ` say`);
        }
    }
    
15. ES6的Set结构
set结构：此结构中元素是唯一的，不能重复

方法：返回值是set可以连缀
    add(val)           加元素
    delete(val)        删元素
    has(val)           判断是否包含元素     boolean
    clear()            删除所有数据

属性：
    size    元素个数

使用new Set()实例化
set结构的遍历

for of 遍历set
for of 遍历keys()
for of 遍历values()
for of 遍历对象实体 entries
forEach遍历 set
使用扩展运算符 和 解构 将set结构转为数组
    // for of 遍历数据
    for (let i of set) {
        console.log(i);     //1  2  5  3
    }
   
    // 遍历 keys    等于遍历set
    for (let i of set.keys()) {
        console.log(i);
    }

    //遍历values
    for (let i of set.values()) {
        console.log(i);
    }

    //遍历对象实体 entries
    for (let i of set.entries()) {
        console.log(i[0]);
    }
    
    //解构的方式遍历对象实体
    for (let [k, v] of set.entries()) {
        console.log(k, v);
    }

    // for  each遍历 set
    set.forEach(i => {
        console.log(i);
    })
16. ES6的Map结构
Map 结构：由于对象的属性只能接受字符串类型，所有产生了Map结构，优化对象结构

方法：返回值是Map实例可以连缀
    set(key,val)        加元素
    get(key)            取元素
    has(key)            判断是否包含元素     boolean
    clear()             删除所有数据

使用new Map()实例化
     // 1.添加数据 set()
    map.set('name', 'jack').set('age', 22).set(0,100);
    console.log(map);

    // 2.获取数据 get()
    console.log(map.get(0));        //100
    console.log(map.get('name'))    //jack

    // 3.判断存在数据 has()
    console.log(map.has(0));        //true

    // 4.删除数据 delete()
    map.delete(0);
    console.log(map);       //Map(2) {"name" => "jack", "age" => 22}

    // 5.清空数据 clear()
    map.clear();
    console.log(map);       //Map(0) {}
Map结构规则

    //1. map 支持数组作为构造函数的参数,但必须是二维数组
    // let arr = [1, 2, 3, 4, 5];  //Iterator value 1 is not an entry object
    let arr = [['name', 'jack'], ['age', 23]];
    let map = new Map(arr);
    console.log(map);   //Map(4) {"name" => "jack", "age" => 23}


    // 2.key 不能重复，val可以重复, key如果重复会将原来的值覆盖
    map.set('name','tom');
    map.set('hob','sing');
    console.log(map);   //Map(5) {"name" => "tom", "age" => 23, "hob" => "sing"}
Map的遍历

let of 遍历map
forEach 遍历 map
let of 遍历map.keys
let of 遍历map.values
let of 遍历map.entries
let of 遍历 map.entries + 解构
    // 1.let of 遍历map
    for (let i of map) {
        console.log(i[0], i[1]);
    }
   
    // 2.foreach 遍历 map
    map.forEach((v, k) => {
        console.log(k, v);
    })
  
    // 3.let of 遍历map.keys
    for (let k of map.keys()) {
        console.log(k, map.get(k));
    }
    
    // 4.let of 遍历map.values
    for (let v of map.values()) {
        console.log(v);
    }
    
    // 5.let of 遍历map.entries
    for (let i of map.entries()) {
        console.log(i[0], i[1]);
    }
    
    // 6.let of 遍历 map.entries + 解构
    for (let [k, v] of map.entries()) {
        console.log(k, v);
    }
16. ES6的set结构、map结构类型间转换
Set 和 数组
    1.set -> 数组
        1.Array.from();
        2.遍历set然后push
        3.扩展运算符

    2.数组 -> set
        1.new Set(arr);
    
Map 和 对象 和 string
    1.map -> 对象 -> String
        1.forEach遍历Map -> 对象 -> JSON.stringify
    2.String -> 对象 -> map
        1.JSON.parse -> 对象 -> for...in 遍历对象 -> Map.add()
Set 和 数组之间

let set = new Set();
set.add(1).add(2).add(3).add(2);

// 1.Array.from();
var arr = Array.from(set);
console.log(arr);

// 2.遍历set然后push
var arr  = [];
set.forEach(i=>{
    arr.push(i);
});
console.log(arr);

// 3.扩展运算符
var arr = [...set];
console.log(arr);
map、对象和字符串之间

let map = new Map();
map.set('name', 'jack').set('age', 22).set('tel', 151);

// 1.map -> 对象 -> String
var obj = {};
map.forEach((v,k)=>{
    obj[k] = v;
})
console.log(obj);

var str = JSON.stringify(obj);
console.log(str);

// 2.String -> 对象 -> map
var obj1 = JSON.parse(str);
var map1 = new Map();
for(let i in obj1){
    map1.set(i,obj1[i]);
}
console.log(map1);
16.rest 和 扩展运算符区别
rest参数，出现在函数参数位置
作用： 离散数据 -> 数组

function fn(...rest) {
    console.log(rest);
}
fn(100, 110, 120);    //(3) [100, 110, 120]
... 扩展运算符出现在非参数位置
作用:

数组 -> 离散的数据
拆分伪数组： NodeList HTMLCollection arguments...
let arr = [1, 2, 3, 4, 5];
console.log(...arr);    //1 2 3 4 5    

function fn1() {
    console.log(arguments);     //Arguments(3) [2, 3, 4]
    console.log(...arguments);  //2 3 4
}
fn1(2,3,4);
17. ES6 面向对象
17-1、class 类、模板

构造器：当类被实例化时，自动执行构造器
每个类必须至少一个构造器，若没有，系统自动添加一个无参构造器
构造函数，不能主动调用
17-2、set 和 get 设置和获取属性

get 不能传递参数
只有当有set方法时才可以写get方法，同时出现
17-3、静态方法：

类自身的方法，不用实例化即可调用
不会被实例继承,直接通过类来调用
17-4、静态属性：

类名.属性名 = 值;
17-5、extends 实现继承

继承是单向的
被继承的类属于父类，基类，也称超类
静态方法可以被子类继承
继承属性super()必须放在构造器第一句
一个父类可以有多个子类，一个子类只有一个父类
17-6、注意：

父类可调用自己的成员方法
父类可以调自己的静态方法
父类不能调子类的成员方法
子类的实例可以调父类成员方法
子类的实例不能调父类静态方法
子类可以调父类静态方法
class Person {
    constructor(uname, uage) {
        this.uname = uname;
        this.uage = uage;
    }
    //成员方法
    walk() {
        console.log(`${this.uname}正在奔跑！`);
    }

    // 静态方法:类自身的方法
    static cry() {
        console.log('人生下来就会哭！');
    }
}
// 静态属性
Person.living = 'earth';


//学生类继承Person类
class Student extends Person {
    constructor(sname, sage, sno) {
        super(sname, sage);  //此句必须在构造器第一句
        this.sno = sno;
    }

    // 成员方法
    study() {
        console.log(`${this.sname}在学习呢！`);
    }
    
    //set 访问器 控制属性的设置
    set sage(age) {
       
    }

    // get 访问器，获取属性
    get sage() {
        
    }
}

//创建类的实例   类的实例化
var stu = new Student('王飒', 23, '001');

18. JS中的异常处理
try..catch
try..finally
try...catch..finally
19. ES6 Promise 解决回调地狱
19-1、 promise:为了解决异步编程中的回调地狱而产生

Promise的实例需要接收一个函数作为参数
该函数又需要接收两个函数数作为参数
resolve 函数
reject 函数

19-2、promise 的三种状态

pending 进行中
fullfilled 已成功 resolved 成功 执行resolve函数
rejected 已失败 rejected 失败 执行reject函数

19-3、then方法

参数一：是resolve函数的实现
参数二：是reject函数的实现

19-4、then方法返回值的是一个新的Promise实例

注意，不是原来那个Promise实例

若前一个回调函数返回的是一个Promise对象（即有异步操作）时，
后一个回调函数，会等待该Promise对象的状态发生变化，才会被调用。

19-5、promise的异常处理

建议总是使用catch方法。
Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。
Promise 的状态一旦改变，就永久保持该状态，不会再变了。
catch方法返回的还是一个 Promise 对象
catch和reject同时出现时，只执行reject
19-6、多个异步操作

// 加载图片函数
function loadPic(id, src, sec) {
    return new Promise((resolve, reject) => {
        let oImg = new Image();
        oImg.onload = function () {
            resolve(oImg);
        }
        oImg.onerror = function () {
            reject(`编号为${id}的任务失败`);
        }
        // oImg.src = src;
        setTimeout(() => {
            oImg.src = src;
        }, sec);   //延迟加载函数
    })
}

let s1 = "远程图片";
let s2 = "远程图片";
let p1 = loadPic('001', s1, 1000);
let p2 = loadPic('002', s2, 100);

// Promise.all 方法
// 当所有图片都加载完在执行后续动作，有一张失败都不执行then
let p = Promise.all([p1, p2]);  //all返回新的promise对象
p.then(data=>{
    console.log(data,'加载成功');
    document.body.append(data[0],data[1]);
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log('不论成功与否，我都执行');
}); 


// Promise.race 方法
// 注：
//  1.只要有一张图片加载完成，就执行then的resolve实现
//  2.如果先加载的图片有失败的情况，后续图片就不加载，直接执行catch 或 reject

let p = Promise.race([p1, p2]);
p.then(data => {
    console.log(data);      //只返回最先加载成功的那个
    document.body.append(data);    //由于设置了延迟，所以第二个先加载完成
}).catch(err => {
    console.log(err);
})
20. ES模块导入规则
容易出错的地方

页面不基于服务器运行，会出现跨域的错误
origin 'null' has been blocked by CORS policy: Cross origin requests are only

使用模块化时，页面不加type = "module" 会出现语法错误
app.js:1 Uncaught SyntaxError: Unexpected token {

<script src="./module/app.js" type="module"></script>
import导入模块时不添加 .js 的后缀名会报找不到module错误
GET xxx net::ERR_ABORTED 404 (Not Found)

import { Student } from './Student.js';
导入导出方式

导出方式
定义时导出
批量导出
导出重命名（不建议）
默认导出
    // 1.定义时导出
    export let uname = '李四';
    
    export function showStudentName(){
        console.log(uname);
    }
    
    export class SomeAnimalInfo{
        constructor(type,age){
            this.type = type;
            this.age = age;
        }
        showInfo(){
            console.log(`物种:${this.type},年龄：${this.age}`);
        }
    }
    
    // 2.批量导出
    const PI = 3.1415926;
    const DBNAME = 'Local';
    ... ...
    
    export { PI, DBNAME };
    
    // 3.默认导出 - 工具类
    export default class {
        static log(msg) {
            let now = new Date();
            console.log(`${now.toLocaleString()}    ${msg}`);
        }
        
        static setCookie(){
            
        }
        ... ...
    }
导入方式
导入重命名
导入整个模块
导入默认模块

    //1.导入重命名  as语法
    import {num, showStudentName as showName} from './all.js';
    
    // 2.导入整个模块   需要使用as重命名，接收的是一个对象
    import * as cons from './const.js';
    
    // 3.导入默认模块   需要起名，名字包含导出内容
    import Tool from './tools.js';

