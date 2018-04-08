// Given an array S of n integers, are there elements a, b, c in S
// such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
// For example, given array S = [-1, 0, 1, 2, -1, -4],
/*
A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
*/

// Brute force solution
// O(nxnxn) = O(n^3)
function find3Sum(arr, sum) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === sum) {
          return true
        }
      }
    }
  }
  return false
}

// Better solution after sorting the array
// O(n^2)
function find3Sum(arr, sum) {
  for (let i = 0; i < arr.length - 2; i++) {
    let j = i + 1;
    let l = arr.length - 1

    while (l > j) {
      const total = arr[i] + arr[j] + arr[l]

      if (total === sum) {
        return true
      } else if (total < sum) {
        j++
      } else {
        l--
      }
    }
  }
  return false
}
