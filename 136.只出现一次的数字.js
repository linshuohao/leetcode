/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  // let map = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   const num = nums[i];
  //   if(map.has(num)) map.delete(num);
  //   else map.set(num)
  // }
  // return[...map.keys()][0]
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    a ^= nums[i]
  }
  return a
};
// @lc code=end

