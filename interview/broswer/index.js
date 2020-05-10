let a = {
    'name': 'casdf',
    'age': 'asfsf'
}
console.log(a)
name = '刘姿依'
age = 20
let b = {
    name,
    age
}
let c = b;
c.name = "陈方闻"
console.log(b,c)
a = {a:23}
c = a ;
c.a= 5  // 原来堆内存的那个值改变，a,c因为指向同一个值的地址，一起改变
console.log(a,c)
c = {f:1}   //重新在堆内存里存一个新值，栈里的值是指向这个新值的地址
console.log(a,c)
