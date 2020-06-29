// Object.keys()
let obj = {
  a: 1, b: 2
}
Object.setPrototypeOf(obj, { c: 3 })
console.log(obj.c);
console.log(Object.values(obj));
// Map
console.log(Object.entries(obj));
// for in
for (let key in obj) {
  console.log(key);
}