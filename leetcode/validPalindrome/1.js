// var validPalindrome = function(s) {
//     let left = 0;
//     let right = s.length -1;

//     while(left < right){
//         if(s[left] !== s[right]){
//             let str = s.split("");
//             let strRight = s.split("");
//             str.splice(left,1)
//             strRight.splice(right,1)
        
//             return str.join("") === str.reverse().join("") || strRight.join("") === strRight.reverse().join("")
//         }
//         left++
//         right--
//     }
//     return true
// };


var validPalindrome = function(s, count = 0) {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
      if (s[i] === s[j]) continue;
      if (count > 0) return false;
      // 用递归就方便多了，还可以很好的使用到可删除多个字符的情况
      return validPalindrome(s.slice(i, j), count + 1) || validPalindrome(s.slice(i + 1, j + 1), count + 1);
    }
    return true;
  };
  
  