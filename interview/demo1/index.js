
function Bar() {
    this.a = 123
}

let obj = {}

let Bar2 = Bar.bind(obj)

console.log(obj)