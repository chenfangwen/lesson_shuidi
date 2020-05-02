var lengthOfLongestSubstring = function(s) {
    if(!s.length) return 0;
       let max = 1;//最大长度
       let now = "";//当前无重复字串
       let left = 0;//当前无重复字串的起始下标
       let loop = 0;//循环次数
       let idx;//当前字符所在now中的位置
   
       //假如当前max大于当前未遍历的剩余字符时，则可跳出了
       //例如 abccba 当运行到第二个c时，max = 3，left = 3 跳出
       //后面不可能大于max，最多等于
       while(loop < s.length && max < s.length - left){
           idx = now.indexOf(s[loop]);
           if(idx >= 0){
               //假如当前字符存在重复 则把起始下标移动到对应位置
               //例如 在abcdb...中 此时now = abcd  left = 0
               //loop = 4 即当前字符为b 则把起始下标移到重复字符b的后一位 即c
               left += idx + 1;
           }
           now = s.slice(left, loop + 1);
           max = Math.max(now.length, max); 
           loop++;   
       }
       return max;
   };
   