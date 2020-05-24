/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var mergeTwoSortedArray = (nums1, nums2) => {
    let len1 = nums1.length, len2 = nums2.length
    let merged = new Array(len1 + len2)
    let i = 0, j = 0, k = 0
    while (i < len1 && j < len2) {
      merged[k++] = nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]
    }
    while (i < len1) {
      merged[k++] = nums1[i++]
    }
    while (j < len2) {
      merged[k++] = nums2[j++]
    }
    return merged
  }
  
  var findMedianSortedArrays = (nums1, nums2) => {
    let merged = mergeTwoSortedArray(nums1, nums2)
    const len = merged.length
    return len % 2 === 0 ?
      (merged[len / 2] + merged[len / 2 - 1]) / 2 :
      merged[(len - 1) / 2]
  }
  
  