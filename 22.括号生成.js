/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = []
  const backtrack = (ans, cur, open, close, max) => {
    if (cur.length === max * 2) {
      ans.push(cur)
      return;
    }
    if (open < max) {
      backtrack(ans, cur + '(', open + 1, close, max)
    }
    if (close < open) {
      backtrack(ans, cur + ')', open, close + 1, max)
    }
  }
  backtrack(ans, '', 0, 0, n)
  return ans
};
// @lc code=end

