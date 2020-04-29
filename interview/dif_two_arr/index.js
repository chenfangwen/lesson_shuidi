function dif (a, b) {
    let res = []
    a.forEach(item => {
        let p = false
        b.forEach(item2 => {
            if(item === item2){
                p =true
            }
        })
        if(!p) res.push(item)
    })
    b.forEach(item => {
        let p = false
        a.forEach(item2 => {
            if(item === item2){
                p =true
            }
        })
        if(!p) res.push(item)
    })
    return res
}

function getArrDifference(arr1, arr2) {
    return arr1.concat(arr2).filter(function(v, i, arr) {
        // console.log(v, i, arr,arr.indexOf(v),arr.lastIndexOf(v))
        return arr.indexOf(v) === arr.lastIndexOf(v);
    });
}
console.time('start')
dif([1, 2, 3],[2, 4])
console.timeEnd('start')

console.time('start')
getArrDifference([1, 2, 3],[2, 4])
console.timeEnd('start')


// console.log(dif([1, 2, 3],[2, 4]))

// console.log(getArrDifference([1, 2, 3],[2, 4]))
