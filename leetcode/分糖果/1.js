/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const aa = candies.slice(0);
aa.sort(function(a, b){return b - a}); 
const maxNum = aa[0];
const arr = [];
candies.map((v,i)=>{
if(v+extraCandies>=maxNum){
    arr.push(true)
}else{
    arr.push(false)
}
})
return arr
};
