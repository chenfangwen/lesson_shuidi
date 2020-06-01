// 1.
// var a = {
//     i: 1,
//     toString: function () {
//         console.log('aaa')
//       return a.i++;
//     },
//     valueOf: function () {
//         console.log('aaa1')
//         return a.i++;
//     }
// }

// 2.
// a = [1,2,3];
// a.join = a.shift;

// 3.
// const value = function* () {
//     let i = 0;
//     while(true) yield ++i;
// }();
// Object.defineProperty(globalThis, 'a', {
//     get() {
//         return value.next().value;
//     }
// });

// 4.
Object.defineProperty(globalThis, 'a', {
    get() {
        if(this.value){
            return ++this.value;
        } else {
            return this.value = 1
        }
    }
});

if(a == 1 && a == 2 && a == 3) {
    console.log(1)
}