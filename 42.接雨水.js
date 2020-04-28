/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length;
  /**
   * 暴力法
   */
  // let max_left = [height[0]];
  // let max_right = [];
  // let ans = 0;
  // max_right[len - 1] = height[len - 1];
  // for (let i = 1; i < len; i++) {
  //   max_left[i] = Math.max(height[i], max_left[i - 1]);
  // }
  // for (let i = len - 2; i >= 0; i--) {
  //   max_right[i] = Math.max(height[i], max_right[i + 1]);
  // }
  // for (let i = 1; i < len - 1; i++) {
  //   ans += Math.min(max_left[i], max_right[i]) - height[i]
  // }
  // return ans
  /**
   * 栈的应用
   */
  let ans = 0, current = 0, stack = [];
  while(current < len) {
    while(stack.length > 0 && stack[stack.length - 1] < height[current]) {
      let bottom = stack.pop();
      if (stack.length === 0) {
        break;
      }
      let distance = current - stack[stack.length - 1] - 1;
      let bound_height = Math.min(height[stack[stack.length - 1]], height[current]) - height
    }
    stack.push(current)
  }
};
// @lc code=end
