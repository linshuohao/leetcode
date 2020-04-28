/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0,
    right = nums.length - 1,
    middle = Math.floor((left + right) / 2);
  while (left <= right) {
    if (nums[middle] === target) {
      return middle
    }
    if (nums[left] <= nums[middle]) {
      if (target >= nums[left] && target <= nums[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    } else {
      if (target <= nums[right] && target >= nums[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
    middle = Math.floor((left + right) / 2);
  }
  return -1;
};
// @lc code=end
