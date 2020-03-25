/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map[num]) {
      return true
    }
    map[num] = true
  }
  return false
};
// @lc code=end
