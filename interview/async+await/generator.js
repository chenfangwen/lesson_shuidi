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
function* test() {
    let a = yield p1;
    console.log(a,'a---')
    let b = yield p2;
    console.log(b,('b---'));
}
function asyncTogenerate(gen) {
    let g = gen();
    function step(value) {
        let info = g.next(value);
        if (info.done) {
            return;
            } else {
            Promise.resolve(info.value).then((res) => {
                step(res);
            })
        }
    }
    step();
}
asyncTogenerate(test);
  