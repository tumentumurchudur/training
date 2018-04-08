// Find all subsets of a given array
// [1,2] => [], [1], [2], [1,2]
// For every element in the array, two decisions to make
// whether to include or not include the next element in the array
findSubsets([1, 2])

function findSubsets(arr) {
  helper(arr, [], 0)
}

function helper(arr, subset, i) {
  // Check index reached the end of the given array
  if (i === arr.length) {
    console.log(subset)
  } else {
    // decision 1
    subset[i] = null
    helper(arr, subset, i + 1)

    // decision 2
    subset[i] = arr[i]
    helper(arr, subset, i + 1)
  }
}
