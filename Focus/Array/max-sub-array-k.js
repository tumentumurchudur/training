/*
  Given an array nums and a target value k,
  find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.

  Given nums = [1, -1, 5, -2, 3], k = 3,
  return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)

  Given nums = [-2, -1, 2, 1], k = 1,
  return 2. (because the subarray [-1, 2] sums to 1 and is the longest)
*/

// O(NxN) = O(N^2)
function maxSubArrayLen(nums, k) {
  if (!nums.length) {
  	return 0
  }

  let maxLen = 0
  for (let i = 0; i < nums.length; i++) {
  	let sum = nums[i]

    if (sum === k) {
      maxLen = Math.max(maxLen, 1)
    }

    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j]

      if (sum === k) {
        maxLen = Math.max(maxLen, j - i + 1)
      }
    }
  }
  return maxLen
}
