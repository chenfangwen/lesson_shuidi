console.log(['1', '2', '3'].map((item,index,arr)=>parseInt(item)));
// console.log(parseInt('10',2))

let unary = fn => val => fn(val);

let parse = unary(parseInt)

console.log(['1', '2', '3'].map(parse))
