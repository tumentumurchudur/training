// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Iterative solution 1
// O(n)
function chunk(arr, size) {
	const result = []
  let temp = []

  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i])

    if (temp.length === size) {
      result.push(temp)
      temp = []
    }
  }

  if (temp.length) {
    result.push(temp)
  }

  return result
}

// Iterative solution 2
// O(n)
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// Recursive solution
const result = [[]]
function chunk(arr, i, size) {
  if (i === arr.length) {
    return
  }

  chunk(arr, i + 1, size)

  const lastArray = result[result.length - 1]

  if (lastArray.length < size) {
    lastArray.push(arr[i])
  } else {
    result.push([arr[i]])
  }
}
