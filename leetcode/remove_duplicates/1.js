var removeDuplicates = function(nums) {
    const len = nums.length;
    let slowP = 0;
    for(let fastP = 1; fastP < len; fastP++){
        if(nums[slowP]!==nums[fastP]){
            slowP++;
            nums[slowP] = nums[fastP];
        }
    }
    nums.splice(slowP+1,len-slowP);
    return nums;
};
console.log(removeDuplicates([1,2,2,3,4,3]));