/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // let dp = []
  // dp[nums.length - 1] = true;
  // for (let i = nums.length - 2; i >= 0; i--) {
  //   let num = nums[i]
  //   for (let j = 0; j <= num; j++) {
  //     if (dp[i+j]) {
  //       dp[i] = true
  //       break;
  //     }
  //   }
  // }
  // return dp[0] || false
  // let dp = [];
  // let len = nums.length - 1
  // function justify(i) {
  //   let num = nums[i]
  //   let step = num;
  //   if (num >= len - i) {
  //     return true
  //   }
  //   if (num === 0) {
  //     dp[i] = false
  //     return false
  //   }
  //   while(step > 0) {
  //     let target = i + step;
  //     if (dp[target] === false) {
  //       step--;
  //     } else if (!justify(target)) {
  //       step--;
  //     } else {
  //        return true
  //     }
  //   }
  //   dp[i] = false
  //   return false
  // }
  // return justify(0)
  let maxArrive = nums[0]
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (i <= maxArrive) {
      maxArrive = Math.max(maxArrive, i + nums[i])
      if (maxArrive >= len - 1) {
        return true
      }
    } else {
      return false
    }
  }
  return false
};
// @lc code=end

