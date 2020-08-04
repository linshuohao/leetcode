/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let n = matrix.length;
  // if (n <= 1) {
  //   return matrix;
  // }
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      [
        matrix[i][j],
        matrix[j][n - i - 1],
        matrix[n - i - 1][n - j - 1],
        matrix[n - j - 1][i],
      ] = [
        matrix[n - j - 1][i],
        matrix[i][j],
        matrix[j][n - i - 1],
        matrix[n - i - 1][n - j - 1],
      ];
    }
  }
  // for (let i = 0; i < n; i++) {
  //   matrix[i].reverse()
  // }
};
// @lc code=end
