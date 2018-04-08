/*
  Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

  For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
  the contiguous subarray [4,-1,2,1] has the largest sum = 6.
*/

// Iterative solution
// O(n)
function findSubArray(nums) {
  if (nums === null || !nums.length) {
  	return 0
  }

	let max = nums[0]
  let sum = nums[0]

	for (let i = 1; i < nums.length; i++) {
		if (sum < 0) {
    	sum = nums[i];
    } else {
    	sum += nums[i];
    }
		max = Math.max(max, sum);
	}
	return max;
}

// Iterative solution
function findSubArray(nums) {
  let n = nums.length
  let dp = {}

  dp[0] = nums[0]
  let max = dp[0]

  for(let i = 1; i < n; i++) {
    dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
    max = Math.max(max, dp[i]);
  }

  return max;
}
