/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;
  const dp = [];
  for (let i = 0; i < len1; i++) {
    dp[i] = [];
    for (let j = 0; j < len2; j++) {
      if (text1[i] === text2[j]) {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
      } else {
        if (i === 0 && j === 0) {
          dp[i][j] = 0
        } else if (i === 0) {
          dp[i][j] = dp[i][j - 1]
        } else if (j === 0) {
          dp[i][j] = dp[i - 1][j]
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  }
  return dp[len1 - 1][len2 - 1];
};
// @lc code=end
