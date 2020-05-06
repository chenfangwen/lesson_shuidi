function deepCopy (obj) {
    if(!obj && typeof obj != 'object') {
        throw new Error('error argument');
    }
    const targetObj = Array.isArray(obj) ? [] : {};
    for(let key in obj) {
        if(obj.hasOwnProperty(key)){
            if(obj[key] && typeof obj[key] == 'object'){
                targetObj[key] = deepCopy(obj[key])
            } else {
                targetObj[key] = obj[key]
            }
            
        }
    }
    return targetObj;
}

let e = [{hobbys:{food:{apple:'sdasd'},study:{js:'dasdf'},arr:[['asdf','fdsaf'],'asf']}},'fsdds']
let f = deepCopy(e)

f[0].hobbys.study.js = '222'
f[1] = '12423'
f[0].arr = [['313','13'],'231']
console.log(e,f)


// let arr = ['asdf',{'ho':'asdf'}]
// let arr2 = arr
// arr2[1].ho = '12312'
// console.log(arr,arr2)