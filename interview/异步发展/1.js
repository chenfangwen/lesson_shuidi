async function test() {
let a = await new Promise((reslove, reject) => {
    setTimeout(() => {
        console.log('等我')
        reslove(1)
    }, 1000);
})
console.log('1')
console.log(a,'---')
}
test()