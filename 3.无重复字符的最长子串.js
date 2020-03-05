/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  const strArr = s.split("");
  let max = 0;
  let arr = [];
  for (let i = 0; i < len; i++) {
    const a = strArr[i];
    const aLen = arr.length;
    for (let j = 0; j < aLen; j++) {
      const b = arr[j];
      if (a === b) {
        if (aLen > max) max = aLen;
        arr.splice(0, j + 1);
        break;
      }
    }
    arr.push(a);
  }
  if (arr.length > max) max = arr.length;
  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  // let left = 0;
  let max = 0;
  const strArr = s.split("");

  for (let i = 0, j = 0; j < strArr.length; j++) {
    const c = strArr[j];
    if (map[c]) {
      i = Math.max(map[c], i);
    }
    max = Math.max(max, j - i + 1);
    map[c] = j + 1
  }
  return max;

  // return s.split("").reduce((max, v, i) => {
  //   left = map[v] >= left ? map[v] + 1 : left;
  //   map[v] = i;
  //   return Math.max(max, i - left + 1);
  // }, 0);
};
