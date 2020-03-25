@annotation
class MyClass{

}

function annotation(target){
    target.annotated = true
}
// const myClass = new MyClass
console.log(MyClass.annotated)