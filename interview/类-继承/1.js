class A{
    
    constructor(){
        this.name = 'cfw'
        this.con = console
    }
    console () {
        console.log('我是A')
    }
    
}
class B extends A{}
let b = new B()
let a = new A()

console.log(b.__proto__ == B.prototype)   //true
console.log(B.__proto__ == A)  //true
console.log(b.name,'----')
b.console()
a.console()