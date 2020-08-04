/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // let kHeap = nums.slice(0, k);
  // let len = nums.length;
  // let buildMinHeap = (arr) => {
  //   for (let i = Math.floor(k / 2); i >= 0; i--) {
  //     heapify(arr, i);
  //   }
  // };
  // let heapify = (arr, i) => {
  //   let left = 2 * i + 1,
  //     right = 2 * i + 2;
  //   if (arr[i] > arr[left]) {
  //     [arr[i], arr[left]] = [arr[left], arr[i]];
  //   }
  //   if (arr[i] > arr[right]) {
  //     [arr[i], arr[right]] = [arr[right], arr[i]];
  //   }
  // };
  // buildMinHeap(kHeap);
  // for (let i = k; i < len; i++) {
  //   if (nums[i] > kHeap[0]) {
  //     kHeap[0] = nums[i];
  //     buildMinHeap(kHeap);
  //   }
  // }
  // return kHeap[0];
  
};
// @lc code=end
