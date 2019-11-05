// var count=0;
var moveZeroes = function(nums) {
    /*for(let i=0,l=nums.length;i<l-count;i++)
    {
        if(nums[i]==0)
        {
            for(var j=i+1;j<l-count;j++)
                nums[j-1]=nums[j];
            nums[j-1]=0;
            count++;
        }
    }*/
    /*let notZeroArr = [],
    zeroArr = [];
    for(let i = 0,l = nums.length; i < l; i++)
    {
        if(nums[i] != 0)
            notZeroArr.push(nums[i]);
        else
            zeroArr.push(nums[i]);
    }
    return notZeroArr.concat(zeroArr);*/
    //return nums;
    var index=0;
    for(var i=0;i<nums.length;i++){
        if(nums[i] !== 0 )
            nums[index++]=nums[i];

    }
    for(let i=index;i<nums.length;i++)
    {
        nums[i]=0;
    }
    
};
const b=[0,1,0,3,12];
moveZeroes(b);//内部调整了nums, 引用了
console.log(b);