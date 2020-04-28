/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [];
  let dfs = (candidates, residue, begin, path) => {
    if (residue === 0) {
      result.push(path);
      return;
    }
    for (let i = begin; i < candidates.length; i++) {
      if (residue < candidates[i]) {
        break;
      }
      path.push(candidates[i]);
      dfs(candidates, residue - candidates[i], i + 1, [...path]);
      path.pop();
      while (candidates[i] === candidates[i + 1]) {
        i++;
      }
    }
  };
  dfs(candidates, target, 0, []);
  return result;
};
// @lc code=end
