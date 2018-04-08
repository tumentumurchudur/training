// Find a pair of numbers equal to given sum
// const arr = [1, 2, 4, 6]; // find a pair that adds up to 10
// 4, 6 would be the answer

// If array is sorted
// O(n)
function find2Sum(arr, sum) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    const total = arr[start] + arr[end]

    if (total === sum) {
      return [ arr[start], arr[end] ]
    }

    if (total < sum) {
      start++
    } else {
      end--
    }
  }
  return []
}

// Array is not sorted
// O(n)
function find2Sum(arr, sum) {
  const comp = []

  for (let i = 0; i < arr.length; i++) {
    const index = comp.indexOf(arr[i])

    if (index > -1) {
      return [ comp[index], arr[i] ]
    }
    comp.push(sum - arr[i])
  }
  return []
}
