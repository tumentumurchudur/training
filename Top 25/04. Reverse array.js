// We are given an array (or string), the task is to reverse the array.
// Input  : arr = [1, 2, 3]
// Output : arr = [3, 2, 1]

// Iterative solution 1.
// O(1)
function reverseArray(arr) {
  return arr.reverse()
}

// Iterative solution 2.
function reverseArray(arr) {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    const temp = arr[start]

    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
  }
  return arr
}
