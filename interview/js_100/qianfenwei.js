

function fprice(s,n){   
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";    //n为小数点后保留小数位
    var l = s.split(".")[0].split("").reverse(),   
    r = s.split(".")[1];   
    t = "";   
    for(i = 0; i < l.length; i ++ ){   
       t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");   
    }   
    return t.split("").reverse().join("") + "." + r;   
 }

 function format(num){  
    num=num+'';//数字转字符串  
    var str="";//字符串累加  
    for(var i=num.length- 1,j=1;i>=0;i--,j++){  
        if(j%3==0 && i!=0){//每隔三位加逗号，过滤正好在第一个数字的情况  
            str+=num[i]+",";//加千分位逗号  
            continue;  
        }  
        str+=num[i];//倒着累加数字
    }  
    return str.split('').reverse().join("");//字符串=>数组=>反转=>字符串  
  } 

 console.log(fprice(1221312341234.213412341234,3))
 console.log(format(1221312341234))



 function format2 ( num ) {
    num = num + '';
    var str = '' ;
    for(var i = num.length-1,j = 1; i >= 0; j++,i--) {
        if( j % 3 == 0 && i!=0) {
            str += num[i] + ',';
        }else{
            str += num[i]
        }
    }
    return str.split('').reverse().join('') //join分隔符''
 }
 console.log(format2(1234123423412341234))