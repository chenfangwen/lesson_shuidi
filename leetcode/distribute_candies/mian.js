var distributeCandies = (candies) => {
    //去重 有种结构 数组容器 不重复
    var count = new Set(candies);
    return Math.min(count.size,candies.length>>1)
}
console.log(distributeCandies([1,1,1,3,2,4]))
