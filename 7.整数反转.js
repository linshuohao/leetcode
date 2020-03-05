/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (32.99%)
 * Likes:    1391
 * Dislikes: 0
 * Total Accepted:    202.9K
 * Total Submissions: 612.2K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const intMax = Math.pow(2, 31) - 1;
  const intMin = -Math.pow(2, 31);
  let ans = 0;
  while (x !== 0) {
    const pop = x % 10;
    x = parseInt(x / 10);
    if (ans > intMax / 10 || (ans == intMax / 10 && pop > 7)) return 0;
    if (ans < intMin / 10 || (ans == intMin / 10 && pop < -8)) return 0;
    ans = ans * 10 + pop;
  }
  return ans;
};
// @lc code=end
