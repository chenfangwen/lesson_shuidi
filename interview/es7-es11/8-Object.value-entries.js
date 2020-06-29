let obj = {
    a: 1, b: 2
}
Object.setPrototypeOf(obj, {c: 3})
console.log(Object.values(obj))

console.log(Object.entries(obj))