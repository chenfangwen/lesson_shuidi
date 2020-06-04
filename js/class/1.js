

class A {
    constructor(){
        this.name = "cfw"
    }
    work = function(){
        return this.name
    }
}
var a = new A();
console.log(a.work())
console.log(A.prototype)


function B() {
    this.name = 'lzy'
    this.get = ()=> {
        return this.name
    }
}
B.prototype.get2 = function (params) {
    return 'i love ' + this.name;
}
var b = new B();
console.log(b.get2())
// console.log(B.prototype)