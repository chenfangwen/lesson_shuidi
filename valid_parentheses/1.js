/**
 * 
 * @param {string} s 
 * @return {bollean}
 */
var isValid = function(s) {
    if(!s||s.length<1) return true;   //字符串为空
    var n = s.length;  //字符串长度
    const stack = [];    //栈  对栈顶操作
    //在数组的尾部位置插入 PUSH  数组的头部移除 shift（）
    for(var i = 0; i < n; i++){
        var c = s[i];
        if(c == '('){
            stack.push(c); //入栈
        }else{
            if(stack.length<1){
                return false;
            }
            stack.pop();
        }
    }  
    return stack == 0 ? true:false;  
}


console.log(isValid('())('))