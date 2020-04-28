/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs, left = 0, right = strs.length - 1) {
  if (strs.length === 0) {
    return '';
  }
  if (left === right) {
    return strs[left]
  }
  let commonPrefix = (str1, str2) => {
    let len = Math.min(str1.length, str2.length);
    let prefix = '';
    for (let i = 0; i < len; i++) {
      if (str1.charAt(i) === str2.charAt(i)) {
        prefix += str1.charAt(i)
      } else {
        return prefix;
      }
    }
    return prefix;
  };
  let middle = Math.floor((left + right) / 2);
  if (left < middle) {
    let leftCommonPrefix = longestCommonPrefix(strs, left, middle);
    let rightCommonPrefix = longestCommonPrefix(strs, middle, right);
    return commonPrefix(leftCommonPrefix, rightCommonPrefix);
  }
  return commonPrefix(strs[left], strs[right]);
};
// @lc code=end
