// Function that takes a string as input and returns
// the string reversed

// Recursive solution.
// O(n*logn)
function reverse(s) {
  const len = s.length

  if (len <= 1) {
    return s
  }

  let left = s.substring(0, len / 2)
  let right = s.substring(len / 2, len)

  return reverse(right) + reverse(left)
}

// Iterative solution
function reverse(str) {
  // String is immutable in JS!!!!
  let arr = str.split('')
  let beg = 0
  let end = str.length - 1

  while (beg < end) {
    const temp = arr[beg]
    arr[beg] = arr[end]
    arr[end] = temp

    beg++
    end--
  }
  return arr.join('')
}
