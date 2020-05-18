/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     let max = nums[0]*nums[1];
//     let m = nums[0]
//     let i = 1;
//     if(nums.length == 1) return nums[0]
//     while(i<nums.length){
//         if(max<nums[i]*nums[i+1]){
//             max = nums[i]*nums[i+1]
//         }
//         if(m<nums[i]) m = nums[i]
//         i++
//     }
//     console.log(max,m)
//     if(m>max) {return m}else {return max}
// };

var maxProduct = (nums) => {
    let res = nums[0]
    let prevMin = nums[0]
    let prevMax = nums[0]
    let temp1 = 0, temp2 = 0
    for (let i = 1; i < nums.length; i++) {
      temp1 = prevMin * nums[i]
      temp2 = prevMax * nums[i]
      prevMin = Math.min(temp1, temp2, nums[i])
      prevMax = Math.max(temp1, temp2, nums[i])
      res = Math.max(prevMax, res)
    }
    return res
  }
  
  