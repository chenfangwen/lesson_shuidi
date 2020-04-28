/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    // 定义一个 mask，表示要找的两个数字的异或
    // 因为出现了两次的数字的异或为 0，也就不会被记录在 mask 中
    let mask = 0
    for (let num of nums) {
      mask ^= num
    }
    // 获取到 mask 后，此时的任务就是找到其中一个只出现过一次的数字，记为 num1
    // 将 mask 与 num1 进行异或计算，就能获得第二个数字，记为 num2
  
    // 异或结果的某一位是 1，表示当前位的运算数字一个是 1 ，一个是 0
    // 即找到了不同的一位，以下取最高位的 1
  
    // 获取最高位的 1，记为 diff
    const diff = mask & -mask
    let num1 = 0
    for (let num of nums) {
      // 若 num 与 diff 的与运算结果为 1，则说明这些 num 是一组的
      // 与此同时，结果为 0 的表示另外一组
      // 原因是：异或为 1，表示运算数分别是 0 / 1
      if (num & diff) {
        // 此时的过程就相当于 在一堆数字(除了一个数字外其它成对)中找个唯一的一个
        num1 ^= num
      }
    }
    // 此时 num1 就是其中一个只出现一次的数字
  
    // 将 num1 与 mask 异或，得到另外一个
    const num2 = mask ^ num1
    return [num1, num2]
  };
  