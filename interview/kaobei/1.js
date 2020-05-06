// let a = {hobbys:{food:{apple:'sdasd'},study:{js:'dasdf'}}}

// b = a ;  
//对于子对象没有进行拷贝 所以不是相互独立 一起改变
// b.hobbys.food.apple = 123
// console.log(a,b)


//引用类型  相互改变
let c = [1,3,{nama:'asdfasdf' }]
let d = c
d[0] = 'sadfas'
d[2].nama = '1234134'
// console.log(c,d)


//深拷贝
let a = {hobbys:{food:{apple:'sdasd'},study:{js:'dasdf'}}}
// 基本数据类型的复制 相互独立
let ahfa = a.hobbys.food.apple
let ahsj = a.hobbys.study.js
let b = {hobbys:{food:{apple:ahfa},study:{js:ahsj}}}

b.hobbys.study.js = '1234123412'
console.log(a,b)




//手动实现深拷贝
function deepCopy(obj) {
    if (!obj && typeof obj !== 'object') {
      throw new Error('error arguments');
    }
    // const targetObj = obj.constructor === Array ? [] : {};
    const targetObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      //只对对象自有属性进行拷贝
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === 'object') {
          targetObj[key] = deepCopy(obj[key]);
        } else {
          targetObj[key] = obj[key];
        }
      }
    }
    return targetObj;
  }
  

let e = {hobbys:{food:{apple:'sdasd'},study:{js:'dasdf'}}}
let f = deepCopy(e)

f.hobbys.study.js = '222'
console.log(e,f)