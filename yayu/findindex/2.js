'use strict'
//返回符合条件的下标
function findIndex(array,predicate,context){
    context=[];
    for(var i=0;i<array.length;i++){
        //函数运行考虑上下文环境
       if(predicate.call(context,array[i],i)) {
          console.log(this);
          context.push(i);
       }
    }
    if(context.length==0)
        return -1;
    console.log(context);
}
//函数作为形参 JS里函数是一个一等对象
findIndex([1,3,2,3,4],function(item,i){
    if(item == 3) return true;
},[1,3,2,3,4]);