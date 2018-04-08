// If you were only permitted to complete at most one transaction, design an algorithm to find the maximum profit.
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// Input: [7, 6, 4, 3, 1]
// Output: 0

// Brute force
// O(N^2)
function maxProfit(arr) {
  let max = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(arr[j] - arr[i], max)
    }
  }
  return max
}

// O(N)
function maxProfit(arr) {
  let min = Number.MAX_VALUE
  let maxProfit = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    } else if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min
    }
  }
  return maxProfit
}
