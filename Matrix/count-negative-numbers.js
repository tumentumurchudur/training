// Count the # of negative numbers in the given matrix
/*
[
  [-3, -2, -1, 1],
  [-2,  2,  3, 4],
  [ 4,  5,  7, 8]
]
*/

// Iterative solution 1.
// O(n) linear
function findNeg(matrix) {
  let total = 0

  for (let row = 0; row < matrix.length; row++) {
    for (let col = matrix[row].length - 1; col >= 0; col--) {
      if (matrix[row][col] < 0) {
        total += col + 1
        break
      }
    }
  }
  return total
}

// Iterative solution 2.
// O(n) linear
// n - row, m - col
function findNeg(matrix, n, m) {
  let count = 0
  let row = 0
  let col = m - 1

  while (col >= 0 && row < n) {
    if (matrix[row][col] < 0) {
      count += col + 1
      row++
    } else {
      col--
    }
  }
  return count
}
