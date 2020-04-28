/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length;
  let result = [];
  if (len < 3) {
    return result;
  }
  nums.sort((a, b) => (a - b))
  if (nums[0] > 0 || nums[len - 1] < 0) {
    return result;
  }
  for (let i = 0; i < nums.length - 2; i++) {
    // 选c位
    const num = nums[i];
    if (num === nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = len - 1;
    while (
      left < right 
      // && num + nums[left] <= 0 
      // && num + nums[right] >= nums[right - 1]
    ) {
      const sum = num + nums[left] + nums[right];
      if (sum === 0) {
        result.push([num, nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
// @lc code=end
