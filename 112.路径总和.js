/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) {
    return false;
  }
  let val = root.val;
  if (root.left === null && root.right === null) {
    return sum - val === 0;
  }
  return hasPathSum(root.left, sum - val) || hasPathSum(root.right, sum - val);
};
// @lc code=end

