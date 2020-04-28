/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let left = 0, right = nums.length - 1;
  let lo, hi;
  if (nums.length === 0) {
    return [-1, -1];
  }
  if (left === right) {
    return nums[0] === target ? [0, 0] : [-1, -1]
  }
  while(left < right) {
    if (nums[left] === target) {
      lo = left;
      break;
    }
    if(right === left + 1) {
      if (nums[right] === target) {
        lo = right;
        break;
      } else {
        return [-1, -1]
      }
    }
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid
    } else {
      left = mid
    }
  }
  left = lo, right = nums.length - 1
  while(left <= right) {
    if (nums[right] === target) {
      hi = right;
      break;
    }
    if(right === left + 1 && nums[left] === target) {
      hi = left;
      break;
    }
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid
    } else {
      right = mid
    }
  }
  return [lo, hi]
};
// @lc code=end

