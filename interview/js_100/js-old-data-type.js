// 基本包装类型 Number String Boolean
var str = 'hello';
String.prototype.last= function() { 
    return this.charAt(this.length-1)
};
String.prototype.number= 10

console.log(str.last(),str.number,'aaa')