console.log(['1', '2', '3'].map(parseInt));
// console.log(parseInt('10',2))

// let unary = fn => val => fn(val);
let unary = function(fn){
    return function(val) { 
        return fn(val)
    }
} 

let parse = unary(parseInt)

console.log(['1', '2', '3'].map(parse))
