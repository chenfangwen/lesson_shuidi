let arr = [1,2,3];
arr.forEach(i => console.log(i))

// logs 1
// logs 2
// logs 3
// 直接输出了数组的元素

//遍历对象
let profile = {name:"April",nickname:"二十七刻",country:"China"};
let keys = Object.keys(profile);
keys.forEach(i => {
    console.log(i)              // 对象的键值
    console.log(profile[i])     // 对象的键对应的值
})