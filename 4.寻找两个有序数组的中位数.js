/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  let m = nums1.length;
  let n = nums2.length;
  let iMin = 0,
    iMax = m,
    halfLen = Math.floor((m + n + 1) / 2);
  while (iMin <= iMax) {
    let i = Math.floor((iMin + iMax) / 2),
      j = halfLen - i,
      left1 = nums1[i - 1] !== undefined ? nums1[i - 1] : -Infinity,
      left2 = nums2[j - 1] !== undefined ? nums2[j - 1] : -Infinity,
      right1 = nums1[i] !== undefined ? nums1[i] : Infinity,
      right2 = nums2[j] !== undefined ? nums2[j] : Infinity;
    if (left1 > right2) {
      iMax = i - 1; // i太大
    } else if (left2 > right1) {
      iMin = i + 1; // i太小
    } else {
      if ((m + n) & 1) return Math.max(left1, left2);
      return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
    }
  }
};