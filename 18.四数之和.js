/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let result = [];
  let len = nums.length;
  if (len < 4) {
    return result;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let min = nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3];
    if (min > target) {
      break;
    }
    let max = nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3];
    if (max < target) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = len - 1;
      let innerMin = nums[i] + nums[j] + nums[left] + nums[left + 1];
      if (innerMin > target) {
        break;
      }
      let innerMax = nums[i] + nums[j] + nums[right] + nums[right - 1];
      if (innerMax < target) {
        continue;
      }
      while (left < right) {
        let cur = nums[i] + nums[j] + nums[left] + nums[right];
        if (cur === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
          while (nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (cur < target) {
          left++;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
        } else if (cur > target) {
          right--;
          while (nums[right] === nums[right + 1]) {
            right--;
          }
        }
      }
    }
  }
  return result;
};
// @lc code=end
