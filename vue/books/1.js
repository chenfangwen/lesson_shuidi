var s1 = 'get-element-by-id';
var f = function(s){
    //   \w 匹配所有字符
    return s.replace(/-\w/g,function(x){
        // console.log(x);
        return x.slice(1).toUpperCase();
    });
}
console.log(f(s1))