function deepCopy(obj) {
    var cobj;
    let t = typeof obj;
    if(t !== 'object' || obj === null){
      return obj;
    } else if (Array.isArray(obj)) {
      cobj = [];
      obj.forEach((item,index) => {
        cobj.push(deepCopy(item))  //对于数组里的每一项也深拷贝处理
      })
    } else {
      cobj = {}
      //只对Object进行深拷贝
      if (Object.prototype.toString.call(obj) == "[object Object]") { 
        // Reflect.ownKeys(obj) == 
        // Object.getOwnPropertyNames(obj).
        // concat(Object.getOwnPropertySymbols(obj))
        Object.getOwnPropertyNames(obj)
          .concat(Object.getOwnPropertySymbols(obj))
          .forEach(c => {
            cobj[c] = deepCopy(obj[c]);
          })
      } else {   //Date,RegExp等直接复制
        console.log(obj)
        cobj = obj;
      }
    }
    return cobj;
}



var a = {a: '1', b: [1,2,3,4,{t:'test'}], [Symbol()]: 'symbol', d: new Date(), r: RegExp('^\\d$')};

var b = deepCopy(a)
b.b[0] = 'a'
console.log(a,b)


