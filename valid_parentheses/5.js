function longestValidParentheses(s){
    
    if(s.length == 0 || !s)  return 0;
    var left = right = max = 0;
    for(var i = 0; i<s.length; i++){
        if(s[i] == '('){
            left++;
        }else{
            right++;
        }
        if(left == right){
            max = Math.max(max,2*right);
        }else if(right > left){
            left = right = 0;
        }
    }
   return max;
}
console.log(longestValidParentheses('(())())('))