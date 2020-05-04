var jump = function(nums) {
    var minStep = Number.MAX_SAFE_INTEGER;
    function canJumpFromWhere(position,nums,step){
        // 跳到终点了
        if(position == nums.length - 1){
            minStep = Math.min(minStep,step);
        }
        // 当前位置可跳的最远距离索引位置，取min是因为最远距离不能超过nums的长度对应的索引值
        var furthestPosition = Math.min(position+nums[position],nums.length - 1);
        for(var nextPosition = position+1;nextPosition <= furthestPosition;nextPosition++){
            canJumpFromWhere(nextPosition,nums,step+1)         
        }
    }
    canJumpFromWhere(0,nums,0);
    return minStep;
};

// 作者：Alexer-660
// 链接：https://leetcode-cn.com/problems/jump-game-ii/solution/45-tiao-yue-you-xi-ii-by-alexer-660/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 作者：Alexer-660
// 链接：https://leetcode-cn.com/problems/jump-game-ii/solution/45-tiao-yue-you-xi-ii-by-alexer-660/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。