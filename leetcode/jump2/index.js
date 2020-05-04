var jump = function (nums) {
    const hash = {}
    const toEnd = (from) => {
      // 计算过的
      if (hash[from]) return hash[from]
      // 是末尾
      if (from === nums.length - 1) return 0
      // 到末尾只需一步
      if (from + nums[from] >= nums.length - 1) return 1
      // 到末尾需要 1 + min(...) 步
      let min = Infinity
      for (let i = nums[from]; i > 0; i--) {
        min = Math.min(toEnd(from + i), min)
        // 1 已经是最小步数了，不必再找
        if (min === 1) break
      }
      hash[from] = min + 1
      return hash[from]
    }
    return toEnd(0)
  }
  
  // 作者：zjut
  // 链接：https://leetcode-cn.com/problems/jump-game-ii/solution/tu-di-gui-ha-xi-biao-by-zjut/
  // 来源：力扣（LeetCode）
  // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。