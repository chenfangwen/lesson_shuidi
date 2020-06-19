const { Map, fromJS } = require('immutable')

const map1 = Map({ a:1, b:2, c:3 })
const map2 = map1.set('b',50)
console.log(map1,map2)
let a = {name:'sd'}
let b = a;
b.name='dsfsd'
console.log(a,b)