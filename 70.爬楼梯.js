/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  let s1 = 1,
    s2 = 2;
  for (let i = 3; i <= n; i++) {
    [s1, s2] = [s2, s1 + s2];
  }
  return s2;
};
// @lc code=end
