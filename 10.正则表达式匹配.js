/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (24.64%)
 * Likes:    708
 * Dislikes: 0
 * Total Accepted:    34.6K
 * Total Submissions: 137.7K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 *
 *
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sArr = s.split("");
  const pArr = p.split("");
  const sLen = s.length;
  const pLen = p.length;
  const dp = Array.from({ length: sLen + 1 }, () => []);
  dp[sLen][pLen] = true;

  for (let i = sLen; i >= 0; i--) {
    i !== sLen && (dp[i][pLen] = false);
    for (let j = pLen - 1; j >= 0; j--) {
      const firstMatch = i < sLen && (sArr[i] === pArr[j] || pArr[j] === ".");

      if (j + 1 < pLen && p[j + 1] === "*") {
        dp[i][j] = dp[i][j + 2] || (firstMatch && dp[i + 1][j]);
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0];
};
isMatch('aa', 'a')
// var isMatch = function(s, p) {
//     const sArr = s.split('')
//     const pArr = p.split('')
//     const sLen = s.length;
//     const pLen = p.length;
//     if (sLen === 0 && pLen === 0) {
//       return true
//     }
//     const firstMatch = sLen > 0 && (sArr[0] === pArr[0] || pArr[0] === '.');

//     if (pLen >= 2 && pArr[1] === "*") {
//       return isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p))
//     } else {
//       return firstMatch && isMatch(s.substring(1), p.substring(1))
//     }
// };
// @lc code=end
