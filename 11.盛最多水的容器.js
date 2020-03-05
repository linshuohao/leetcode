/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const len = height.length;
  let i = 0, j = len - 1;
  let max = 0;
  while(i < j) {
    const left = height[i];
    const right = height[j];
    if (left <= right) {
      const y = left;
      const x = j - i;
      const area = x * y;
      if (area > max) {
        max = area
      }
      i++;
    } else {
      const y = right;
      const x = j - i;
      const area = x * y;
      if (area > max) {
        max = area
      }
      j--;
    }
  }
  return max
};
// @lc code=end
