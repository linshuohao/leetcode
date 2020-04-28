/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) {
    return 0;
  }
  obstacleGrid[0][0] = 1
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  for (let i = 1; i < n; i++) {
    obstacleGrid[0][i] =
      obstacleGrid[0][i] === 0 && obstacleGrid[0][i - 1] == 1 ? 1 : 0;
  }

  for (let i = 1; i < m; i++)
    obstacleGrid[i][0] =
      obstacleGrid[i][0] === 0 && obstacleGrid[i - 1][0] == 1 ? 1 : 0;
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      obstacleGrid[i][j] =
        obstacleGrid[i][j] === 0
          ? obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
          : 0;
    }
  }
  return obstacleGrid[m - 1][n - 1];
};
// @lc code=end
