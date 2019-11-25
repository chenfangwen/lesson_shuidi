const arr = [];
arr.push('建宁');
arr.push('曾柔');
arr.push('双儿');
arr.push('阿珂');
//栈，队列
console.log(arr);
arr.pop();
arr.unshift('阿珂');
console.log(arr);
arr.unshift('苏全');
console.log(arr);
const sq=arr.shift();
arr.push(sq);
console.log(arr)
