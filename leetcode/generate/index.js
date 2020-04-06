var generate = function(numRows) {
    let list = []
  for(let i = 1; i<= numRows; i++){                   // 先建个 数组  每行长度递增 , 每行的每个元素为1
    let arr = Array.apply(null,Array(i)).map(t => 1)
    list.push(arr)
  }

  list = list.map((item,index) => {
    if(index >= 2){                       // 当第三行开始才有这个规律
      let last = list[index-1]
      list[index] = item.map((t,i) => {   // 把list 的 index 重新赋值 , 
        if(i > 0 && i < item.length - 1){ // 去除首尾项
          return last[i] + last[i-1]
        }
        return t
      })
      return list[index]
    }
    return item
  })
  return list

};