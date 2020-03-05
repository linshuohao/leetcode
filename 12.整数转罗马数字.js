/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  // const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  // let result = '';
  // let i = 0;
  // while(i < 13) {
  //   while(num >= nums[i]) {
  //     result += roman[i]
  //     num -= nums[i]
  //   }
  //   i++;
  // }
  // return result;
  const index = [
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "M", "MM", "MMM"]
  ];
  let result = '';
  result += index[3][Math.floor(num / 1000)]
  result += index[2][Math.floor(num / 100) % 10]
  result += index[1][Math.floor(num / 10) % 10]
  result += index[0][num % 10]
  return result;
};
// @lc code=end
