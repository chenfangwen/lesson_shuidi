
function deepCopy(obj) {
    var cobj;
    if (obj === null) { // null 
      return obj;
    }

    let t = typeof obj;
    if(t !== 'object') return obj;
    
    if (Array.isArray(obj)) {
      cobj = [];
      obj.forEach((item,index) => {
        //   console.log(item,index)
        cobj.push(deepCopy(item))
      })
    } else {
      cobj = {}
      if (Object.prototype.toString.call(obj) == "[object Object]") {
        // weakSet weakMap
        // Reflect.ownKeys(obj) == Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj))
        Object.getOwnPropertyNames(obj)
          .concat(Object.getOwnPropertySymbols(obj))
          .forEach(c => {
            cobj[c] = deepCopy(obj[c]);
          })
      } else {
        cobj = obj;
      }
    }
    return cobj;
}
var a = {a: '1', b: [1,2,3,4,{t:'test'}], [Symbol()]: 'symbol', d: new Date(), r: RegExp('^\\d$')};

var b = deepCopy(a)
b.b[0] = 'a'
console.log(a,b)