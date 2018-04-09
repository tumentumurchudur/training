// const arr = [5, 2, 3]
// Prints all subsets of given array.
// It does change the order in which elements appear and nulls are allowed.
function printSubsets(arr) {
  subset(arr, [], 0)
}

function findSubset(arr, subset, i) {
  if (i === arr.length) {
    console.log(subset)
  } else {
    subset[i] = arr[i]
    findSubset(arr, subset, i + 1)

    subset[i] = null
    findSubset(arr, subset, i + 1)
  }
}
