/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  // const map = {
  //   M: 1000,
  //   D: 500,
  //   C: 100,
  //   L:50,
  //   X:10,
  //   V:5,
  //   I:1,
  // }
  // let sum = 0;
  // let pre = map[s.charAt(0)]
  // for (let i = 1; i < s.length; i++) {
  //   const cur = map[s.charAt(i)];
  //   if (pre < cur) {
  //     sum -= pre
  //   } else {
  //     sum += pre
  //   }
  //   pre = cur
  // }
  // sum += pre
  // return sum;
  const map = new Map()
  map.set("I", 1);
  map.set("IV", 4);
  map.set("V", 5);
  map.set("IX", 9);
  map.set("X", 10);
  map.set("XL", 40);
  map.set("L", 50);
  map.set("XC", 90);
  map.set("C", 100);
  map.set("CD", 400);
  map.set("D", 500);
  map.set("CM", 900);
  map.set("M", 1000);
  let ans = 0
  for (let i = 0; i < s.length;) {
    if (i + 1 < s.length && map.has(s.substring(i, i + 2))) {
      ans += map.get(s.substring(i, i + 2));
      i += 2
    } else {
      ans += map.get(s.charAt(i));
      i++
    }
  }
  return ans
}
// @lc code=end

