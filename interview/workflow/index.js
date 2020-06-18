
// let p1 = new Promise((res,rej) => {
//   setTimeout(() => {
//     rej(1)
//   },1000)
// });
// let p2 = new Promise((res,rej) => {
//   setTimeout(() => {
//     res(2)
//   },900)
// });

// Promise.all([p1, p2])
//   .then((res) => console.log(res,'+++'))   //无打印
  
//   .catch((err) => console.log(err,'+++'));  // 一秒后 1 +++
// Promise.race([p1, p2])
//   .then((res) => console.log(res,'---'))  // 2---
//   .catch((err) => console.log(err))   // 无打印  
  
// let a = {
//   name: 'cfw',
//   con() {
//     console.log(this.name)
//   }
// }
// a.con()

// var single = 2
// const single = 4  //重定义
// console.log(single)


// let p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log('promis1')
//   }, 1000);
//   res(1)
// })
// console.log('mian')
// p1.then(res=> console.log(res))
// setTimeout(() => {
//   console.log('settime')
// }, 1000);

console.log(1);setTimeout(()=> {console.log(2)},0); let p = new Promise((res,rej)=> {res(2);console.log(3)}); p.then(res=>{})



