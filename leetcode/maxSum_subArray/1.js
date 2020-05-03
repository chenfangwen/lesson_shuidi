/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    for(let i=0; i<nums.length; i++){
        let sum = nums[i];
        if(sum>res){
            res = sum
        }
        for(let j = i+1; j<nums.length; j++ ){
            sum = sum+nums[j]
            if(res <= sum){
                res = sum
                // console.log(res)
            }
        }
    }
    return res
};