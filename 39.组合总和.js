/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b)
  let result = [];
  let dfs = (candidates, residue, begin, path) => {
    if (residue === 0) {
      result.push(path)
      return;
    }
    for (let i = begin; i < candidates.length; i++) {
      if (residue < candidates[i]) {
        break;
      }
      path.push(candidates[i])
      dfs(candidates, residue - candidates[i], i, [...path]);
      path.pop()
    }
  }
  dfs(candidates, target, 0, []);
  return result;
};
// @lc code=end
