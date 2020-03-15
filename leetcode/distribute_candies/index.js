/**
 * 
 * @param {Array length even} cadies
 * @return {number} count
 */
var distributeCandies = (candies) => {
    let count = 0;
    let obj = {};  //对象字面量
    // candies.forEach(item => {
    //     console.log(item);
    // })
    for(let item of candies) {
        // console.log(item);
        if(!obj[item]){
            obj[item] = 1;
            count++;
        }
    }
    return (count<candies.length>>2) ? count : candies.length/2;
}
console.log(distributeCandies([1,2,4,3,5,3]));