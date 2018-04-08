/*
  Given a 2d grid map of '1's (land) and '0's (water),
  count the number of islands. An island is surrounded by water and
  is formed by connecting adjacent lands horizontally or vertically.
  You may assume all four edges of the grid are all surrounded by water.
*/

function findIslands(islands) {
  let count = 0

  for (let i = 0; i < islands.length; i++) {
    for (let j = 0; j < islands[i].length; j++) {
      if (islands[i][j] === '1') {
        // depth first search and then set 1 to 0
        dfs(islands, i, j)
        count++
      }
    }
  }
  return count
}

function dfs(islands, i, j) {
  if (i < 0 || j < 0 || i >= islands.length || j >= islands[i].length || islands[i][j] !== '1') {
    return
  }

  islands[i][j] = '0'

  dfs(islands, i, j + 1)
  dfs(islands, i, j - 1)
  dfs(islands, i + 1, j)
  dfs(islands, i - 1, j)
}
