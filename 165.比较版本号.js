/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {

  const nums1 = version1.split('.');
  const nums2 = version2.split('.');
  const maxLength = Math.max(nums1.length, nums2.length);
  for (let i = 0; i < maxLength; i++) {
      const cur = nums1[i] || 0;
      const next = nums2[i] || 0;
      if (nums1[i] === nums2[i]) continue;
      if (parseInt(cur) > parseInt(next)) {
          return 1;
      } else if(parseInt(cur) < parseInt(next)) {
          return -1;
      }
  }
  return 0;
};
// @lc code=end

