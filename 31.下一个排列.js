/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  const reverse = (nums, start) => {
    let i = start,
      j = nums.length - 1;
    while (i < j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  };
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  reverse(nums, i + 1)
};
// @lc code=end
