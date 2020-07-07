var data = {
    name:"test",  //一会要被拷贝的数据，包含字符串、对象、函数、数组
    main:{
        a:1,
        b:2
    },
    fn:function(){
        
    },
    friends:[1,2,3,[22,33]]
}

function shallowCopy(obj){
    var data = {};
    for (var i in obj){
        if(obj.hasOwnProperty(i)){  // for in  循环，也会循环原型链上的属性，所以这里需要判断一下
        //hasOwnProperty的相关知识点，查看下面的：相关知识点补充
            data[i] = obj[i]
        }
    }
    return data
}
var obj2 = shallowCopy(data)
obj2.name = '修改成功'    //由于name是基本数据类型，会开辟一个新的地址来储存我们拷贝的内容，所以原数据的name属性不会被修改
obj2.main.a = 100    //   main是引用类型，浅拷贝会直接拷贝它的地址，所以原数据的这个值也会改变
console.log(data,obj2)