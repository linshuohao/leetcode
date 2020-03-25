/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  /**
   * 动态规划
   */
  // const dp = [0];
  // let max = 0;
  // for (let i = 1; i < s.length; i++) {
  //   const c = s.charAt(i);
  //   if (c === ")") {
  //     if (s.charAt(i - 1) === "(") {
  //       dp[i] = i >= 2 ? dp[i - 2] + 2 : 2;
  //     } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) === "(") {
  //       dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] >= 2 ? dp[i - dp[i - 1] - 2] : 0);
  //     } else {
  //       dp[i] = 0
  //     }
  //     max = Math.max(dp[i], max)
  //   } else {
  //     dp[i] = 0
  //   }
  // }
  // return max;
  /**
   * 栈
   */
  // const stack = [-1];
  // let max = 0;
  // for (let i = 0; i < s.length; i++) {
  //   const c = s.charAt(i);
  //   if (c === '(') {
  //     stack.push(i)
  //   } else {
  //     stack.pop();
  //     if (stack.length === 0) {
  //       stack.push(i)
  //     } else {
  //       max = Math.max(max, i - stack[stack.length - 1])
  //     }
  //   }
  // }
  // return max
  /**
   * 不需要额外的空间
   */
  let left = 0,
    right = 0,
    max = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === "(") {
      left++;
    } else {
      right++;
      if (left === right) {
        max = Math.max(max, left + right);
      } else if (right > left) {
        left = right = 0;
      }
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const c = s.charAt(i);
    if (c === "(") {
      left++;
      if (left === right) {
        max = Math.max(max, left + right);
      } else if (right < left) {
        left = right = 0;
      }
    } else {
      right++;
    }
  }
  return max;
};
// @lc code=end
