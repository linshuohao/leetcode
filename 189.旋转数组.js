/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  /**
   * 暴力解法
   */
  // for (let i = 0; i < k; i++) {
  //   let temp = nums[nums.length - 1];
  //   let prev;
  //   for (let j = 0; j < nums.length; j++) {
  //     prev = nums[j];
  //     nums[j] = temp;
  //     temp = prev;
  //   }
  // }
  /**
   * 使用额外的数组
   */
  // let arr = [];
  // let len = nums.length
  // for (let i = 0; i < len; i++) {
  //   arr[(i + k) % len] = nums[i]
  // }
  // for (let i = 0; i < len; i++) {
  //   nums[i] = arr[i]
  // }
  /**
   * 使用环状替换
   */
  // let len = nums.length;
  // k = k % len;
  // let count = 0;
  // for (let i = 0; count < len; i++) {
  //   let curr = i,
  //     prev = nums[i];
  //   do {
  //     let next = (curr + k) % len,
  //       temp = nums[next];
  //     nums[next] = prev;
  //     prev = temp;
  //     curr = next;
  //     count++;
  //   } while (i !== curr);
  // }
  /**
   * 使用反转
   */
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};
// @lc code=end
