// 遍历数组
let arr = [1,2,3];
for(let i = 0;i < arr.length;i++){
    console.log(i)          // 索引，数组下标
    console.log(arr[i])     // 数组下标所对应的元素
}

// 遍历对象
let profile = {name:"April",nickname:"二十七刻",country:"China"};
for(let i = 0, keys=Object.keys(profile); i < keys.length;i++){
    console.log(keys[i])            // 对象的键值
    console.log(profile[keys[i]])   // 对象的键对应的值
}

// 遍历字符串
let str = "abcdef";
for(let i = 0;i < str.length ;i++){
    console.log(i)          // 索引 字符串的下标
    console.log(str[i])     // 字符串下标所对应的元素
}

// 遍历DOM 节点
let articleParagraphs = document.querySelectorAll('.article > p');
for(let i = 0;i<articleParagraphs.length;i++){
    articleParagraphs[i].classList.add("paragraph");
    // 给class名为“article”节点下的 p 标签添加一个名为“paragraph” class属性。
}