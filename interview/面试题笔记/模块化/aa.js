const {a, b} = require('./bb');
console.log(a, b);
let a = 123
let b = a;   // 拷贝
let obj = {}
let obj1 =  obj;  // 拷贝
setTimeout(() => {
  // 对于基本数据类型不受影响
  // 对于 Object 变成
  console.log(a, b);
}, 2000)