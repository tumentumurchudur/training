// Given an array nums, write a function to move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// For example, given nums = [0, 1, 0, 3, 12], after calling your function,
// nums should be [1, 3, 12, 0, 0].

// O(n)
function moveZeros(arr) {
  let i = 0
  const temp = []

  while (i < arr.length) {
    if (arr[i] === 0) {
    	temp.push(0)
      arr.splice(i, 1)
    } else {
      i++
    }
  }
  return arr.concat(temp)
}
