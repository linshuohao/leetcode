/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    '}': '{',
    ')': '(',
    ']': '[',
  }
  let arr = []
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    if (c === '(' || c === '{' || c === '[') {
      arr.push(c)
    } else {
      const pop = arr.pop();
      if (pop !== map[c]) {
        return false
      }
    }
  }
  return arr.length === 0
};
// @lc code=end

