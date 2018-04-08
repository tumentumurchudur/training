// An unsorted array of integers is given;
// you need to find the max product formed my multiplying three numbers.
// (You cannot sort the array, watch out when there are negative numbers)
// [5, 3, -4, 2]

// Iterative solution.
// O(n)
function findMax3(arr) {
  let max = []
  let total = 1;

  for (let i = 0; i < arr.length; i++) {
    helper(max, arr[i])
  }

  max.forEach(v => total *= v)

  return total
}

function helper(max, val) {
  let diff = 0
  let index = -1

  if (max.length < 3) {
    max.push(val)
    return
  }

  for (let i = 0; i < max.length; i++) {
    if (val > max[i] && val - max[i] > diff) {
      diff = val - max[i]
      index = i
    }
  }

  if (index !== -1) {
    max[index] = val
  }
}
