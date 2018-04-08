/*
  Given an array of n positive integers and a positive integer s,
  find the minimal length of a contiguous subarray of which the sum ≥ s.
  If there isn't one, return 0 instead.

  For example, given the array [2,3,1,2,4,3] and s = 7,
  the subarray [4,3] has the minimal length under the problem constraint.
*/

// Brute force
// O(NxN) = O(N^2)
function minSubArrayLen (s, nums) {
  // Always check edge cases.
  if (!nums.length) {
    return 0
  }

  let minCount = nums.length + 1

  for (let i = 0; i < nums.length; i++) {
    const minArray = [].concat(nums[i])
    let sum = nums[i]

    if (sum >= s && minCount > minArray.length) {
        minCount = minArray.length
        continue
    }

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]
      minArray.push(nums[j])

      if (sum >= s && minCount > minArray.length) {
          minCount = minArray.length

          break
      } else if (sum >= s) {
          break
      }
    }
  }
  return minCount > nums.length ? 0 : minCount
}

// O(N)
// Using two pointers
function minSubArrayLen(s, nums) {
  if (!nums.length) {
    return 0
  }

  let i = 0
  let j = 0
  let sum = 0
  let min = nums.length + 1

  while (j < nums.length) {
    sum += nums[j++]

    while (sum >= s) {
      min = Math.min(min, j - i)
      sum -= nums[i++]
    }
  }
  return min === nums.length + 1 ? 0 : min
}
