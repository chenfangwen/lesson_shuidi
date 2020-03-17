function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
}

var hasNumber = curryingCheck(/\{[a-z]+\d[a-z]+\}/g)
var hasLetter = curryingCheck(/[a-z]+/g)

console.log(hasNumber('{d1sdfsd}'))      // true
console.log(hasNumber('testtest'))   // false
console.log(hasLetter('21212') )     // false

