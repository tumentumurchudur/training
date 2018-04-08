// Find a pair of numbers equal to given sum
// const arr = [1, 2, 4, 6]; // find a pair that adds up to 10
// 4, 6 would be the answer
// Array must be sorted.
function hasPairWithSum(arr, sum) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    const total = arr[start] + arr[end]

    if (total === sum) {
      return true
    }

    if (total < sum) {
      start++
    } else {
      end--
    }
  }
  return false
}

function hasPairWithSum(arr, sum) {
  let comp = []

  for (let i = 0; i < arr.length; i++) {
    if (comp.indexOf(arr[i]) > 1) {
      return true
    }
    comp.push(sum - arr[i])
  }
  return false
}
