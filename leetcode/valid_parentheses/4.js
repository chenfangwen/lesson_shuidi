function longestValidParentheses(s){
    var max = 0;
    //时间复杂度O(n)
    if(s.length == 0 || s.length == 1)  return max;
    var stack = [-1];
    for(var i = 0; i<s.length; i++){  //下标发，只要一次便利
        if(s[i]=='(')  {   
            stack.push(i);
        }else{
            stack.pop();
            if(stack.length < 1){
                stack.push(i);
            }else{
                max = Math.max(max,i-stack[stack.length-1]);
            }
        }

    }
    return max;
}
console.log(longestValidParentheses('()())'))