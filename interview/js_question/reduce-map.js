Array.prototype._map = function(fn, callbackThis) {
    // 最终返回的新数组
    // let res = [];
    // 定义回调函数的执行环境
    // call第一个参数传入null，则 this指向全局对象，同 map的规则
    // let CBThis = callbackThis || null;
    return this.reduce((brfore, after, idx, arr) => {
        // 传入map回调函数拥有的参数
        // 把每一项的执行结果push进res中
        let res =  fn(after)
        return brfore.concat(res);
    }, []);
     
};

let arr = [1,2,3]
let newArr = arr._map( (num,i,arr) => {
    // console.log(arr)
    return num*2
})
console.log(newArr)


function test(fn) {
    setTimeout(()=>{
        fn('hello word')
    },2000)
}

test(function(str){
    console.log(str)
})

module.exports =  () => {
    console.log('sfasdfasdf')
}