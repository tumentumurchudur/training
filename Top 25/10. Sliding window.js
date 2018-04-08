// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum of ‘k’
// consecutive elements in the array.

/*
Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700

Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
         k = 4
Output : 39
*/

// O(n)
// n - length of arr, k = window size.
function findSum(arr, n, k) {
  if (n < k) {
    return -1
  }

  // Compute sum of first window of size k
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
  	maxSum += arr[i]
  }

  // Compute sums of remaining windows by removing first element of previous
  // window and adding last element of current window.
  let windowSum = maxSum;
  for (let i = k; i < n; i++) {
    windowSum = windowSum + arr[i] - arr[i - k]
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum
}

// O(n)
function findSum(arr, n, k) {
  if (n < k) {
    return -1
  }

  let start = 0
  let max = 0
  while (start + k <= n) {
    const vals = arr.slice(start, start + k)

    let sum = 0
    vals.forEach(val => sum += val)

    max = Math.max(sum, max)

    start++
  }
  return max
}
