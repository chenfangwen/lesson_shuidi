// // MVVM 数据劫持

// var arr = [1];

// arr[10000] = 3;

// // function a() {
// //     console.time();
// //     for( var i = 0; i < arr.length; i++) {
// //         console.log(1)
// //     }
// //     console.timeEnd();
// // }
// // a();

// function b() {
//     console.time();
//     arr.forEach(item => {console.log(item,2)})
//     console.timeEnd()
// }
// b()

//对数组进行数据劫持
var arr = [1,2,3,4];
arr.forEach((item, index) => {
    Object.defineProperty(arr, index, {
        get: function (val) {
            console.log('get')
          return item
        },
        set: function (val) {
            console.log('set')
          item = val
        }
    })
})

Array.prototype.push = function(val) {
  let l = this.length
  this[l] = val
  Object.defineProperty(this, l, {
    get: function (val) {
        console.log('get')
      return this[l]
    },
    set: function (val) {
        console.log('set')
      this[l] = val
    }
})
}

console.log(arr[1])
arr[3] = 4
arr.push(5)
console.log(arr)
arr[5]    //新插入的不支持劫持了