function kNum (arr, n) {
    return arr.join('').split(n).length -1 
}

console.log(kNum([1,2,3,1,4,2],3))