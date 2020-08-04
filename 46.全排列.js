/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  let backtrack = (res, path) => {
    if (path.length === nums.length) {
      res.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (path.includes(num)) {
        continue;
      }
      path.push(num);
      backtrack(res, path);
      path.pop()
    }
  }
  backtrack(res, [])
  return res
};
// @lc code=end

