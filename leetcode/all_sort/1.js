/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = (nums) => {
    let res = []
    let backtrack = (path) => {
        console.log(path)
        if(path.length == nums.length) res.push(path)
        for(let n of nums){
            console.log(n)
            if(!path.includes(n)){
                path.push(n)
                backtrack(path.slice())
                path.pop()
            }
        }
    }
    backtrack([])
    return res
};

permute([1,2,3])