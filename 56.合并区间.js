/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let merged = []
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (merged.length && merged[merged.length - 1][1] >= interval[0]) {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1])
    } else {merged.push(interval)}
  }
  // let i = 0;
  // while(i < intervals.length - 1) {
  //   let max = intervals[i][1]
  //   let right = i + 1;
  //   while (right < intervals.length && max >= intervals[right][0]) {
  //     max = Math.max(intervals[right][1], max);
  //     right++;
  //   }
  //   const step = right - i;
  //   if (step - 1) {
  //     intervals.splice(i, step, [intervals[i][0], max])
  //   }
  //   i++
  // }
  return merged;
};
// @lc code=end
