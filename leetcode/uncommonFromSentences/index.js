var uncommonFromSentences = function(A, B) {
    a = A.split(" ")
    b = B.split(" ")
    let arr = []
    // console.log(a,b)
    for(let i = 0; i < a.length; i++){
        if(b.indexOf(a[i])<0)
            arr.push(a[i])
    }
    for(let i = 0; i < b.length; i++){
        if(a.indexOf(b[i])<0)
            arr.push(b[i])
    }
    return arr
};

console.log(uncommonFromSentences("asd apple",
"banana"))