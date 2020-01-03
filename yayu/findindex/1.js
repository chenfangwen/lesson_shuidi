//es6支持
//手写一个findIndex

function isBigEnough(element){
    console.log(element);
    return element>=15;
}


console.log([12,5,8,130,44].findIndex(isBigEnough));