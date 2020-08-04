/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = '0';
  const dfs = (x, y) => {
    grid[x][y] = '0';
    if (x < grid.length - 1 && grid[x + 1][y] === '1') {
      dfs(x + 1, y);
    }
    if (y < grid[x].length - 1 && grid[x][y + 1] === '1') {
      dfs(x, y + 1);
    }
    if (x && grid[x - 1][y] === '1') {
      dfs(x - 1, y);
    }
    if (y && grid[x][y - 1] === '1') {
      dfs(x, y - 1);
    }
  };
  for (let i = 0; i < grid.length; i++) {
    const arr = grid[i];
    for (let j = 0; j < arr.length; j++) {
      const item = arr[j];
      if (item === '1') {
        dfs(i, j);
        count++;
      }
    }
  }
  return count
};
// @lc code=end
