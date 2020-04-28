/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let result = [];
  if (root === null) {
    return result;
  }
  let dfs = (root, sum, path, result) => {
    if (root.left === null && root.right === null) {
      if (sum - root.val === 0) result.push([...path, root.val]);
      return;
    }
    root.left !== null &&
      dfs(root.left, sum - root.val, [...path, root.val], result);
    root.right !== null &&
      dfs(root.right, sum - root.val, [...path, root.val], result);
  };
  dfs(root, sum, [], result);
  return result;
};
// @lc code=end
