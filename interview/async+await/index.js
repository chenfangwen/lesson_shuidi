let p1 = new Promise((resolve) => {
  console.log('p1先');
  setTimeout(() => {
    console.log(1);
    resolve(1)
  }, 2000)
})
let p2 = new Promise((resolve) => {
  console.log('p2后');
  setTimeout(() => {
    console.log(2);
    resolve(2)
  }, 1000)
})
// let p1 = 
//   setTimeout(() => {
//     console.log(1);
//   }, 1000)
// let p2 = 
//   setTimeout(() => {
//     console.log(2);
//   }, 1000)
// 不是 简单 async -> *  yield -> await
// 转完之后 还得保证 顺序
function* test() {
  let a = yield p1;
  console.log(a,'a---')
  let b = yield p2;
  console.log(b,('b---'));
}
// 简单版本的实现
// 1：执行 generate 2： 而且保证顺序
function asyncTogenerate(gen) {
  let g = gen();
  function step(value) {
    // 处理 yield 返回值问题
    let info = g.next(value);
    if (info.done) {
      return;
    } else {
      // 把 yield 后面的东西(info.value) 直接 resolve
      Promise.resolve(info.value).then((res) => {
        // 下一个 yield 下一个 递归
        // 第一次 1'
        step(res);
      })
    }
  }
  step();
}
asyncTogenerate(test);
