/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    for(let i = 0; i < height.length; i++){
        for(let j = i+1; j < height.length; j++){
            let s = (j-i) * Math.min(height[i],height[j])
            res = Math.max(s,res)
        }
    }
    return res;
};