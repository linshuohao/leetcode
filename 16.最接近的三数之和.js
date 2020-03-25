/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1,
      min = nums[i] + nums[left] + nums[left + 1],
      max = nums[i] + nums[right] + nums[right - 1];
    if (min > target) {
      if (Math.abs(result - target) > Math.abs(min - target)) {
        return min;
      }
      return result;
    }
    if (max < target) {
      if (Math.abs(result - target) > Math.abs(max - target)) {
        result = max;
      }
      continue;
    }
    while (left < right) {
      min = nums[i] + nums[left] + nums[left + 1];
      max = nums[i] + nums[right] + nums[right - 1];
      if (min > target) {
        if (Math.abs(result - target) > Math.abs(min - target)) {
          result = min;
        }
        break;
      }
      if (max < target) {
        if (Math.abs(result - target) > Math.abs(max - target)) {
          result = max;
        }
        break;
      }
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === target) {
        return sum;
      } else if (sum > target) {
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        right--;
      } else {
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        left++;
      }
      if (Math.abs(result - target) > Math.abs(sum - target)) {
        result = sum;
      }
    }
    while (i < nums.length - 2 && nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result
};
// @lc code=end
